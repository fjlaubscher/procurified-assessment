import { useEffect, useCallback, useState } from 'react';

import useDebounce from './use-debounce';

const useAutocomplete = ({ onChangeAsync, minChars = 3, delay = 300 }) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [suggestions, setSuggestions] = useState(null);
  const debouncedValue = useDebounce(value, delay);

  const handleOnChangeAsync = useCallback(
    async (value) => {
      if (!loading) {
        setLoading(true);
        setSuggestions(null);

        const suggestions = await onChangeAsync(value);
        setSuggestions(suggestions);

        setLoading(false);
      }
    },
    [loading, setLoading, setSuggestions, onChangeAsync]
  );

  const handleOnChange = useCallback(
    (e) => {
      const newValue = e.currentTarget.value;
      setValue(newValue);

      if (!newValue) {
        setSuggestions(null);
      }
    },
    [setValue, setSuggestions]
  );

  const handleOnBlur = useCallback(() => {
    // with the current implementation,
    // the suggestions will disappear when the input loses focus
    // setTimeout fixes this
    setTimeout(() => setHasFocus(false), 100);
  }, [setHasFocus]);

  useEffect(() => {
    if (debouncedValue && debouncedValue.length >= minChars) {
      handleOnChangeAsync(value);
    }
    // deliberately omitting handleOnChange from dependencies to prevent infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return {
    value,
    onChange: handleOnChange,
    loading,
    suggestions,
    shouldShowSuggestions: debouncedValue && suggestions && !loading && hasFocus,
    onFocus: () => setHasFocus(true),
    onBlur: handleOnBlur
  };
};

export default useAutocomplete;
