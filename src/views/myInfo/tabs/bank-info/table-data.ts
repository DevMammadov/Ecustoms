import { useTranslator } from "localization";

export const useTableData = () => {
  const lang = useTranslator("myInfo");
  const columns = [
    { name: "Code", title: `${lang.bankCode}`, field: "code", width: 150 },
    { name: "Name", title: `${lang.bankName}`, field: "name" },
    { name: "AccountNo", title: `${lang.accauntNumber}`, field: "accountNo" },
    { name: "Currency", title: `${lang.currency}`, field: "currency", width: 50 },
    { name: "State", title: `${lang.accauntType}`, field: "state", width: 100 },
    { name: "Status", title: `${lang.status}`, field: "status", width: 50 },
  ];

  return { columns };
};
