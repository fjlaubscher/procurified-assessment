const highlightMatches = (term, text) => {
  const regex = new RegExp(`(${term})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) => (regex.test(part) ? <mark key={i}>{part}</mark> : part));
};

export default highlightMatches;
