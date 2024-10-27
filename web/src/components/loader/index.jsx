import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './loader.module.scss';

const Loader = ({ className }) => (
  <div className={classnames(styles.loader, className)} data-testid="loader">
    <div />
    <div />
    <div />
  </div>
);

Loader.propTypes = {
  className: PropTypes.string
};

export default Loader;
