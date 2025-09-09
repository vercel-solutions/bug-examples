import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const _params = await params;
  console.log("home page params", _params);
  return (
    <div className="flex flex-col gap-4 p-8 max-w-4xl">
      <h1>Home</h1>

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

      <p>
        This demo illustrates a strange quirk where naming a catch-all route{" "}
        <code>[...not-found]</code> and calling <code>notFound()</code> in it's
        page will throw you out to the root <code>not-found.tsx</code> instead
        of the nearest one, causing params in the inner layout and catch-all
        page to be lost on the way.
      </p>
    </div>
  );
}
