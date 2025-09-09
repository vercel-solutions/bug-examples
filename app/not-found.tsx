import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen max-w-4xl mx-auto">
      <div className="flex flex-col gap-4 w-full">
        <p>
          <code>/app/not-found.tsx</code>
        </p>
        <p>
          You shouldn't be here if you <code>/en</code> in the url! We only see
          this when deployed, when the catch-all route specifically named{" "}
          <code>[...not-found]</code>. We expect to be in the not-found file
          closest to our route. Params are also lost.
        </p>
        <div className="relative w-full aspect-[1934/228] mt-3">
          <Image
            src="/Screenshot 2025-09-09 at 8.57.44 AM.png"
            alt="Not Found"
            fill
          />
        </div>
      </div>
    </div>
  );
}
