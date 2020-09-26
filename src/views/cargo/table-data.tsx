import { useTranslator } from "localization";
import { IModalData } from "components/shared/filter-bar/types";

export const columns = [
  { name: "Tarix", title: `Tarix`, field: "inserT_DATE", width: 200 },
  { name: "Malın adı / kodu", title: `Malın kodu / adı`, field: "namE_OF_GOODS", width: 300 },
  { name: "Çəkisi (kg)", title: `Çəkisi (kg)`, field: "weighT_GOODS", width: 120 },
  { name: "Miqdarı(əd)", title: `Miqdarı(əd)`, field: "quantitY_OF_GOODS", width: 200 },
  { name: "İnvoys dəyəri / valyuta", title: `İnvoys dəyəri / valyuta`, field: "invoicE_PRICE", width: 230 },
  { name: "Göndərən ölkə", title: `Göndərən ölkə`, field: "goodS_TRAFFIC_FR", width: 200 },
  { name: "GB No", title: `GB No`, field: "qiB_NO", width: 100 },
  { name: "Anbar kodu", title: `Anbar kodu`, field: "objecT_CODE", width: 140 },
  { name: "Çatma vaxtı", title: `Çatma vaxtı`, field: "destinatioN_DATE", width: 140 },
];

export const useModalForm = (data: any[]) => {
  const lang = useTranslator("postal-services");

  return [
    {
      name: "goodS_CODE",
      label: lang.goodsCode,
      type: "text",
    },
    {
      name: "namE_OF_GOODS",
      label: lang.goodsName,
      type: "text",
    },
    {
      name: "idxaL_NAME",
      label: lang.importer,
      type: "text",
    },
    {
      name: "goodS_TRAFFIC_FR",
      label: lang.senderCountry,
      type: "select",
      optionLabel: "name",
      optionValue: "code",
      data: data,
      showAtBar: false,
    },
    {
      name: "idxaL_VOEN",
      label: lang.importerVoenGooen,
      type: "text",
    },
  ] as IModalData[];
};
