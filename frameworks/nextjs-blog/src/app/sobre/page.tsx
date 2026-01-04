import Counter from '@/components/Counter';

export default function AboutPage() {
  return (
    <>
      <h1>Sobre</h1>
      <p>Bem-vindo ao meu blog! Este é um espaço para compartilhar pensamentos, ideias e aprendizados.</p>

      <h2>Sobre este site</h2>
      <p>
        Este blog foi construído com{' '}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        , o framework React para produção com renderização híbrida e exportação estática.
      </p>

      <h3>Tecnologias utilizadas:</h3>
      <ul style={{ listStyle: 'disc', marginLeft: '2rem', color: 'var(--text-secondary)' }}>
        <li>Next.js 15 - Framework React</li>
        <li>React 19 - Biblioteca UI</li>
        <li>TypeScript - Tipagem estática</li>
        <li>GitHub Pages - Hospedagem</li>
      </ul>

      <h2>Exemplo de Interatividade</h2>
      <p>Next.js permite criar componentes interativos facilmente:</p>
      <Counter />
    </>
  );
}
