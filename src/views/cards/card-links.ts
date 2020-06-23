export const getLink = (title: string) => {
  switch (title) {
    case 'Məlumatlarım':
      return 'my-info';
    case 'Səlahiyyətlərin verilməsi':
      return 'giving-permissions';
    case 'Rəsmiləşdirilmə üçün tələb olunan sənədlərin qeydiyyatı':
      return 'xif-docs';
    default:
      return '/';
  }
};
