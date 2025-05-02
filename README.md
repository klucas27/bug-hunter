# Bug Hunter

Bem-vindo ao **Bug Hunter**, uma plataforma gamificada criada para auxiliar no aprendizado de lógica de programação de forma divertida e interativa. Este projeto combina elementos de jogos, inteligência artificial e feedback para proporcionar uma experiência de aprendizado moderna e eficaz.

---

## 📂 Estrutura do Projeto

```
bug-hunter/
├── frontend/          # Código do frontend (React + Vite)
│   ├── src/           # Código-fonte do frontend
│   ├── public/        # Arquivos estáticos
│   ├── vite.config.js # Configuração do Vite
│   └── package.json   # Dependências do frontend
├── backend/           # (Em Produção) Código do backend (Node.js + Express)
├── .gitignore         # Arquivos e pastas ignorados pelo Git
├── request.txt        # Lista de dependências e instruções de instalação
├── LICENSE            # Licença do projeto
└── README.md          # Documentação do projeto
```

---

## 🧠 Objetivo do Projeto

O Bug Hunter foi desenvolvido com o objetivo de:

* Ensinar lógica de programação por meio de desafios gamificados.
* Utilizar IA para oferecer correções automáticas e personalizadas.
* Fornecer uma interface amigável e moderna para estudantes iniciantes.

---

## 🛠️ Tecnologias Utilizadas

### Frontend

* **React**: Interface de usuário moderna e reativa.
* **React Router DOM**: Navegação entre páginas.
* **Vite**: Build rápido e leve.
* **Phosphor Icons**: Biblioteca de ícones estilizados.

### Ferramentas de Desenvolvimento

* **ESLint**: Análise de código para manter boas práticas.
* **Prettier**: Formatação automática de código.

### Backend (opcional)

* **Node.js + Express**: Servidor backend para lidar com autenticação, dados dos usuários e lógica de validação.

---

## 📦 Dependências

### Frontend

* `react`
* `react-dom`
* `react-router-dom`
* `@phosphor-icons/react`
* `@vitejs/plugin-react`

### Desenvolvimento Frontend

* `eslint`
* `eslint-plugin-react-hooks`
* `eslint-plugin-react-refresh`
* `@eslint/js`
* `globals`
* `prettier`

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

* **Node.js** instalado ([https://nodejs.org/](https://nodejs.org/))
* **npm** ou **yarn**

### Passo a Passo

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd bug-hunter
```

2. Instale as dependências do frontend:

```bash
cd frontend
npm install
```

3. Configure ESLint e Prettier (opcional):

```bash
npm install eslint prettier --save-dev
npx eslint --init
echo {} > .prettierrc
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse em seu navegador:

```
http://localhost:3000
```

---

## 🧩 Estrutura do Frontend

### Componentes

* **Header**: Cabeçalho com botão para abrir ou esconder a barra lateral.
* **LeftBar**: Menu lateral com links para páginas do projeto.
* **App**: Componente principal que define as rotas.

### Páginas

* **Home**: Introdução ao projeto.
* **Game**: Sessão de desafios lógicos gamificados.
* **Aprendizado com IA**: Explicações automatizadas com apoio de IA.
* **Conceitos**: Explicações teóricas.
* **Feedbacks**: Sistema de envio e leitura de feedbacks.

---

## 📋 Boas Práticas

### Linting e Formatação

```bash
npx eslint .
npx prettier --write .
```

### Organização de Código

* Componentes em `src/components`
* Páginas em `src/pages`

---

## 🔧 Manutenção

### Adicionar nova dependência

```bash
cd frontend
npm install <nome-da-dependencia>
```

### Atualizar dependências

```bash
cd frontend
npm update
```

### Verificar funcionamento

```bash
npm run dev
```

---

## 📄 Licença

Este projeto está sob uma licença **restritiva**. Não é permitido modificar, redistribuir ou usar este código sem autorização prévia do autor.

---

## 📞 Suporte

Dúvidas ou sugestões? Entre em contato com o mantenedor do projeto através do e-mail: **[seuemail@exemplo.com](mailto:kresleylucas.r@gmail.com)**

---

## 🙌 Contribuição

Este projeto está em fase inicial. Caso deseje contribuir, abra uma *issue* ou envie um *pull request* com melhorias ou correções.
