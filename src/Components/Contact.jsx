import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0yn3ix1', 'template_r4blunm', form.current, {
        publicKey: 'KYDp0Ly6TdJ9vMNCi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("message sended successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.warn("sorry! something went wrong")
        },
      );
    e.target.reset();
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            name="user-name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="email"
            placeholder="Email"
            name="user-email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <textarea
            name="message"
            cols="20"
            rows="5"
            placeholder="Your message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
