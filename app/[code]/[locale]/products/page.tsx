import { notFound } from "next/navigation";

export default async function ProductsPage({
  params,
}: {
  params: Promise<Record<string, unknown>>;
}) {
  console.log("products page params", await params);
  notFound();
}
