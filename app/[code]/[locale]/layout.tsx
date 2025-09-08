import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { locale: "en", code: "" },
    { locale: "fr", code: "" },
  ];
}

export default async function LocaleLayout({
  params,
  children,
}: {
  params: Promise<{
    locale: string;
  }>;
  children: React.ReactNode;
}) {
  const _params = await params;
  console.log("locale layout params", _params);

  if (!["en", "fr"].includes(_params.locale)) {
    notFound();
  }

  return <div>{children}</div>;
}
