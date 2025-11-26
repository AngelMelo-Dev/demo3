import Link from "next/link";

const developerSignature = "GPT-5.1 Codex";

const whatsappLink =
  "https://wa.me/573054226304?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios.";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Clínica Automotriz</h3>
            <p className="text-sm text-neutral-400">
              Calle 123 #45-67, Medellín, Colombia
            </p>
            <p className="text-sm text-neutral-400">
              Tel: (604) 123 45 67
            </p>
            <p className="text-sm text-neutral-400">
              contacto@clinicaauto.com
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Horarios</h3>
            <div className="space-y-1 text-sm text-neutral-400">
              <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
              <p>Sábados: 8:00 AM - 2:00 PM</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Enlaces</h3>
            <nav className="flex flex-col gap-2 text-sm text-neutral-400">
              <Link
                href="/servicios"
                className="transition hover:text-white"
              >
                Servicios
              </Link>
              <Link
                href="/consejos"
                className="transition hover:text-white"
              >
                Consejos
              </Link>
              <Link
                href="/sobre-nosotros"
                className="transition hover:text-white"
              >
                Sobre nosotros
              </Link>
              <Link
                href="/contacto"
                className="transition hover:text-white"
              >
                Contacto
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">¿Necesitas ayuda?</h3>
            <p className="text-sm text-neutral-400">
              Escríbenos por WhatsApp y te responderemos de inmediato.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-400">
          <p>© {year} Clínica Automotriz. Todos los derechos reservados.</p>
          <p className="mt-1">Sitio desarrollado por {developerSignature}</p>
        </div>
      </div>
    </footer>
  );
}

