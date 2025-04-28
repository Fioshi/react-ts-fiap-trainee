# FIAP TRAINEE

## 📝 Descrição

Este é um projeto de exemplo criado como parte do desafio da vaga de **Pessoa desenvolvedora Front-End de nivel Trainee.** A aplicação foi construída com **Next.js**, **React** com **TypeScript**, **Styled Components** para estilização e **GSAP** para animações.

## ⚙️ Tecnologias

Este projeto utiliza as seguintes tecnologias:

- **React** com **TypeScript**: Para a construção de componentes reutilizáveis e fortes tipagens.
- **Next.js**: Framework React para renderização server-side e otimização de performance.
- **Styled Components**: Biblioteca para estilização em componentes, permitindo escopo isolado de estilos e temas.
- **GSAP**: Biblioteca para animações, proporcionando transições e animações suaves.

## 🛠️ Instalação

1. Clone este repositório:
    
    ```bash
    git clone https://github.com/usuario/react-ts-fiap-trainee.git
    ```
    
2. Acesse o diretório do projeto:
    
    ```bash
    cd react-ts-fiap-trainee
    ```
    
3. Instale as dependências:
    
    ```bash
    npm install
    ```
    
4. Execute o servidor de desenvolvimento:
    
    ```bash
    npm run dev
    ```
    
5. Acesse o projeto no navegador em `http://localhost:3000`.

## 🚀 Uso

Aqui estão algumas orientações para a aplicação:

- **Styled Components**: Os estilos são definidos dentro dos arquivos de componentes, podendo ser facilmente ajustados para personalização.
- **GSAP**: As animações estão localizadas dentro de arquivos específicos de animações (`animation.ts`), onde você pode criar novas animações para diferentes componentes.
- **Componentes**: A estrutura de componentes é modularizada, com arquivos separados para lógica (`index.tsx`), estilos (`style.ts`) e animações (`animation.ts`).

## 📂 Estrutura de Diretórios

Aqui está uma visão geral da estrutura de diretórios do projeto:
```bash
src/
├── components/
│   ├── index.tsx
│   ├── style.ts
│   ├── banner/
│   │   ├── animation.ts
│   │   ├── index.tsx
│   │   ├── style.ts
│   ├── break_image/
│   │   ├── index.tsx
│   │   ├── style.ts
│   ├── contact/
│   │   ├── index.tsx
│   │   ├── style.ts
│   ├── header/
│   │   ├── animation.ts
│   │   ├── header.tsx
│   │   ├── style.ts
│   ├── structure/
│   │   ├── animation.ts
│   │   ├── index.tsx
│   │   ├── style.ts
│   ├── upper-button/
│   │   ├── index.tsx
│   │   ├── style.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
├── styles/
│   ├── global_styles.tsx
│   ├── normalize_css.tsx
