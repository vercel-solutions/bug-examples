import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const _params = await params;
  console.log("home page params", _params);
  return (
    <div>
      <h1>Locale Home Page: {_params.locale}</h1>

      <ul>
        <li className="text-yellow-500">
          <Link href={`/en/men/shoes`}>→ Link to products page</Link>
        </li>
        <li className="text-yellow-500">
          <Link href={`/en/foo`}>→ Link to missing route</Link>
        </li>
      </ul>
    </div>
  );
}
