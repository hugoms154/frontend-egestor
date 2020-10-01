const formatDate = (date: Date): string => {
  const fDate = Intl.DateTimeFormat('pt-BR').format(
    date.setDate(date.getDate() + 1),
  );
  return fDate;
};
export default formatDate;
