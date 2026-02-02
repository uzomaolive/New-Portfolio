import Link from "next/link";

export default function NotFound() {
  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-950 text-neutral-50 text-center px-6">
      <div className="animate-fade-in">
        {/* Initials */}
        <div className="text-8xl font-bold tracking-widest mb-4">
         404
        </div>

        {/* Message */}
        <p className="text-sm text-neutral-400 mb-6">
          The page you’re looking for doesn’t exist.
        </p>

        {/* Back home */}
        <Link
          href="/"
          className="text-sm underline underline-offset-4 text-neutral-300 hover:text-white transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
