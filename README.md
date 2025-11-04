# Kipo Super Trumps

> Jogo de **Super Trunfo** inspirado na série **Kipo e os Animonstros**, desenvolvido em **React + Vite + TypeScript**.  
> Permite que o usuário visualize as cartas do baralho e jogue partidas contra a IA da aplicação.

---

## 🚀 Tecnologias Utilizadas

- [**React 18**](https://react.dev/): Biblioteca para criação de interfaces reativas e declarativas.
- [**Vite**](https://vitejs.dev/): Bundler rápido e otimizado para desenvolvimento moderno.
- [**TypeScript**](https://www.typescriptlang.org/): Superset de JavaScript com tipagem estática.
- [**React Router**](https://reactrouter.com/): Gerenciamento de rotas do frontend.
- [**Font Awesome (React)**](https://fontawesome.com/): Ícones vetoriais para React.
- [**Vitest**](https://vitest.dev/): Framework de testes unitários inspirado no Jest.

---

## 📂 Estrutura do Projeto

```
kipo-super-trumps/
│
├── public/                  # Arquivos estáticos
├── src/
│   ├── assets/              # Imagens e baralho da aplicação
│   ├── components/          # Componentes reutilizáveis
│   ├── helpers/             # Funções auxiliares
│   ├── hooks/               # Hooks personalizados
│   ├── interfaces/          # Contratos de Tipagem TypeScript
│   ├── pages/               # Páginas principais
│   ├── routes/              # Configuração das rotas
│   ├── services/            # Lógica de regras de jogo e utilitários
│   ├── tests/               # Testes unitários da camada service
│   │   └── mocks/           # Dados e decks fictícios usados nos testes
│   ├── App.tsx              # Configuração do layout principal
│   └── main.tsx             # Ponto de entrada do React
│
└── package.json             # Dependências e scripts do projeto
```

---

## 🕹️ Funcionalidades

### 🎮 Game

- Simula partidas de Super Trunfo (Jogador vs IA).
- Permite escolha de atributos pelo jogador: **Força**, **Agilidade**, **Inteligência** e **Carisma**.
- IA faz **escolha automatizada** de atributos.
- Dá retorno visual sobre o estado atual do jogo.

### 🖼️ Gallery

- Exibe todas as cartas disponíveis no jogo.
- Cada carta apresenta imagem e atributos correspondentes ao personagem.

### 🏠 Home

- Tela inicial, com acesso à página de jogo e instruções básicas.

---

## 🧩 Testes

O projeto utiliza o **Vitest** para testes unitários da lógica principal do jogo (camada service).

Exemplo de execução:

```bash
npm run test
```

---

## 🧱 Estrutura de Rotas

| Rota       | Descrição                    |
| ---------- | ---------------------------- |
| `/`        | Página inicial               |
| `/gallery` | Exibição de todas as cartas  |
| `/game`    | Tela de jogo do Super Trunfo |

---

## 💻 Rodando a Aplicação Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/vanriwerson/kipo-super-trumps.git
cd kipo-super-trumps
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar em ambiente de desenvolvimento

```bash
npm run dev
```

> A aplicação ficará disponível em `http://localhost:5173`.

### 4. Fazer o build para produção

```bash
npm run build
```

---

## 🌐 Deploy

O projeto está hospedado via **GitHub Pages**:

🔗 [Acessar Kipo Super Trumps](https://vanriwerson.github.io/kipo-super-trumps/)

---

## 👨‍💻 Sobre o Desenvolvedor

[**Bruno Riwerson Silva**](https://www.linkedin.com/in/bruno-riwerson/) é um **desenvolvedor full-stack** apaixonado por tecnologia, jogos e boas práticas de desenvolvimento.  
Proficiente no uso de **React**, **TypeScript**, **Node.js** e **.NET**, com experiência em bancos de dados **relacionais e não relacionais**, e foco em criar soluções **eficientes, acessíveis e bem estruturadas**.

---

✨ _"Kipo Super Trumps" é um projeto de aprendizado e criatividade, combinando programação, design e diversão inspirada em um dos mundos mais vibrantes da animação moderna._
