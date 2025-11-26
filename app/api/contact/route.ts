import { NextResponse } from "next/server";

const placeholderMessage =
  "Este endpoint procesará el formulario de contacto cuando se defina la lógica.";

export async function POST() {
  return NextResponse.json(
    {
      ok: true,
      message: placeholderMessage,
    },
    { status: 202 }
  );
}

export function GET() {
  return NextResponse.json(
    {
      ok: true,
      message:
        "Utiliza POST para enviar datos. La implementación final se agregará más adelante.",
    },
    { status: 200 }
  );
}

