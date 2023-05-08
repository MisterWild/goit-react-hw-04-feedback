import PropTypes from 'prop-types';
import b from  './Notification.module.css';

const Notification = () => {
  return <p className={b}>There is no feedback</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
