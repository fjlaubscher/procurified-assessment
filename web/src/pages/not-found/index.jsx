import { Link } from 'react-router-dom';

// components
import AppLayout from '../../components/app-layout';
import Stack from '../../components/stack';

const NotFoundPage = () => {
  return (
    <AppLayout title="Not Found">
      <Stack direction="column" align="center">
        <h2>This is not the page you&apos;re looking for...</h2>
        <Link to="/">Go back to the home page</Link>
      </Stack>
    </AppLayout>
  );
};

export default NotFoundPage;
