import PropTypes from 'prop-types';

// components
import Container from '../container';
import Loader from '../loader';
import NavbarUser from '../navbar-user';

// hooks
import useAppUserContext from '../../hooks/use-app-user-context';

import styles from './app-layout.module.scss';

const Layout = ({ children, title, loading = false }) => {
  const { appUser, loading: loadingAppUser } = useAppUserContext();

  const shouldRenderLoader = loadingAppUser || loading;

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <nav>
          <div className={styles.home}>Procurified Assessment</div>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.action}>{appUser ? <NavbarUser appUser={appUser} /> : null}</div>
        </nav>
      </div>
      <div className={styles.content}>
        <Container className={styles.children}>
          {shouldRenderLoader ? <Loader /> : children}
        </Container>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool
};

export default Layout;
