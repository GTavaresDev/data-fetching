import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Link href={"/todos/create"}>Create Todo</Link>
    </div>
  );
}
