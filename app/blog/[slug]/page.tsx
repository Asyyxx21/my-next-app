export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ВАЖНО: в Next.js 15 params — Promise
  return (
    <article>
      <h1>Статья: {slug}</h1>
    </article>
  );
}
export async function generateStaticParams() {
  return [
    { slug: 'nextjs-vvedenie' },
    { slug: 'react-osnovy' },
  ];
}
