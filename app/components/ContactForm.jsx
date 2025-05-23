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

    const response = await fetch('https://formspree.io/f/mblbzkyd', {
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
    <section id="contact" className="bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Venstre tekst */}
        <div className="flex-1 space-y-6">
          <h2 className="text-yellow-400 text-4xl md:text-5xl font-bold leading-tight">
            Finn ut om vi er en god <br /> match for ditt prosjekt
          </h2>
          <p className="text-lg">
            Har du et spennende prosjekt du har lyst til å sparke i gang?
          </p>
          <p className="text-lg">
            Kontakt oss på mail til{' '}
            <span className="font-bold text-white">sondre24sfj@gmail.com</span>
          </p>
        </div>

        {/* Skjema */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-[#0a0a0a] p-6 rounded-md shadow-md space-y-6"
        >
          {/* Navn */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Navn <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Skriv inn navnet ditt"
              className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded px-4 py-2"
              style={{ '::placeholder': { color: 'white' }, color: 'white' }}
            />
          </div>

          {/* E-post */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              E-post <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="din@email.com"
              className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded px-4 py-2"
              style={{ '::placeholder': { color: 'white' }, color: 'white' }}
            />
          </div>

          {/* Prosjekt */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Kort om prosjektet
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Fortell oss litt om prosjektet ditt…"
              className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded px-4 py-2 resize-none"
              style={{ '::placeholder': { color: 'white' }, color: 'white' }}
            />
          </div>

          {/* Info */}
          <p className="text-xs text-gray-400">
            Informasjonen behandles i henhold til vår{' '}
            <a href="#" className="underline text-gray-300">
              personvernerklæring
            </a>
            .
          </p>

          {/* Knapp */}
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded transition"
          >
            Send melding
          </button>
        </form>
      </div>
    </section>
  );
}