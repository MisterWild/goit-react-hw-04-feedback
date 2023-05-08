import PropTypes from 'prop-types';
import a from'./FeedbackOptions.module.css';

const FeedbackOptions = ({ options, updateFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button 
          key={option}
          type="button"
          name={option}
          onClick={updateFeedback}
          className={a.button}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  updateFeedback: PropTypes.func,
};
export default FeedbackOptions;
