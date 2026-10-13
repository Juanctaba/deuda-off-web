import { NextResponse } from "next/server";

// Archivo de verificación de IndexNow: https://<host>/<key>.txt
// next.config reescribe /<key>.txt a esta ruta. La key vive solo en la
// variable de entorno INDEXNOW_KEY (Vercel, Production); nunca en el repo.
// Si el nombre no coincide o la variable no existe: 404.
export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: { key: string } },
) {
  const { key } = params;
  const expected = process.env.INDEXNOW_KEY;
  if (!expected || key !== expected) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
    });
  }
  return new NextResponse(expected, {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=300",
      "x-robots-tag": "noindex",
    },
  });
}
