import Link from "next/link";
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

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1>Product Page: {_params.subCatId}</h1>
      <p>
        This page will call notFound() if the subCatId is not "shoes". Check{" "}
        <Link href={`/en/clothing/shirts`}>
          <code className="underline">/en/clothing/shirts</code>
        </Link>{" "}
        to see the expected not-found page.
      </p>
    </div>
  );
}
