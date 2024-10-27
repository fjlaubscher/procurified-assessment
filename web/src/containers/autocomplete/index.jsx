import { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FaSearch } from 'react-icons/fa';

// components
import Field from '../../components/field';
import Loader from '../../components/loader';

// hooks
import useAutocomplete from '../../hooks/use-autocomplete';

// services
import highlightAutocompleteMatches from '../../services/highlight-autocomplete-matches';

import styles from './autocomplete.module.scss';

const Autocomplete = ({ className, onChangeAsync, onSelect }) => {
  const { loading, value, suggestions, shouldShowSuggestions, onBlur, onChange, onFocus } =
    useAutocomplete({ onChangeAsync });

  const handleOnSuggestionClick = useCallback(
    (suggestion) => {
      onChange({ currentTarget: { value: '' } });
      onSelect(suggestion);
    },
    [onChange, onSelect]
  );

  return (
    <Field className={classnames(styles.container, className)}>
      <div className={styles.input}>
        <input
          placeholder="Search..."
          type="text"
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          data-testid="autocomplete-input"
        />
        {loading ? <Loader /> : <FaSearch data-testid="autocomplete-icon" />}
      </div>
      {shouldShowSuggestions ? (
        suggestions.length ? (
          <ul className={styles.suggestions} data-testid="autocomplete-suggestions">
            {suggestions.map((suggestion, i) => (
              <li
                key={`suggestion-${i}`}
                onClick={() => handleOnSuggestionClick(suggestion)}
                role="option"
              >
                {highlightAutocompleteMatches(value, suggestion.name)}
              </li>
            ))}
          </ul>
        ) : (
          <span data-testid="autocomplete-no-results">No results</span>
        )
      ) : null}
    </Field>
  );
};

Autocomplete.propTypes = {
  className: PropTypes.string,
  onChangeAsync: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Autocomplete;
