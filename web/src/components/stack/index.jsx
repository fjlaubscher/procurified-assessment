import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './stack.module.scss';

const Stack = ({ className, children, align = 'start', direction = 'column', ...rest }) => (
  <div className={classnames(styles.stack, styles[align], styles[direction], className)} {...rest}>
    {children}
  </div>
);

Stack.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  direction: PropTypes.oneOf(['column', 'row'])
};

export default Stack;
