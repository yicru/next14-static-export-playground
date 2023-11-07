import Link from "next/link";

export async function generateStaticParams() {
  return [
    {
      pid: "1",
    },
    {
      pid: "2",
    },
    {
      pid: "3",
    },
  ];
}

export default function PostPage({ params }: { params: { pid: string } }) {
  return (
    <div>
      <div>
        <Link href="/">Topにもどる</Link>
      </div>
      <p className="mt-4">post {params.pid}</p>
    </div>
  );
}
