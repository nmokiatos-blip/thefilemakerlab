export function ContactForm() {
  return (
    <form className="lab-panel p-5 sm:p-6" action="#" method="post">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">
            Name
          </span>
          <input
            className="form-input min-h-12 px-4 py-3 text-sm"
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">
            Email
          </span>
          <input
            className="form-input min-h-12 px-4 py-3 text-sm"
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-slate-200">
          Message
        </span>
        <textarea
          className="form-input min-h-36 resize-y px-4 py-3 text-sm"
          name="message"
          placeholder="Tell the lab what you are exploring."
        />
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-lab-cyan px-5 py-3 text-sm font-semibold text-graphite-950 shadow-glow transition hover:bg-white sm:w-auto"
      >
        Contact The Lab
      </button>
    </form>
  );
}
