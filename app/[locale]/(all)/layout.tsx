export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Record<string, unknown>>;
}) {
  console.log("(all)/ layout params", await params);

  return <div>{children}</div>;
}
