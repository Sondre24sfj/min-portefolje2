'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch('https://formspree.io/f/mldbkzyd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert('Something went wrong with the submission.');
    }
  };

  return (
    <section id="contact" className="bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">

        {/* Left text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-yellow-400 text-4xl md:text-5xl font-bold leading-tight">
            Let's find out if I'm a good <br /> match for your project.
          </h2>
          <p className="text-lg">
            Do you have an exciting idea you'd like to kickstart?
          </p>
          <p className="text-lg">
            Reach out by email at{' '}
            <span className="font-bold text-white">sondre24sfj@gmail.com</span>
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-[#0a0a0a] p-6 rounded-md shadow-md space-y-6"
        >
          {submitted ? (
            <div className="text-green-400 text-lg font-semibold">
              ✅ Thank you for your message! I'll get back to you shortly.
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-[#1a1a1a] text-white placeholder-white border border-gray-700 rounded px-4 py-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-[#1a1a1a] text-white placeholder-white border border-gray-700 rounded px-4 py-2"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Briefly describe your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#1a1a1a] text-white placeholder-white border border-gray-700 rounded px-4 py-2 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded transition"
              >
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
