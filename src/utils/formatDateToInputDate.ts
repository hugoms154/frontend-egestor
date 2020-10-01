const formatDateToInputDate = (date: Date): string => {
  const newDate = new Date(date.setDate(date.getDate() + 1)).toLocaleDateString(
    'en',
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    },
  );

  const [month, day, year] = newDate.substring(0, 10).split('/');
  const stringDate = `${year}-${month}-${day}`;

  return stringDate;
};

export default formatDateToInputDate;
