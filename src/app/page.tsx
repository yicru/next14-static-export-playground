import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul className={"list-disc"}>
        <Link href={"/posts/1"}>
          <li>/posts/1</li>
        </Link>
        <Link href={"/posts/2"}>
          <li>/posts/2</li>
        </Link>
        <Link href={"/posts/3"}>
          <li>/posts/3</li>
        </Link>
      </ul>
    </main>
  );
}
