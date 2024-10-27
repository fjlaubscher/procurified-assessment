import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './container.module.scss';

const Container = ({ className, children }) => (
  <div className={classnames(styles.container, className)}>{children}</div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Container;
