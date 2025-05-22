'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Du kan legge til epost-integrasjon eller API-kall her.
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block font-semibold mb-1">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md bg-white text-black"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md bg-white text-black"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-semibold mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md bg-white text-black"
          rows={5}
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
      >
        Send Message
      </button>
    </form>
  );
}
