import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
        <p className="display font-600 text-ink" style={{ fontWeight: 600 }}>
          {profile.name}
        </p>
        <p>© {new Date().getFullYear()} — Built to get hired. Ships on Vercel.</p>
      </div>
    </footer>
  );
}
