// app/components/ContactForm.jsx
export default function ContactForm() {
  return (
    <section className="bg-contact text-yellow py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Me</h2>
        <form
          action="https://formsubmit.co/sondre24sfj@gmail.com"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="bg-transparent border border-yellow rounded px-4 py-2 text-yellow placeholder-yellow"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="bg-transparent border border-yellow rounded px-4 py-2 text-yellow placeholder-yellow"
          />
          <textarea
            name="message"
            required
            placeholder="Your message"
            className="bg-transparent border border-yellow rounded px-4 py-2 h-32 resize-none text-yellow placeholder-yellow"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow text-[#1F2567] font-bold px-6 py-2 rounded hover:bg-white hover:text-[#1F2567] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
