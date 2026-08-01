const skills = [
  {
    id: "html",
    name: "HTML",
    icon: "</>",
    description: "Struktur dan semantik halaman web.",
    iconBg: "bg-rose-50",
    iconColor: "text-[#e34c26]",
  },
  {
    id: "css",
    name: "CSS",
    icon: "#",
    description: "Layout, warna, dan desain responsif.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "JS",
    description: "Interaktivitas dan logika di browser.",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
];

export default function Skills() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex w-full max-w-[280px] flex-1 flex-col items-center rounded-xl border border-slate-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 sm:min-w-[240px]"
          >
            <div
              className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl text-xl font-bold ${skill.iconBg} ${skill.iconColor}`}
            >
              {skill.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900">
              {skill.name}
            </h3>
            <p className="text-sm text-slate-500">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
