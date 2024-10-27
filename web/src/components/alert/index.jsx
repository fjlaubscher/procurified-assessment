import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './alert.module.scss';

const Alert = ({ children, title, className, variant = 'info' }) => (
  <article className={classnames(styles.alert, styles[variant], className)}>
    {<span className={styles.title}>{title}</span>}
    {children}
  </article>
);

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  title: PropTypes.string,
  className: PropTypes.string
};

export default Alert;
