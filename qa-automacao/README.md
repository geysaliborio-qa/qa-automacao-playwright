<div align="center">

# 🧪 QA Automação com Playwright
### Geysa Liborio | Quality Assurance Sênior

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

[LinkedIn](https://www.linkedin.com/in/geysaliborio/) · [GitHub](https://github.com/geysaliborio-qa)

</div>

## 🎯 Objetivo
Projeto demonstrativo de automação de testes E2E utilizando **Playwright + TypeScript**, com **Page Object Model (POM)**, testes positivos e negativos, relatório HTML, screenshots e traces em falhas, e integração contínua com GitHub Actions.

**Aplicação sob teste:** [Sauce Demo](https://www.saucedemo.com/) — ambiente público de demonstração. As credenciais utilizadas são fornecidas pela própria aplicação e não representam contas pessoais.

## 🛠️ Tecnologias
- Playwright Test e TypeScript
- Node.js e npm
- Page Object Model
- GitHub Actions (CI)

## 📂 Estrutura
```text
qa-automacao-playwright/
├── .github/workflows/playwright.yml
├── docs/estrategia-de-testes.md
├── pages/
│   ├── LoginPage.ts
│   └── InventoryPage.ts
├── tests/
│   ├── login.spec.ts
│   └── cart.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

## 🧩 Cenários automatizados
| ID | Cenário | Tipo |
|---|---|---|
| CT-001 | Login com credenciais válidas | Positivo |
| CT-002 | Login com senha incorreta | Negativo |
| CT-003 | Login com usuário bloqueado | Negativo |
| CT-004 | Login com campos vazios | Negativo |
| CT-005 | Adicionar produto ao carrinho | Positivo |

## ▶️ Como executar
**Pré-requisitos:** Node.js 20+ e npm instalados.

```bash
npm install
npx playwright install chromium
npm test
```

Para executar com navegador visível:
```bash
npm run test:headed
```

Para abrir o relatório HTML após a execução:
```bash
npm run report
```

## 📊 Evidências e CI
O Playwright gera relatório HTML e captura **screenshots, vídeos e traces em caso de falha**. O workflow em `.github/workflows/playwright.yml` executa os testes em push e pull request para `main` e publica o relatório como artefato da execução.

Acesse a aba **Actions** do repositório para acompanhar as execuções. **Os testes ainda precisam ser executados e validados após a publicação; não há resultados aprovados declarados aqui.**

## 📋 Estratégia de testes
Consulte [estratégia de testes](docs/estrategia-de-testes.md) para escopo, riscos, mitigação e critérios de saída.

## 💜 Sobre a autora
**Geysa Liborio** — Quality Assurance Sênior, com foco em qualidade de software e evolução contínua das práticas de teste.

[Conecte-se no LinkedIn](https://www.linkedin.com/in/geysaliborio/)

> Quality is not just testing. It's a mindset.
