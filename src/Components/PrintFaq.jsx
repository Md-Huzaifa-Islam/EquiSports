import PropTypes from "prop-types";

const PrintFaq = ({ faq }) => {
  const { question, answer } = faq;
  return (
    <div
      tabIndex={0}
      className="bg-primary dark:bg-darkPrimary-0 collapse collapse-arrow border border-white bg-opacity-40"
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
