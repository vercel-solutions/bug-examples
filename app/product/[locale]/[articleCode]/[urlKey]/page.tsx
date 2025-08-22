import { getProductInfosLight } from "@/lib/api";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    locale: string;
    articleCode: string;
    urlKey: string;
  }>;
}) {
  const p = await params;
  console.log("params", p);
  const { locale, articleCode, urlKey } = p;
  console.log(locale);
  const product = await getProductInfosLight({
    locale,
    urlKey,
    articleCode,
  });

  console.log(product);

  return (
    <div>
      ProductPage {locale}-{articleCode}-{urlKey}
      <div className="flex flex-col gap-2">
        <Link href={`/product/fr/123456/product-1`}>Go to product FR 1</Link>
        <Link href={`/product/fr/123456/product-2`}>Go to product FR 2</Link>
        <Link href={`/product/fr/123456/product-3`}>Go to product FR 3</Link>
        <Link href={`/product/en/123456/product-1`}>Go to product EN 1</Link>
        <Link href={`/product/en/123456/product-2`}>Go to product EN 2</Link>
        <Link href={`/product/en/123456/product-3`}>Go to product EN 3</Link>
      </div>
    </div>
  );
}
