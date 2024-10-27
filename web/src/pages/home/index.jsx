import { useState } from 'react';

// components
import Autocomplete from '../../containers/autocomplete';
import AppLayout from '../../components/app-layout';
import Stack from '../../components/stack';

// hooks
import useAppUserContext from '../../hooks/use-app-user-context';

// services
import { searchAsync } from '../../services/api/search';
import transformSWAPIKey from '../../services/transform-swapi-key';
import transformSWAPIValue from '../../services/transform-swapi-value';

const HomePage = () => {
  const { appUser } = useAppUserContext();
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  return (
    <AppLayout title="Home">
      <Stack direction="column">
        <h2>Hi, {appUser.firstName}!</h2>
        <Autocomplete onChangeAsync={searchAsync} onSelect={setSelectedSuggestion} />
        {selectedSuggestion ? (
          <Stack direction="column">
            {Object.keys(selectedSuggestion).map((key, i) => (
              <Stack key={i} direction="row">
                <strong>{transformSWAPIKey(key)}</strong>
                <span>{transformSWAPIValue(selectedSuggestion[key])}</span>
              </Stack>
            ))}
          </Stack>
        ) : null}
      </Stack>
    </AppLayout>
  );
};

export default HomePage;
