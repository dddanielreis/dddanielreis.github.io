export interface Post {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content: string;
}

// Example posts - replace with your actual post data or use a CMS
const posts: Post[] = [
  {
    slug: 'exemplo',
    title: 'Post de Exemplo',
    date: '2026-01-04',
    description: 'Um post de exemplo para demonstrar o blog Next.js',
    content: `
# Post de Exemplo

Este é um post de exemplo para demonstrar como o blog Next.js funciona.

## React

Como Next.js é construído sobre React, você tem acesso total a todos os recursos do React:

- Componentes
- Hooks
- State management
- E muito mais!

## Características do Next.js

- **App Router**: Roteamento baseado em arquivos
- **Server Components**: Renderização no servidor por padrão
- **Client Components**: Para interatividade no cliente
- **Static Export**: Exportação para sites estáticos
- **TypeScript**: Suporte completo para TypeScript

> **Nota:** Este é apenas um post de exemplo. Substitua com seus próprios posts.
    `.trim(),
  },
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
