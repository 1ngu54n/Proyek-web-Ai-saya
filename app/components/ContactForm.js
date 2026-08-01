"use client";

import { useState } from "react";

const initialFormState = {
  nama: "",
  email: "",
  pesan: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Pesan terkirim");
    setFormData(initialFormState);
  };

  return (
    <section id="contact" className="mx-auto max-w-xl px-6 pb-20 pt-12">
      <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
        Hubungi Saya
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-8"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nama" className="text-sm font-semibold text-slate-700">
            Nama
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Masukkan nama Anda"
            required
            className="rounded-lg border border-slate-300 px-4 py-3 text-slate-800 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nama@email.com"
            required
            className="rounded-lg border border-slate-300 px-4 py-3 text-slate-800 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="pesan" className="text-sm font-semibold text-slate-700">
            Pesan
          </label>
          <textarea
            id="pesan"
            name="pesan"
            rows={5}
            value={formData.pesan}
            onChange={handleChange}
            placeholder="Tulis pesan Anda..."
            required
            className="min-h-[120px] resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-800 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-600"
        >
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}
