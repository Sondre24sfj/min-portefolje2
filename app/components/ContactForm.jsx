'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch('https://formspree.io/f/mldbkzyd', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          form.reset();
        } else {
          alert('Det oppstod en feil. Prøv igjen.');
        }
      })
      .catch(() => {
        alert('Det oppstod en nettverksfeil.');
      });
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Tekst */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-yellow-400">
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

        {/* Høyre side */}
        <div className="flex-1 bg-black rounded-md p-6 space-y-4 shadow-lg">
          {isSubmitted ? (
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">
                Takk for meldingen!
              </h3>
              <p className="text-white">
                Jeg har mottatt meldingen din og vil svare så snart som mulig.
              </p>
              <button
                onClick={handleNewMessage}
                className="mt-4 text-sm underline text-blue-400 hover:text-blue-300"
              >
                Send en ny melding
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Navn */}
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Navn <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-[#ffffff] text-white border border-gray-700 rounded px-4 py-2"
                  placeholder="Skriv inn navnet ditt"
                />
              </div>

              {/* E-post */}
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  E-post <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-[#ffffff] text-white border border-gray-700 rounded px-4 py-2"
                  placeholder="din@email.com"
                />
              </div>


              {/* Prosjektbeskrivelse */}
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Kort om prosjektet
                </label>
                <textarea
                  name="message"
                  rows="4"
                   className="w-full bg-[#ffffff] text-white placeholder-white border border-gray-700 rounded px-4 py-2 resize-none"
                  placeholder="Fortell oss litt om prosjektet ditt..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded transition"
              >
                Send melding
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
