import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Stack from '../stack';

import styles from './navbar-user.module.scss';

const NavbarUser = ({ appUser, className }) => (
  <Stack direction="column" className={classnames(styles.navbarUser, className)}>
    <span className={styles.name}>
      {appUser.firstName} {appUser.surname}
    </span>
    <span>{appUser.email}</span>
  </Stack>
);

NavbarUser.propTypes = {
  appUser: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string
};

export default NavbarUser;
