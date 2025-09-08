export default function NotFound() {
  return (
    <html lang="en">
      <body>
        not-found (root) - you shouldn't be here if you have locale in the url!
        We only see this when deployed, when catchall route is called
        "[...not-found]".
      </body>
    </html>
  );
}
