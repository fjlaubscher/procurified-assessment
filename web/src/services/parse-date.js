const parseDate = (value) => {
  const date = new Date(value);

  if (isNaN(date.getTime())) {
    return null;
  } else {
    return date;
  }
};

export default parseDate;
