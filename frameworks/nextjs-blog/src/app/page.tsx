import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <h1>Bem-vindo</h1>
      <p>Um blog minimalista com modo escuro, construído com Next.js.</p>

      <h2 style={{ marginTop: '3rem' }}>Posts Recentes</h2>
      {posts.length === 0 ? (
        <p>Nenhum post ainda. Adicione seus posts em <code>src/lib/posts.ts</code></p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-item">
              <div className="post-date">
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </div>
              <h3 className="post-title">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h3>
              {post.description && (
                <p className="post-excerpt">{post.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
