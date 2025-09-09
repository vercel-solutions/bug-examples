import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const _params = await params;
  console.log("home page params", _params);
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1>Locale Home Page: {_params.locale}</h1>

      <ul>
        <li>
          <Link href={`/en/clothing/shoes`}>
            <code>→ /en/clothing/shoes</code>
          </Link>
        </li>
        <li>
          <Link href={`/en/food/pizza`}>
            <code>→ /en/food/pizza</code>
          </Link>
        </li>
        <li>
          <Link href={`/en/foo`}>
            <code>→ /en/foo</code>
          </Link>
        </li>
      </ul>
    </div>
  );
}
