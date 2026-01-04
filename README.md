# Blog Pessoal

Blog minimalista construído com [Hugo](https://gohugo.io/) e hospedado no GitHub Pages.

## 🎨 Características

- ✨ Design minimalista com modo escuro
- 🎨 Tema com acentos em cinza
- 🇧🇷 Interface em Português (Brasil)
- 🚀 Deploy automático via GitHub Actions
- 📱 Responsivo
- ⚡ Extremamente rápido

## 📝 Como Adicionar um Novo Post

### Método 1: Usando Hugo CLI (recomendado)

Se você tem Hugo instalado localmente:

```bash
# Criar um novo post
hugo new content/posts/meu-primeiro-post.md

# O arquivo será criado em content/posts/meu-primeiro-post.md
```

### Método 2: Manualmente

1. Crie um novo arquivo em `content/posts/` com a extensão `.md`
2. Adicione o front matter no topo do arquivo:

```markdown
---
title: "Título do Seu Post"
date: 2026-01-04
draft: false
tags: ["tag1", "tag2"]
categories: ["categoria"]
---

Escreva seu conteúdo aqui usando Markdown.
```

### Dicas para Posts

- **Draft**: Use `draft: true` para posts em rascunho (não serão publicados)
- **Tags**: Adicione tags relevantes para organização
- **Categorias**: Use categorias para agrupar posts relacionados
- **Data**: A data determina a ordem dos posts

## 🚀 Como Publicar

O blog é publicado automaticamente no GitHub Pages quando você faz push para o branch `main`:

```bash
# 1. Adicione seus arquivos
git add .

# 2. Faça commit das mudanças
git commit -m "Adicionar novo post"

# 3. Faça push para o branch main
git push origin main
```

O GitHub Actions irá:
1. Construir o site com Hugo
2. Publicar automaticamente em https://dddanielreis.github.io/

⏱️ O processo leva cerca de 1-2 minutos.

## 🛠️ Desenvolvimento Local

Para visualizar o site localmente antes de publicar:

### 1. Instalar Hugo

**macOS:**
```bash
brew install hugo
```

**Linux:**
```bash
sudo snap install hugo
```

**Windows:**
```bash
choco install hugo-extended
```

Ou baixe em: https://github.com/gohugoio/hugo/releases

### 2. Clonar o Repositório

```bash
git clone https://github.com/dddanielreis/dddanielreis.github.io.git
cd dddanielreis.github.io
git submodule update --init --recursive
```

### 3. Executar o Servidor Local

```bash
# Iniciar o servidor de desenvolvimento
hugo server -D

# O site estará disponível em http://localhost:1313/
# -D inclui posts em draft
```

O servidor possui hot-reload, então mudanças nos arquivos são refletidas automaticamente.

## 📁 Estrutura de Diretórios

```
.
├── .github/
│   └── workflows/
│       └── hugo.yml          # Workflow de deploy
├── archetypes/
│   └── posts.md              # Template para novos posts
├── content/
│   ├── posts/                # Seus posts ficam aqui
│   │   └── _index.md
│   └── sobre.md              # Página "Sobre"
├── themes/
│   └── hugo-blog-awesome/    # Tema do blog
├── hugo.toml                 # Configuração do Hugo
└── README.md                 # Este arquivo
```

## ⚙️ Configuração

A configuração principal está em `hugo.toml`:

```toml
baseURL = 'https://dddanielreis.github.io/'
languageCode = 'pt-BR'
title = 'Meu Blog'
theme = 'hugo-blog-awesome'

[params]
  description = 'Um blog minimalista'
  defaultTheme = 'dark'
  accentColor = '#6b7280'  # Cinza
  author = 'Daniel Reis'
```

### Personalizar:

- **Título**: Altere `title` para o nome do seu blog
- **Descrição**: Modifique `description`
- **Cor de Destaque**: Ajuste `accentColor` (formato hexadecimal)
- **Autor**: Atualize o campo `author`

## 🌐 Configurar GitHub Pages

1. Vá em **Settings** > **Pages** no repositório
2. Em **Source**, selecione **GitHub Actions**
3. Salve as configurações

Após o primeiro push para `main`, o site será publicado automaticamente.

## 🎨 Personalizar Tema

O tema atual é [hugo-blog-awesome](https://github.com/hugo-sid/hugo-blog-awesome).

Para personalizar:
- Edite `hugo.toml` para mudar cores e configurações
- Consulte a documentação do tema para opções avançadas
- Crie layouts customizados em `layouts/` (sobrescreve o tema)

## 🌍 Suporte Multilíngue (Futuro)

O blog está preparado para suporte multilíngue. Para ativar:

1. Descomente a seção de idiomas em `hugo.toml`
2. Crie conteúdo específico por idioma em `content/en/`, `content/pt-BR/`, etc.
3. Consulte a [documentação do Hugo](https://gohugo.io/content-management/multilingual/)

## 📖 Recursos Úteis

- [Documentação do Hugo](https://gohugo.io/documentation/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Hugo Blog Awesome Theme](https://github.com/hugo-sid/hugo-blog-awesome)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

## 📄 Licença

Este projeto usa o tema hugo-blog-awesome, que é licenciado sob MIT License.

---

Feito com ❤️ usando Hugo
