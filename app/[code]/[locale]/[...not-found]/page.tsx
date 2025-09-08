import { notFound } from "next/navigation";

export const dynamic = "error";

export default async function CatchAllPage({
  params,
}: {
  params: Promise<Record<string, unknown>>;
}) {
  console.log("catch all page params", await params);
  notFound();
}
