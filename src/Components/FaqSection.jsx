// import required modules
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Contexts";
import PrintFaq from "./Printfaq";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FaqSection = () => {
  const { user } = useContext(AuthContext);
  const [faqs, setFaqs] = useState([]);
  const [myFaqs, setMyFaqs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      "https://equipment-store-huzaifa.vercel.app/faqs/filtered/admin@gmail.com",
    )
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);
  useEffect(() => {
    fetch(
      `https://equipment-store-huzaifa.vercel.app/faqs/filtered/${user?.email}`,
    )
      .then((res) => res.json())
      .then((data) => setMyFaqs(data));
  }, [user]);

  const handleSubmitFaq = (e) => {
    e.preventDefault();
    user || navigate("/login");
    user || toast.info("You need to login to ask a question");

    const form = e.target;
    const faq = form.faq.value.trim();
    const newFaq = {
      question: faq,
      owner: user?.email,
    };
    user &&
      fetch("https://equipment-store-huzaifa.vercel.app/faqs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFaq),
      })
        .then((res) => res.json())
        .then(() => {
          toast.success("The faq is sent. You will soon get the answer. ");
          setMyFaqs((p) => [...p, newFaq]);

          form.reset();
        })
        .catch((err) => toast.error(err.message));
  };

  return (
    <section className="mx-auto mt-16 max-w-[1500px] px-5 md:my-16 md:mt-32">
      <h2 className="mb-2 text-center text-2xl font-semibold text-white sm:mb-2 sm:text-3xl md:mb-4 md:text-4xl">
        Frequently Asked Questions 🤔
      </h2>
      <p className="mb-4 text-center text-sm text-white text-opacity-80 sm:mb-4 sm:text-base md:mb-8 md:text-lg">
        Have questions? We’ve got answers. Check out our FAQs to find quick
        solutions to common inquiries.
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="">
          <p className="mb-2 text-lg font-semibold text-white sm:text-xl md:text-2xl">
            Answered Question:{" "}
          </p>
          <div className="grid gap-2">
            {faqs.length &&
              faqs.map((faq) => <PrintFaq key={faq._id} faq={faq}></PrintFaq>)}
          </div>
        </div>
        <div className="">
          <p className="mb-2 text-lg font-semibold text-white sm:text-xl md:text-2xl">
            Previously asked question:{" "}
          </p>
          {/* past faqs  */}
          <div>
            {myFaqs.length ? (
              <div className="grid gap-2">
                {myFaqs.map((faq, index) => (
                  <PrintFaq key={index} faq={faq}></PrintFaq>
                ))}
              </div>
            ) : (
              <p className="text-lg text-primary">
                You haven&apos;t asked any question yet.
              </p>
            )}
          </div>
          {/* Have any question? */}
          <p className="mb-2 mt-10 text-lg font-semibold text-white sm:text-xl md:text-2xl">
            Have any question?
          </p>

          <form className="grid gap-4" onSubmit={handleSubmitFaq}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold text-white">
                  Question
                </span>
              </label>
              <input
                type="text"
                name="faq"
                placeholder="Input your question here "
                required
                className="input input-bordered rounded-lg"
              ></input>
            </div>

            <div className="form-control mt-3">
              <button className="btn h-auto w-max transform rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 py-3 text-lg font-semibold text-white transition-transform duration-500 ease-in-out hover:scale-105 hover:text-xl hover:font-bold hover:shadow-lg dark:bg-gradient-to-r dark:from-gray-800 dark:via-purple-900 dark:to-black">
                Send This question
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
