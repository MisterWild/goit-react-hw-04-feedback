import PropTypes from 'prop-types';
import c from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={c}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
