import React, { FC, useCallback, useState, useEffect } from "react";
import { useStyles } from "./add-xml.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { SectionHeader, Alert, BackButton } from "components/shared";
import { Grid, Paper } from "@material-ui/core";
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/pro-solid-svg-icons";
import clsx from "clsx";
import { validateXML } from "views/postal-services/validating/validateXML";
import { IFileErrors } from "views/postal-services/types";
import { ValidateResult, LinearProgress, UploadResult } from "views/postal-services/components";
import { validator, isThesame } from "views/cargo/validating";
import { CargoActions } from "views/cargo/store/action";
import { ICargoState } from "views/cargo/store/reducer";
import { UploadProgress } from "../../components";
import { ICargoXmlGood } from "views/cargo/types";

export interface IAlert {
  docError: string | null;
  objectErrors: IFileErrors[];
}

export interface IAddXml {
  cargo: ICargoState;
  saveGood(xmlGoods: ICargoXmlGood[]): void;
  sendFile(xmlGoods: ICargoXmlGood[]): void;
  clearStatus(): void;
  checkVoen(voen: string): void;
}

const AddXml: FC<IAddXml> = ({ cargo, saveGood, clearStatus, checkVoen, sendFile }) => {
  const lang = useTranslator("cargo", ["postal-services"]);
  const classes: any = useStyles();
  const [alert, setAlert] = useState<IAlert>({ docError: "", objectErrors: [] });
  const [file, setFile] = useState<any>(null);
  // const xmlUploading = useMemo(() => cargo.xmlGoods?.length - 1 > cargo.uploadIndex && cargo.uploadIndex > 0, [
  //   cargo.xmlGoods,
  //   cargo.uploadIndex,
  // ]);

  useEffect(() => {
    clearStatus();
    saveGood([]);
  }, [clearStatus, saveGood]);

  const takeResult = (xmlGoods: [], objectErrors: IFileErrors[], docError: string) => {
    setAlert({ ...alert, docError, objectErrors });
    if (!isThesame(xmlGoods, "QIB_NO")) {
      setAlert({ ...alert, docError: "1c" });
    } else {
      saveGood(xmlGoods);
    }
  };

  const { validate } = validateXML(takeResult, validator, "GOODS_CODE", "CargoInfo");

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (acceptedFiles.length > 0) {
        saveGood([]);
        clearStatus();
        setFile(acceptedFiles[0]);
        validate(acceptedFiles[0]);
      }
    },
    [clearStatus, saveGood, validate]
  );

  const handleFileUpload = () => {
    checkVoen(cargo.xmlGoods[0].IDXAL_VOEN);
  };

  const uploadXml = () => {
    sendFile(cargo.xmlGoods);
  };

  return (
    <>
      <SectionHeader title={lang.cargoTitle} />
      <Grid container className={classes.container} component={Paper}>
        <BackButton />
        <Grid item xs={12}>
          <Alert
            titleContent={lang.atention}
            severity="info"
            collapsable
            text={
              <>
                <div>{lang.countryAndCurrencyMustBeCorrect} </div>
                <div>{lang.fileSizeMustBeLessThan200Mb}</div>
              </>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.dropZoneContainer}>
            <Grid item xs={12}>
              <Dropzone
                multiple={false}
                disabled={cargo?.xmlGoods?.length - 1 > cargo?.uploadIndex && cargo?.uploadIndex > 0}
                accept="text/xml"
                onDrop={onDrop}
              >
                {({ getRootProps, getInputProps, isDragActive }) => (
                  <Paper {...getRootProps()} className={clsx(classes.dropZone, isDragActive && classes.activeZone)}>
                    <FontAwesomeIcon className={classes.uploadIcon} icon={faCloudUploadAlt} />
                    <p>{file ? file.name : lang.clickOrDragFile}</p>
                    <input {...getInputProps()} />
                  </Paper>
                )}
              </Dropzone>
            </Grid>
            <Grid item xs={12}>
              <ValidateResult
                uploading={cargo.xmlGoods?.length - 1 > cargo.uploadIndex && cargo.uploadIndex > 0}
                alerts={alert}
                goodCount={cargo.xmlGoods?.length}
                uploadIndex={cargo.uploadIndex}
                onUpload={handleFileUpload}
                uploadBtnTitle={lang.checkVoen}
                complateTitle={lang.VerifyComplated}
              />
            </Grid>

            <Grid item xs={12}>
              <LinearProgress
                totalCount={cargo.xmlGoods?.length}
                error={cargo.fails?.length}
                success={cargo.successCount}
                currentIndex={cargo.uploadIndex}
                showWarn={false}
              />
            </Grid>
            {cargo.xmlGoods.length > 0 && cargo.xmlGoods?.length - 1 === cargo.uploadIndex && (
              <Grid item xs={12}>
                {cargo.fails?.length > 0 ? (
                  <UploadResult
                    errCount={cargo.fails?.length}
                    errTitle={lang.incorrectVoens}
                    showErrTab={cargo.fails?.length > 0}
                    errContentTitle={lang.incorrectVoenOfGoods}
                    errList={cargo.fails}
                    className={classes.uploadResult}
                    showWarnTab={false}
                    showErrReason={false}
                  />
                ) : (
                  <UploadProgress
                    onUpload={uploadXml}
                    title={lang.VoensVerified}
                    uploadStatus={cargo.fileSendStatus}
                    successText={lang.fileUploadedSuccessfuly}
                    uploadingText={lang.uploading}
                    failText={lang.errorDuringUpload}
                  />
                )}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state: IAppState) => ({ cargo: state.cargo });

export default connect(mapStateToProps, CargoActions)(AddXml);
