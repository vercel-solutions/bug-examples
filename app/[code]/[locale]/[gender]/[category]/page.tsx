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
  console.log("product page params", await params);

  return <div>product page</div>;
}
