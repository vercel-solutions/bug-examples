import { notFound } from "next/navigation";

export default async function CatchAllPage(
  params: Promise<Record<string, unknown>>,
) {
  console.log("catch all page params", await params);
  notFound();
}
