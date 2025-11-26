const developerSignature = "GPT-5.1 Codex";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 text-neutral-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold">Clínica Automotriz</p>
          <p className="text-sm text-neutral-400">
            Calle 123 #45-67, Medellín · Tel: (604) 123 45 67
          </p>
          <p className="text-sm text-neutral-400">contacto@clinicaauto.com</p>
        </div>
        <div className="text-sm text-neutral-400">
          <p>© {year} Clínica Automotriz. Todos los derechos reservados.</p>
          <p>Sitio desarrollado por {developerSignature}</p>
        </div>
      </div>
    </footer>
  );
}

