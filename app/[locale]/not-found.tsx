import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen max-w-4xl w-full mx-auto">
      <div className="flex flex-col gap-4 w-full">
        <p>
          <code>app/[locale]/not-found.tsx</code>
        </p>
        <p>
          This is where we expect to be when we call <code>notFound()</code>{" "}
          anywhere under <code>[locale]/</code>.
        </p>
        <div className="relative w-full aspect-[1934/228] mt-3">
          <Image
            src="/Screenshot 2025-09-09 at 9.07.45 AM.png"
            alt="Not Found"
            fill
          />
        </div>
      </div>
    </div>
  );
}
