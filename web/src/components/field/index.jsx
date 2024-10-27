import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './field.module.scss';

const Field = ({ className, children, error, ...rest }) => (
  <div className={classnames(styles.field, className)} {...rest}>
    {children}
    {error && <span className={styles.error}>{error}</span>}
  </div>
);

Field.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  error: PropTypes.string
};

export default Field;
