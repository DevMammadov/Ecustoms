import { ICustomsWarehousesInfo } from "views/myInfo/types";
import { useTranslator } from "localization";

export const useTableData = () => {
  const lang = useTranslator("myInfo");

  const WarehouseDataColumns = [
    { title: `${lang.warehouseCode}`, field: "code", width: 100 },
    { title: `${lang.name}`, field: "name", width: 100 },
    { title: `${lang.address}`, field: "address", width: 300 },
    { title: `${lang.areaSubsidaryArea}`, field: "area", width: 100 },
    { title: `${lang.warehouseType}`, field: "depoType", width: 50 },
    { title: `${lang.warehouseStatus}`, field: "status", width: 100 },
    { title: `${lang.customsStatus}`, field: "customsStatus", width: 100 },
  ];

  const modifyData = (wareHouses: ICustomsWarehousesInfo[]) => {
    let tableData = [...wareHouses];

    for (let item of tableData) {
      if (item.customsStatus === 1) {
        tableData[tableData.indexOf(item)].customsStatus = lang.denied;
      } else {
        tableData[tableData.indexOf(item)].customsStatus = lang.allowed;
      }
    }

    return tableData;
  };

  return { WarehouseDataColumns, modifyData };
};
