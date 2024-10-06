import { useContext } from "react";
import { MenuOpenContext } from "./Navbar";
export const RequestQuote = () => {
    const { requestQuote, setRequestQuote } = useContext(MenuOpenContext);
  return (
    <div
      className={`${
        requestQuote ? "open" : ""
      } request-quote d-flex flex-column p-4 py-5`}
    >
      <h2>Lets Discuss Your Project</h2>
      <p>We will email or call you to discuss</p>
      <form action="forms/contact.php" method="post" className="php-email-form">
        <div className="row gy-3 postion-relative">
          <div
            className="request-quote-close"
            onClick={() => setRequestQuote(false)}
          >
            <i className="bi bi-x-lg"></i>
          </div>
          <div className="col-md-12">
            <label htmlFor="name-field" className="pb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name-field"
              className="form-control"
              required
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="email-field" className="pb-2">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email-field"
              required
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="subject-field" className="pb-2">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject-field"
              required
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="message-field" className="pb-2">
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              rows={6}
              id="message-field"
              required
            ></textarea>
          </div>

          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>

            <button className="request-quote-submit" type="submit">
              Request Quote
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
