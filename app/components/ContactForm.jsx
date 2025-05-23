export default function ContactForm() {
  return (
    <section id="contact" className="bg-[#0a0a0a] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Venstre tekst */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Finn ut om vi er en god <br /> match for ditt prosjekt
          </h2>
          <p className="text-lg">
            Har du et spennende prosjekt du har lyst til å sparke i gang?
          </p>
          <p className="text-lg">
            Kontakt oss på mail til{" "}
            <span className="font-bold text-white">sondre24sfj@gmail.com</span>
          </p>
        </div>

        {/* Skjema */}
        <form className="flex-1 bg-black rounded-md p-6 space-y-4 shadow-lg">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Navn <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              E-post <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Telefonnummer <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Kort om prosjektet
            </label>
            <textarea
              rows="4"
              className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded px-4 py-2 resize-none"
            ></textarea>
          </div>

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
