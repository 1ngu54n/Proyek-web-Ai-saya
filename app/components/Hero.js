"use client";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-65px)] items-center justify-center bg-gradient-to-br from-indigo-50 via-slate-50 to-fuchsia-50 px-6 py-12"
    >
      <div className="flex max-w-xl flex-col items-center text-center">
        <p className="mb-2 text-lg font-semibold text-indigo-500">Halo, saya</p>
        <h1 className="mb-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
          Muhammad Nurrohman
        </h1>
        <p className="mb-8 max-w-md text-lg text-slate-500">
          Web Developer yang sedang belajar membangun halaman web modern.
        </p>
        <button
          type="button"
          onClick={scrollToContact}
          className="rounded-lg bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-600"
        >
          Hubungi Saya
        </button>
      </div>
    </section>
  );
}
