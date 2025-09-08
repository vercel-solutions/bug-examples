export default function NotFound() {
  return (
    <html lang="en">
      <body>
        not-found (root) - you shouldn't be here if you have locale in the url!
        We only see this when deployed, when catchall route is called
        "[...not-found]". Check the params that were logged in the route tree,
        they're wonky
      </body>
    </html>
  );
}
