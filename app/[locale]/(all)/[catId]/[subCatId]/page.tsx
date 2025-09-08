import { notFound } from "next/navigation";

export const dynamic = "error";

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    locale: string;
    catId: string;
    subCatId: string;
  }>;
}) {
  const _params = await params;
  console.log("category page params", _params);

  if (_params.subCatId !== "shoes") {
    notFound();
  }

  return <div>product page</div>;
}
