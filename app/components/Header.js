const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-indigo-500">
          Portofolio
        </a>
        <ul className="flex gap-5 sm:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-medium text-slate-600 transition-colors hover:text-indigo-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
