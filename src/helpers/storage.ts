import { ISertificate, ILocalTokenDecoded, IAsanTokenDecoded } from "types";
import { decode } from "jsonwebtoken";

export interface IStorage {
  lcl: string;
  asa: string;
  selectedSert: ISertificate;
  serts: ISertificate[];
  rt: string;
}

export const setToStorage = (key: string, value: any) => {
  try {
    let store = localStorage.getItem("__store__");
    if (store) {
      let parsedStore = JSON.parse(store);
      localStorage.setItem("__store__", JSON.stringify({ ...parsedStore, [key]: value }));
    } else {
      let storeObj = { [key]: value };
      localStorage.setItem("__store__", JSON.stringify(storeObj));
    }
  } catch (e) {
    console.log(e);
  }
};

export const getStorage = () => {
  try {
    let store = localStorage.getItem("__store__");
    if (store) {
      return JSON.parse(store) as IStorage;
    }
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

export const emptyStorage = () => {
  localStorage.removeItem("__store__");
};

export const decodedLocalToken = () => {
  const store = getStorage();
  if (store && store?.lcl) {
    const decodedLocal = decode(store.lcl) || {
      userId: "",
      pin: "",
      asa: "",
      voen: "",
      hasStamp: false,
      permissions: {},
      nbf: 0,
      exp: 0,
    };
    return decodedLocal as ILocalTokenDecoded;
  }
};

export const decodedAsanToken = () => {
  const store = getStorage();
  if (store && store?.asa) {
    const decodedAsanToken = decode(store.asa) as any;
    const person = decodedAsanToken.main.person || {
      citizenship: "",
      fatherName: "",
      name: "",
      pin: "",
      selectedCertNumber: "",
      structureData: {},
      surname: "",
    };
    return person as IAsanTokenDecoded;
  }
};
