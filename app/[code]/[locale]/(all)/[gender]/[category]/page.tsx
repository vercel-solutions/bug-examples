import { notFound } from "next/navigation";

export const dynamic = "error";

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    code: string;
    locale: string;
    gender: string;
    category: string;
  }>;
}) {
  const _params = await params;
  console.log("product page params", _params);

  if (_params.category !== "shoes") {
    notFound();
  }

  return <div>product page</div>;
}
