# Guia de Contribuição — Bloom

🇺🇸 [English Version](./CONTRIBUTING.en.md) | 🇧🇷 **Versão em Português**

Agradecemos o seu interesse em contribuir para o Bloom! Este documento orienta sobre o fluxo de trabalho local, formatação de código e boas práticas de envio de alterações.

---

## 🛠️ Configuração do Ambiente Local

### Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18+) e o gerenciador de pacotes **pnpm** (ou npm) instalados no seu computador.

### Passo 1: Clonar o Repositório
```bash
git clone https://github.com/gui-bus/Bloom.git
cd Bloom
```

### Passo 2: Instalar Dependências
```bash
pnpm install
```

### Passo 3: Rodar o Servidor de Documentação
```bash
pnpm dev
```
Abra o navegador em [http://localhost:3000](http://localhost:3000) para ver a documentação interativa local.

---

## 🎨 Criando ou Modificando Componentes

Ao criar um componente na pasta `components/ui/`:
1. Siga estritamente as diretrizes em [**`docs/design-system.md`**](./docs/design-system.md) (neutros limpos, Radix UI e Tailwind v4).
2. Forneça os arquivos obrigatórios na pasta `components/ui/[nome-do-componente]/`:
   * `[nome-do-componente].tsx` (código-fonte do componente).
   * `[nome-do-componente].code.ts` (código exportado em string para visualização nas abas das docs).
3. Após criar ou editar componentes, rode o script de sincronização e build do registro para atualizar os metadados consumidos pela CLI:
```bash
pnpm build:registry
```

---

## 💅 Qualidade de Código (Lint e Formatação)

O Bloom utiliza o **Biome** para linting e formatação rápida.
Antes de fazer commits, certifique-se de validar a qualidade do código:

```bash
# Formatar todos os arquivos modificados
pnpm format

# Verificar lints e erros
pnpm lint
```

---

## 🧪 Testes Automatizados

Todas as adições devem ser cobertas por testes correspondentes:

```bash
# Rodar testes de unidade (Vitest)
pnpm test:unit

# Rodar testes de integração (Playwright)
pnpm test:e2e
```

---

## 🚀 Fluxo de Commits

O Bloom segue as convenções do **Conventional Commits** para manter o histórico de commits organizado:
* `feat(componente):` Adição de novos componentes ou recursos.
* `fix(componente):` Correções de bugs ou problemas de tipos.
* `docs:` Melhorias ou atualizações de documentação.
* `chore:` Tarefas de manutenção ou dependências.
