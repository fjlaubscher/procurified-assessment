import PropTypes from 'prop-types';

// hooks
import useAppUserContext from '../../hooks/use-app-user-context';

// pages
import Login from '../../pages/login';

const ProtectedRoute = ({ children }) => {
  const { appUser } = useAppUserContext();

  if (appUser) {
    return children;
  } else {
    return <Login />;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoute;
