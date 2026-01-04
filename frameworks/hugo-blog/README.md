# Blog Hugo

Blog minimalista construído com [Hugo](https://gohugo.io/) e hospedado no GitHub Pages.

## 🎨 Características

- ✨ Design minimalista com modo escuro
- 🎨 Tema com acentos em cinza
- 🇧🇷 Interface em Português (Brasil)
- 🚀 Deploy automático via GitHub Actions
- 📱 Responsivo
- ⚡ Extremamente rápido (build <1ms por página)

## 📝 Como Adicionar um Novo Post

### Método 1: Usando Hugo CLI (recomendado)

Se você tem Hugo instalado localmente:

```bash
cd frameworks/hugo-blog
hugo new content/posts/meu-primeiro-post.md
```

### Método 2: Manualmente

1. Crie um novo arquivo em `content/posts/` com a extensão `.md`
2. Adicione o front matter no topo do arquivo:

```markdown
---
layout: ../../layouts/PostLayout.astro
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

1. Copie `hugo-deploy.yml` para `.github/workflows/`
2. Faça push para o branch `main`
3. Configure GitHub Pages (Settings > Pages > Source: GitHub Actions)

O blog será publicado automaticamente em https://dddanielreis.github.io/

## 🛠️ Desenvolvimento Local

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

### 2. Executar o Servidor Local

```bash
cd frameworks/hugo-blog
hugo server -D
```

O site estará disponível em http://localhost:1313/

## 📁 Estrutura de Diretórios

```
frameworks/hugo-blog/
├── archetypes/
│   └── posts.md              # Template para novos posts
├── content/
│   ├── posts/                # Seus posts ficam aqui
│   │   └── _index.md
│   └── sobre.md              # Página "Sobre"
├── themes/
│   └── hugo-blog-awesome/    # Tema do blog
├── hugo.toml                 # Configuração do Hugo
├── hugo-deploy.yml           # Workflow de deploy
└── README.md                 # Este arquivo
```

## ⚙️ Configuração

A configuração principal está em `hugo.toml`:

```toml
baseURL = 'https://dddanielreis.github.io/'
languageCode = 'pt-br'
title = 'Meu Blog'
theme = 'hugo-blog-awesome'

[Languages.pt-br.params]
  sitename = "Meu Blog"
  defaultColor = "dark"
  description = "Um blog minimalista"
```

### Personalizar:

- **Título**: Altere `title` e `sitename`
- **Descrição**: Modifique `description`
- **Cor do tema**: Ajuste `theme_color` em `[Languages.pt-br.params.webmanifest]`
- **Autor**: Atualize `[Languages.pt-br.params.author]`

## 🎨 Personalizar Tema

O tema atual é [hugo-blog-awesome](https://github.com/hugo-sid/hugo-blog-awesome).

Para personalizar:
- Edite `hugo.toml` para mudar cores e configurações
- Consulte a documentação do tema para opções avançadas
- Crie layouts customizados em `layouts/` (sobrescreve o tema)

## 🌍 Suporte Multilíngue

O blog está preparado para suporte multilíngue. Para ativar inglês:

1. Descomente a seção `[Languages.en]` em `hugo.toml`
2. Crie conteúdo em inglês em `content/en/`
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
