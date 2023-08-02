// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


export default function ContactForm() {
  const [state, handleSubmit] = useForm("mknlobzo");
  if (state.succeeded) {
      return <div>
                <p className="submission">Thank you for your submission!</p>
                <div className="gap"></div>;
              </div>
  }
  return (
    <div>
    <div>
      <form onSubmit={handleSubmit} className="container">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='type a message...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>

    </div>

        </div>
  );
}
