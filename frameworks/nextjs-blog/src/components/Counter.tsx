'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p style={{ color: 'var(--text-secondary)' }}>
        Exemplo de componente React interativo:
      </p>
      <p className="counter-value">
        Contador: {count}
      </p>
      <div className="counter-buttons">
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-primary"
        >
          Incrementar
        </button>
        <button
          onClick={() => setCount(0)}
          className="btn btn-secondary"
        >
          Resetar
        </button>
      </div>
    </div>
  );
}
