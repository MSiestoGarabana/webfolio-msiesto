import React from "react";
import CardHeader from "../Components.header/ComponentHeader";
import "./Contact.css";
import Form from "./form";

function Contact() {
  return (
    <main id="goto__contact" className="contact__main">
      <CardHeader heading="SAY HELLO" title="CONTACT"></CardHeader>
      <div className="contact__body">
        {" "}
        FUTURE FORM HERE
        <Form />
      </div>
    </main>
  );
}
export default Contact;
