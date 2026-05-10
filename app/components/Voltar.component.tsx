import Link from "next/link";

export default function Voltar() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors hover:bg-zinc-900/50 rounded-lg border border-transparent hover:border-zinc-800"
    >
      <span className="text-base">←</span>
      <span>Voltar para a lista</span>
    </Link>
  );
}
