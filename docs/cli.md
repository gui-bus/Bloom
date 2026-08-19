# Instalação e Uso via CLI (`@bloomui-react/cli`)

🇺🇸 [English Version](./cli.en.md) | 🇧🇷 **Versão em Português**

O Bloom fornece uma ferramenta de linha de comando (CLI) para automatizar a inicialização do design system e a instalação de componentes diretamente no seu próprio projeto React ou Next.js. 

Desta forma, você não precisa clonar o repositório base ou copiar códigos manualmente — a CLI faz todo o trabalho de download, tradução de caminhos e configuração de dependências.

---

## 🚀 Inicialização rápida

### Passo 1: Inicializar o Bloom no seu Projeto
Na raiz do seu projeto consumidor, execute o comando abaixo para configurar o Bloom:
```bash
npx @bloomui-react/cli init
```
A CLI abrirá uma interface interativa no terminal perguntando:
1. **Diretório dos Componentes**: Onde os componentes criados devem ser salvos (Padrão: `components/ui`).
2. **Diretório de Utilitários**: Onde os arquivos fundamentais de suporte devem ser salvos (Padrão: `lib`).
3. **Instalação de Dependências**: Se a CLI deve instalar automaticamente as bibliotecas de utilidades necessárias (`clsx`, `tailwind-merge`, `lucide-react` e `tw-animate-css`) no seu projeto.

Este comando gerará o arquivo `bloom.json` na raiz do seu projeto e criará as pastas e arquivos de suporte:
* `lib/utils.ts` (contendo a função utilitária `cn` para fusão de classes).
* `lib/design-system.ts` (contendo os tokens de tamanhos, cores semânticas e cantos arredondados).
* Detecta e aplica automaticamente as configurações no seu `globals.css` — injetando as variáveis CSS, animações de keyframe do Bloom e a diretiva `@source "../node_modules/@bloomui-react/components"` para que o Tailwind CSS v4 escaneie corretamente o pacote pré-compilado.

---

## 🧩 Adicionando Componentes

Com a biblioteca inicializada, você pode adicionar qualquer componente do Bloom rodando o comando:
```bash
npx @bloomui-react/cli add [nome-do-componente]
```

**Exemplo:**
```bash
npx @bloomui-react/cli add button
```

### O que acontece por baixo dos panos?
1. **Download Seguro**: A CLI busca o código original e estruturado diretamente do nosso registro oficial.
2. **Tradução Dinâmica de Caminhos**: O script analisa a estrutura do seu projeto (baseado no `bloom.json`) e reescreve todas as referências de importação (como `@/lib/utils` e `@/lib/design-system`) para caminhos relativos correspondentes à sua pasta local.
3. **Instalação de Dependências**: O sistema detecta o gerenciador de pacotes ativo no seu projeto (`pnpm`, `npm`, `yarn` ou `bun`) e instala de forma automática todas as dependências adicionais do Radix UI substituindo o fluxo manual.
4. **Documentação para IA Inteligente**: A CLI extrai toda a documentação ricos em exemplos, tabelas de propriedades e imports reais e cria um arquivo `.md` em `[utilsDir]/docs/[componente].md` para fornecer contexto total a ferramentas de IA Coding Assistants (Cursor, Antigravity, Copilot, etc.).

---

## 🔄 Atualizando Componentes

Para atualizar todos os componentes instalados (ou um específico) para a versão mais recente disponível no registro:
```bash
# Atualizar todos os componentes instalados
npx @bloomui-react/cli update

# Atualizar um componente específico (ex: button)
npx @bloomui-react/cli update button
```
Esse comando sobrescreverá o código-fonte local do componente com as correções mais recentes, instalará novas dependências se necessário e atualizará o arquivo markdown correspondente em `lib/docs/`.

---

## 🏥 Diagnóstico de Saúde (`doctor`)

Se você encontrar problemas com caminhos de importação ou arquivos ausentes, execute o diagnóstico:
```bash
npx @bloomui-react/cli doctor
```
Ele analisará e validará:
* A existência e validade do manifesto `bloom.json`.
* A integridade física das pastas de componentes e utilitários.
* A presença dos arquivos obrigatórios de suporte (`utils.ts`, `design-system.ts`, `ripple`).
* A presença das dependências obrigatórias (`clsx`, `tailwind-merge`, `lucide-react` e `tw-animate-css`) no `package.json`.

---

## 🗑️ Desinstalação completa

Caso queira remover todos os componentes, utilitários, regras de IA e o manifesto gerados pelo Bloom:
```bash
npx @bloomui-react/cli uninstall
```
