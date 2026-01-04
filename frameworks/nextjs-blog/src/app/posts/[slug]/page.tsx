import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <header style={{ marginBottom: '2rem' }}>
        <h1>{post.title}</h1>
        <div style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          {new Date(post.date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </header>
      <div
        style={{ color: 'var(--text-secondary)' }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
