import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Loader from '../loader';

import styles from './button.module.scss';

const Button = ({
  children,
  className,
  loading = false,
  type = 'button',
  primary = false,
  ...rest
}) => (
  <button
    className={classnames(
      styles.button,
      loading ? styles.loading : undefined,
      primary ? styles.primary : undefined,
      className
    )}
    type={type}
    {...rest}
  >
    {loading ? <Loader white /> : children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  primary: PropTypes.bool
};

export default Button;
