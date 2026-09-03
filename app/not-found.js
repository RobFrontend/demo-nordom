import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 grid min-h-[80vh] items-center">
      <div>
        <h1 className="text-5xl font-semibold mb-8">
          Wygląda na to, że ta strona nie istnieje
        </h1>
        <Link href="/" className="inline-flex items-center btn1">
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
