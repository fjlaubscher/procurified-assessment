import { useState } from 'react';

// components
import Autocomplete from '../../containers/autocomplete';
import AppLayout from '../../components/app-layout';
import Stack from '../../components/stack';

import SuggestionDetails from './components/suggestion-details';

// hooks
import useAppUserContext from '../../hooks/use-app-user-context';

// services
import { searchAsync } from '../../services/api/search';

const HomePage = () => {
  const { appUser } = useAppUserContext();
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  return (
    <AppLayout title="Home">
      <Stack direction="column">
        <h2>Hi, {appUser.firstName}!</h2>
        <Autocomplete onChangeAsync={searchAsync} onSelect={setSelectedSuggestion} />
        {selectedSuggestion ? <SuggestionDetails suggestion={selectedSuggestion} /> : null}
      </Stack>
    </AppLayout>
  );
};

export default HomePage;
