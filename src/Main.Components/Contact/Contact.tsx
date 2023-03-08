import React from "react";
import CardHeader from "../Components.header/ComponentHeader";
import "./Contact.css";
import Form from "./form";

function Contact() {
  return (
    <main id="goto__contact" className="contact__main">
      <CardHeader heading="SAY HELLO" title="CONTACT"></CardHeader>
      <div className="contact__body">
        <h2>msiesto.garabana.dev@gmail.com</h2>
        <Form />
      </div>
    </main>
  );
}
export default Contact;
