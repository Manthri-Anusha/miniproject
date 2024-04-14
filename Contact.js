import React, { useState } from 'react';
import "./Contact.css";

function ContactForm() {
  // State to store input values
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would usually send the data to a server or an email API
    console.log(inputs);
    alert('Your message has been sent!');
    setInputs({ name: '', email: '', message: '' }); // Clear inputs after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={inputs.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
