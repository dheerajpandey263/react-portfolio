import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState(""); // Manage email separately
  const [message, setMessage] = useState(""); // Manage message separately

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_kje2c5v", // your EmailJS Service ID
        "template_umjktrm", // your EmailJS Template ID
        { email, message }, // template parameters
        "9MeO7DRYtQZ_oUAvq" // your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          setEmail(""); // Clear form
          setMessage("");
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-blue-500 py-12 flex flex-col items-center text-white"
    >
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-blue-700 rounded-lg p-6 w-full max-w-md shadow-lg"
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 rounded bg-blue-600 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white"
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full mb-4 px-4 py-2 rounded bg-blue-600 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="w-full bg-white text-blue-600 font-semibold py-2 rounded hover:bg-gray-100 transition-colors duration-300"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
