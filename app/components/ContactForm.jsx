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
      alert('Noe gikk galt med innsendingen.');
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 bg-[#030344] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Venstre tekst */}
        <div className="flex-1 space-y-6">
       <h2 className="text-yellow-400 text-4xl md:text-5xl font-bold leading-tight">
  Find out if I'm a good <br /> match for your project
</h2>
<p className="text-lg">
  Do you have an exciting project you’re ready to kickstart?
</p>
<p className="text-lg">
  Get in touch via email at{' '}
  <span className="font-bold text-white">sondre24sfj@gmail.com</span>
</p>

        </div>

        {/* Skjema */}
        <form onSubmit={handleSubmit} className="flex-1 bg-[#1a1a1a] p-6 rounded-md shadow-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name <span className="text-red-500">*</span></label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full bg-[#0a0a0a] text-white border border-gray-700 rounded px-4 py-2 placeholder-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail <span className="text-red-500">*</span></label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email"
              className="w-full bg-[#0a0a0a] text-white border border-gray-700 rounded px-4 py-2 placeholder-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Briefly about the project</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Briefly about the project"
              className="w-full bg-[#0a0a0a] text-white border border-gray-700 rounded px-4 py-2 resize-none placeholder-white"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg px-6 py-3 rounded transition"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
