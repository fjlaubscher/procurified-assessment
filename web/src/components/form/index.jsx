import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './form.module.scss';

const Form = ({ className, children, ...rest }) => (
  <form className={classnames(styles.form, className)} {...rest}>
    {children}
  </form>
);

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Form;
