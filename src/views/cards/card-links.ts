import { links } from "routes/links";

export const getLink = (id: number) => {
  switch (id) {
    case 1:
      return links.MyInfo.baseUrl;
    case 2:
      return links.Notifications.baseUrl;
    case 4:
      return links.GivingPermission.baseUrl;
    case 7:
      return links.PostalDeclaration.baseUrl;
    case 22:
      return links.XifDoc.baseUrl;
    case 10:
      return links.Gooen.baseUrl;
    case 29:
      return links.Cargo.baseUrl;
    case 28:
      return links.PostalServices.baseUrl;
    case 16:
      // return links.Declaration.baseUrl;
      return "/under-construction/";
    default:
      return "/under-construction/";
  }
};
