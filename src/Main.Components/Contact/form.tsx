import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./form.css";
function ContactForm() {
  const [state, handleSubmit] = useForm("mknabzdq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        id="name"
        type="name"
        placeholder="Your Name*"
        name="name"
        className="nameInput"
      />
      <input
        id="email"
        type="email"
        placeholder="Your Email*"
        name="email"
        className="emailInput"
      />
      <input
        id="subject"
        type="subject"
        placeholder="Subject*"
        name="subject"
        className="subjectInput"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        placeholder="Your Message*"
        className="messageInput"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="submitButton"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}
export default ContactForm;
