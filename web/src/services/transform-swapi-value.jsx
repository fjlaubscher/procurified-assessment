// components
import Stack from '../components/stack';

// services
import parseDate from './parse-date';

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{6}Z$/;
const LINK_REGEX = /https?:\/\/[\w./]+/;

const transformSWAPIValue = (value) => {
  if (typeof value === 'string') {
    if (ISO_DATE_REGEX.test(value)) {
      const parsedDate = parseDate(value);

      if (parsedDate) {
        return parsedDate.toLocaleDateString();
      }
    } else if (LINK_REGEX.test(value)) {
      return (
        <a key={`link-${value}`} href={value} target="_blank" rel="noreferrer">
          {value}
        </a>
      );
    }

    return value;
  }

  if (Array.isArray(value)) {
    return <Stack direction="column">{value.map(transformSWAPIValue)}</Stack>;
  }

  return value;
};

export default transformSWAPIValue;
