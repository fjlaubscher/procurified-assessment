import PropTypes from 'prop-types';

// components
import Stack from '../../../../components/stack';

// services
import transformSWAPIKey from '../../../../services/transform-swapi-key';
import transformSWAPIValue from '../../../../services/transform-swapi-value';

const SuggestionDetails = ({ suggestion }) => {
  return (
    <Stack direction="column">
      {Object.keys(suggestion).map((key, i) => (
        <Stack key={i} direction="row">
          <strong>{transformSWAPIKey(key)}</strong>
          <span>{transformSWAPIValue(suggestion[key])}</span>
        </Stack>
      ))}
    </Stack>
  );
};

SuggestionDetails.propTypes = {
  suggestion: PropTypes.object.isRequired
};

export default SuggestionDetails;
