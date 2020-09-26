// perimaryIndex - objecti nomrelemek ucun istifade edilen unikal key

import convert from "xml-js";

interface IError {
  name: string;
  error: number;
}

export interface IFileErrors {
  goodNo: number;
  errors: IError[];
}

export const mapObject = (array: any[]) => {
  let currentArr = array.length ? array : [array];
  let newArray: any[] = [];
  let errors = [];

  for (let obj of currentArr) {
    let newObj: any = {};
    for (let key of Object.keys(obj)) {
      if (!!obj[key]._text) {
        newObj[key as keyof typeof newObj] = obj[key]._text;
      } else {
        errors.push(`${currentArr.indexOf(obj) + 1} nomrəli malda "${key}" tapılmadı`);
      }
    }
    newArray.push(newObj);
  }
  errors.length > 0 && console.warn(errors);
  return newArray;
};

export const validateXML = (callBack: any, validator: any, primaryKey: string | number, mainTag: string) => {
  const validate = (file: any) => {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      try {
        let jsonXml: any = JSON.parse(convert.xml2json(reader.result as any, { compact: true, spaces: 4 }));
        let errors: IFileErrors[] = [];

        if (jsonXml && jsonXml[mainTag] && jsonXml[mainTag].GOODS) {
          let GoodList = mapObject(jsonXml[mainTag].GOODS);
          for (let good of GoodList) {
            let errorList = validator(good);
            if (errorList.length > 0) {
              errors.push({ goodNo: good[primaryKey as keyof typeof good], errors: errorList });
            }
          }
          let goodsArray = errors.length > 0 ? [] : GoodList;
          callBack(goodsArray, errors, null);
        } else {
          callBack([], [], "1x");
        }
      } catch (e) {
        callBack([], [], "2x");
        console.log(e);
      }
    };
  };

  return { validate };
};
