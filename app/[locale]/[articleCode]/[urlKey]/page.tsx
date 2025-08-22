import { getProductInfosLight } from "@/lib/api";

export default async function ProductPage(
  params: Promise<{
    locale: string;
    articleCode: string;
    urlKey: string;
  }>,
) {
  const { locale, articleCode, urlKey } = await params;

  const product = await getProductInfosLight({
    locale,
    urlKey,
    articleCode,
  });

  console.log(product);

  return <div>ProductPage</div>;
}
