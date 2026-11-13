// app/blog/[slug]/page.tsx
export default async function BlogPost({
  params,
}: {
  params: { slug: string };  // Убираем Promise
}) {
  const { slug } = params;    // Убираем await
  return (
    <article>
      <h1>Статья: {slug}</h1>
    </article>
  );
}