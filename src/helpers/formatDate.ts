import moment from "moment";

export const formatDate = (date: any) => moment(date).format("DD.MM.YYYY");
