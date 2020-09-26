import { CurrencyType, direction, countryType } from "views/postal-services/validating/validate-arrays";
/*
"18": "QIB_NO - 14 simvoldan çox ola bilməz",
"19": "GOODS_CODE 4 və 10 aralığında ola bilər",
"20": "IDXAL_VOEN" 10 simvoldan çox ola bilməz",
"21": "IDXAL_PHONE" 13 simvoldan çox ola bilməz",
"22": "OBJECT_CODE" mütləq daxil edilməlidir",
"23": "OBJECT_CODE" mütləq daxil edilməlidir",
"24": "DESTINATION_DATE" düzgün daxil edilməmişdir,
"2": "DIRECTION "0", "1", "2", "3", "5", "9" rəqəmlərindən biri ola bilər"
"3": "QUANTITY_OF_GOODS 0 və 9 xana aralığında ola bilər"
"4": "WEIGHT_GOODS mütləq daxil edilməli və maksimum 15 xanadan ibarət olmalıdır ( kəsr hissə varsa maksimum 3 xana )"
"5": "INVOYS_PRICE mütləq daxil edilməli və maksimum 18 xanadan ibarət olmalıdır ( kəsr hissə varsa maksimum 2 xana )"
"6": "CURRENCY_TYPE valyuta doğru təyin edilməyib"
"7": "NAME_OF_GOODS mütləq daxil edilməlidir və 4000 simvoldan çox ola bilməz"
"8": "IDXAL_NAME mütləq daxil edilməlidir və 800 simvoldan çox ola bilməz"
"9": "IDXAL_ADRESS mütləq daxil edilməlidir və 250 simvoldan çox ola bilməz"
"10": "IXRAC_NAME mütləq daxil edilməlidir və 500 simvoldan çox ola bilməz"
"11": "IXRAC_ADRESS mütləq daxil edilməlidir və 250 simvoldan çox ola bilməz"
"12": "GOODS_TRAFFIC_FR doğru təyin edilməyib"
"13": "GOODS_TRAFFIC_TO doğru təyin edilməyib"
*/

export const validator = (object: any) => {
  let errors: { name: string; error: number }[] = [];

  if (object.QIB_NO && object.QIB_NO.length > 14) errors.push({ name: "QIB_NO", error: 18 });
  if ((object.GOODS_CODE && object.GOODS_CODE.length > 10) || object.GOODS_CODE.length < 4)
    errors.push({ name: "GOODS_CODE", error: 19 });

  if (!object.IDXAL_VOEN || object.IDXAL_VOEN.length > 10) errors.push({ name: "IDXAL_VOEN", error: 20 });
  if (!object.IDXAL_PHONE || object.IDXAL_PHONE.length > 13) errors.push({ name: "IDXAL_PHONE", error: 21 });
  if (!object.OBJECT_CODE) errors.push({ name: "OBJECT_CODE", error: 22 });
  if (!object.OBJECT_ADDRESS) errors.push({ name: "OBJECT_ADDRESS", error: 23 });
  if (
    !object.DESTINATION_DATE &&
    !/^(0?[1-9]|[12][0-9]|3[01])[.](0?[1-9]|1[012])[.]\d{4}$/.test(object.DESTINATION_DATE)
  )
    errors.push({ name: "DESTINATION_DATE", error: 24 });
  if (object.DIRECTION && !direction.includes(object.DIRECTION)) errors.push({ name: "DIRECTION", error: 2 });
  if (object.QUANTITY_OF_GOODS && !/^\d{0,8}$/.test(object.QUANTITY_OF_GOODS))
    errors.push({ name: "QUANTITY_OF_GOODS", error: 3 });
  if (object.WEIGHT_GOODS && !/^\d{1,14}\.\d{1,3}$|^\d{1,14}$/.test(object.WEIGHT_GOODS))
    errors.push({ name: "WEIGHT_GOODS", error: 4 });
  if (object.INVOYS_PRICE && !/^\d{1,18}\.\d{1,2}$|^\d{1,18}$/.test(object.INVOYS_PRICE))
    errors.push({ name: "INVOYS_PRICE", error: 5 });
  if (object.CURRENCY_TYPE && !CurrencyType.includes(object.CURRENCY_TYPE))
    errors.push({ name: "CURRENCY_TYPE", error: 6 });
  if (!object.NAME_OF_GOODS || object.NAME_OF_GOODS.length > 4000) errors.push({ name: "NAME_OF_GOODS", error: 7 });
  if (!object.IDXAL_NAME || object.IDXAL_NAME.length > 800) errors.push({ name: "IDXAL_NAME", error: 8 });
  if (!object.IDXAL_ADRESS || object.IDXAL_ADRESS.length > 250) errors.push({ name: "IDXAL_ADRESS", error: 9 });
  if (!object.IXRAC_NAME || object.IXRAC_NAME.length > 500) errors.push({ name: "IXRAC_NAME", error: 10 });
  if (!object.IXRAC_ADRESS || object.IXRAC_ADRESS.length > 250) errors.push({ name: "IXRAC_ADRESS", error: 11 });
  if (!countryType.includes(object.GOODS_TRAFFIC_TO)) errors.push({ name: "GOODS_TRAFFIC_TO", error: 13 });

  return errors;
};
