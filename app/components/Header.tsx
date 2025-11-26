import Link from "next/link";

const navigation = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Consejos", href: "/consejos" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-neutral-900"
        >
          Clínica Automotriz
        </Link>

        <nav
          aria-label="Navegación principal"
          className="flex items-center gap-4 text-sm font-medium text-neutral-600"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

