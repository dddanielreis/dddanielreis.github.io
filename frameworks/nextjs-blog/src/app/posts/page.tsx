import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <>
      <h1>Todos os Posts</h1>

      {posts.length === 0 ? (
        <p>Nenhum post ainda.</p>
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
