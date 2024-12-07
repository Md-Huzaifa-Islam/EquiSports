import PropTypes from "prop-types";

const PrintFaq = ({ faq }) => {
  const { question, answer } = faq;
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border border-base-300 bg-black bg-opacity-30 text-white"
    >
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content">
        {answer ? (
          <p>{answer}</p>
        ) : (
          <p className="text-white">The question will be answered soon</p>
        )}
      </div>
    </div>
  );
};

PrintFaq.propTypes = {
  faq: PropTypes.object,
};

export default PrintFaq;
