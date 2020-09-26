import React, { FC, useCallback, useState, useEffect, useMemo } from "react";
import { useStyles } from "./manage.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { IPostalServicesState } from "views/postal-services/store/reducer";
import { SectionHeader, Alert, BackButton } from "components/shared";
import { Grid, Paper } from "@material-ui/core";
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/pro-solid-svg-icons";
import clsx from "clsx";
import { validateXML } from "views/postal-services/validating/validateXML";
import { validator } from "../../validating";
import { PostalServicesActions } from "../../store/action";
import { IFileErrors, IGood } from "views/postal-services/types";
import { ValidateResult, LinearProgress, UploadResult } from "views/postal-services/components";

export interface IAlert {
  docError: string | null;
  objectErrors: IFileErrors[];
}

export interface IAddXml {
  postalServices: IPostalServicesState;
  sendGood(object: any): void;
  saveGood(xmlGoods: IGood[]): void;
  clearStatus(): void;
}

const AddXml: FC<IAddXml> = ({ postalServices, sendGood, saveGood, clearStatus }) => {
  const lang = useTranslator("postal-services");
  const classes: any = useStyles();
  const [alert, setAlert] = useState<IAlert>({ docError: "", objectErrors: [] });
  const [file, setFile] = useState<any>(null);

  const xmlUploading = useMemo(
    () => postalServices.xmlGoods?.length - 1 > postalServices.uploadIndex && postalServices.uploadIndex > 0,
    [postalServices.xmlGoods, postalServices.uploadIndex]
  );
  const xmlUploaded = useMemo(() => postalServices.xmlGoods?.length - 1 === postalServices.uploadIndex, [
    postalServices.xmlGoods,
    postalServices.uploadIndex,
  ]);
  const xmlUploadCanceled = useMemo(() => postalServices.fails?.length > 0 || postalServices.warnings?.length > 0, [
    postalServices.fails,
    postalServices.warnings,
  ]);

  useEffect(() => {
    clearStatus();
    saveGood([]);
  }, [clearStatus, saveGood]);

  const takeResult = (xmlGoods: [], objectErrors: IFileErrors[], docError: string) => {
    setAlert({ ...alert, docError, objectErrors });
    saveGood(xmlGoods);
  };

  const { validate } = validateXML(takeResult, validator, "TR_NUMBER", "GoodsInfo");

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (acceptedFiles.length > 0) {
        clearStatus();
        setFile(acceptedFiles[0]);
        validate(acceptedFiles[0]);
      }
    },
    [clearStatus, validate]
  );

  const handleFileUpload = () => {
    sendGood(postalServices.xmlGoods[0]);
  };

  return (
    <>
      <SectionHeader title={lang.postalServices} />
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
              <Dropzone multiple={false} disabled={xmlUploading} accept="text/xml" onDrop={onDrop}>
                {({ getRootProps, getInputProps, isDragActive }) => (
                  <Paper {...getRootProps()} className={clsx(classes.dropZone, isDragActive && classes.activeZone)}>
                    <FontAwesomeIcon className={classes.uploadIcon} icon={faCloudUploadAlt} />
                    <p>{file ? file.name : lang.clickOrDragFile}</p>
                    <input {...getInputProps()} />
                  </Paper>
                )}
              </Dropzone>
            </Grid>
            <Grid item xs={12} className={classes.errorAlertContainer}>
              <ValidateResult
                uploading={xmlUploading}
                alerts={alert}
                goodCount={postalServices.xmlGoods?.length}
                uploadIndex={postalServices.uploadIndex}
                onUpload={handleFileUpload}
                complateTitle={lang.uploadComplated}
              />
            </Grid>
            {(xmlUploading || xmlUploaded) && (
              <Grid item xs={12}>
                <LinearProgress
                  totalCount={postalServices.xmlGoods?.length}
                  error={postalServices.fails.length}
                  warn={postalServices.warnings.length}
                  success={postalServices.successCount}
                  currentIndex={postalServices.uploadIndex}
                />
              </Grid>
            )}

            {xmlUploaded && xmlUploadCanceled && (
              <Grid item xs={12}>
                <UploadResult
                  errCount={postalServices.fails?.length}
                  showErrTab={postalServices.fails?.length > 0}
                  warnList={postalServices.warnings}
                  warnCount={postalServices.warnings?.length}
                  showWarnTab={postalServices.warnings?.length > 0}
                  warnContentTitle={lang.alredyExistTrNumber}
                  className={classes.uploadResult}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state: IAppState) => ({ postalServices: state.postalServices });

export default connect(mapStateToProps, PostalServicesActions)(AddXml);
