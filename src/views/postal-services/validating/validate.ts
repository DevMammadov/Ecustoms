import { CurrencyType, direction, countryType } from "./validate-arrays";
/*
"1": "TR_NUMBER - mütləq daxil edilməlidir və 18 simvoldan çox ola bilməz"
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
"14": "QAIME mütləq daxil edilməlidir və 60 simvoldan çox ola bilməz"
"15": "TRACKING_NO mütləq daxil edilməlidir və 60 simvoldan çox ola bilməz"
"16": "FIN mütləq daxil edilməlidir və 7 simvoldan ibarət olmalıdır."
"17": "PHONE mütləq daxil edilməlidir və 60 simvoldan çox ola bilməz."
*/

export const validator = (object: any) => {
  let errors: { name: string; value: string; error: number }[] = [];

  if (!object.TR_NUMBER || object.TR_NUMBER?.length > 18)
    errors.push({ name: "TR_NUMBER", value: object.TR_NUMBER, error: 1 });

  if (!object.DIRECTION || !direction.includes(object.DIRECTION))
    errors.push({ name: "DIRECTION", value: object.DIRECTION, error: 2 });

  if (!object.QUANTITY_OF_GOODS || !/^\d{0,8}$/.test(object.QUANTITY_OF_GOODS))
    errors.push({ name: "QUANTITY_OF_GOODS", value: object.QUANTITY_OF_GOODS, error: 3 });

  if (!object.WEIGHT_GOODS || !/^\d{1,14}\.\d{1,3}$|^\d{1,14}$/.test(object.WEIGHT_GOODS))
    errors.push({ name: "WEIGHT_GOODS", value: object.WEIGHT_GOODS, error: 4 });

  if (!object.INVOYS_PRICE || !/^\d{1,18}\.\d{1,2}$|^\d{1,18}$/.test(object.INVOYS_PRICE))
    errors.push({ name: "INVOYS_PRICE", value: object.INVOYS_PRICE, error: 5 });

  if (!object.CURRENCY_TYPE || !CurrencyType.includes(object.CURRENCY_TYPE))
    errors.push({ name: "CURRENCY_TYPE", value: object.CURRENCY_TYPE, error: 6 });

  if (!object.NAME_OF_GOODS || object.NAME_OF_GOODS?.length > 4000)
    errors.push({ name: "NAME_OF_GOODS", value: object.NAME_OF_GOODS, error: 7 });

  if (!object.IDXAL_NAME || object.IDXAL_NAME.length > 800)
    errors.push({ name: "IDXAL_NAME", value: object.IDXAL_NAME, error: 8 });

  if (!object.IDXAL_ADRESS || object.IDXAL_ADRESS?.length > 250)
    errors.push({ name: "IDXAL_ADRESS", value: object.IDXAL_ADRESS, error: 9 });

  if (!object.IXRAC_NAME || object.IXRAC_NAME?.length > 500)
    errors.push({ name: "IXRAC_NAME", value: object.IXRAC_NAME, error: 10 });

  if (!object.IXRAC_ADRESS || object.IXRAC_ADRESS?.length > 250)
    errors.push({ name: "IXRAC_ADRESS", value: object.IXRAC_ADRESS, error: 11 });

  if (!countryType.includes(object.GOODS_TRAFFIC_FR))
    errors.push({ name: "GOODS_TRAFFIC_FR", value: object.GOODS_TRAFFIC_FR, error: 12 });

  if (!countryType.includes(object.GOODS_TRAFFIC_TO))
    errors.push({ name: "GOODS_TRAFFIC_TO", value: object.GOODS_TRAFFIC_TO, error: 13 });

  if (!object.QAIME || object.QAIME?.length > 60) errors.push({ name: "QAIME", value: object.QAIME, error: 14 });

  if (!object.TRACKING_NO || object.TRACKING_NO?.length > 60)
    errors.push({ name: "TRACKING_NO", value: object.TRACKING_NO, error: 15 });

  if (!object.FIN || object.FIN?.length !== 7) errors.push({ name: "FIN", value: object.FIN, error: 16 });

  if (!object.PHONE || object.PHONE?.length > 60) errors.push({ name: "PHONE", value: object.PHONE, error: 17 });

  return errors;
};
