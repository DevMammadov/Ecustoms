import { IColumn } from "components/shared/";
import { IInfo } from "views/myInfo/types";
import { useTranslator } from "localization";

export const useTableData = () => {
  const lang = useTranslator("myInfo");

  const personalInfo: IColumn[] = [
    { name: "pinCode", title: lang.pinCode },
    { name: "fullName", title: `${lang.lastName}, ${lang.name}, ${lang.fathersName}` },
    { name: "hasStamp", title: lang.SignatureStatus },
    { name: "eBirbasa", title: lang.representativeActivities },
    { name: "attestatNo", title: lang.qualificationCertificate },
  ];

  const companyInfo: IColumn[] = [
    { name: "voen", title: lang.voen },
    { name: "companyName", title: lang.organizationName },
    { name: "companyAddress", title: lang.address },
    { name: "status", title: lang.status },
    { name: "representation", title: lang.representativeActivities },
  ];

  const modifyData = (obj: IInfo) => {
    let newObj = { ...obj };
    let personRep = "";
    let companyRep = "";
    if (newObj) {
      if (newObj.eBirbasa === 1) personRep += lang.direct;
      if (newObj.eDolayi === 1) personRep += personRep.length > 0 ? ` / ${lang.indirect}` : lang.indirect;

      if (newObj.representation?.includes("B")) companyRep += lang.direct;
      if (newObj.representation?.includes("D"))
        companyRep += companyRep.length > 0 ? ` / ${lang.indirect}` : lang.indirect;
      if (newObj.hasStamp === 1) {
        newObj.hasStamp = lang.sealAuthorized;
      } else {
        newObj.hasStamp = lang.sealUnAuthorized;
      }
      newObj.attestatNo = newObj.attestatNo && `No ${newObj.attestatNo} - ${newObj.attestatDate}`;
      newObj.eBirbasa = personRep.length > 0 ? `${personRep} ${lang.representation}` : ("" as any);
      newObj.representation = companyRep.length > 0 ? `${companyRep} ${lang.representation}` : "";
    }
    return obj && Object.keys(obj).length > 0 ? newObj : {};
  };

  const statusKeys = (obj: IInfo) => {
    let statusColumns: IColumn[] = [];

    if (obj && obj.greenCor) {
      for (let str of obj?.greenCor) {
        statusColumns.push({ name: "", title: str });
      }
    }
    return statusColumns;
  };

  return { personalInfo, companyInfo, modifyData, statusKeys };
};
