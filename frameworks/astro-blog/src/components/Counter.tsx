import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      padding: '1rem',
      backgroundColor: 'var(--bg-secondary)',
      borderRadius: '8px',
      marginTop: '1rem',
    }}>
      <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
        Exemplo de componente React interativo:
      </p>
      <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
        Contador: {count}
      </p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--accent)',
            color: 'var(--text-primary)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Incrementar
        </button>
        <button
          onClick={() => setCount(0)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--gray-700)',
            color: 'var(--text-primary)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Resetar
        </button>
      </div>
    </div>
  );
}
