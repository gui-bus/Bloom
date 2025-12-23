"use client";
//#region Imports
import { Icon } from "@iconify/react";
import { CodeBlock } from "@/components/core/codeBlock";
import { DocsComponent } from "@/components/core/docsComponent";
import DocsTitle from "@/components/core/docsTitle";
import { Separator } from "@/components/ui/separator/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs";
import { tabsCode } from "@/components/ui/tabs/tabs.code";
//#endregion

export default function TabsComponentPage() {
  return (
    <main className="p-5 space-y-8">
      <DocsTitle
        title="Tabs"
        description="Navegação por abas utilizada para organizar conteúdos relacionados e facilitar a alternância entre seções sem perda de contexto."
      />

      <CodeBlock
        code={tabsCode}
        componentName="tabs.tsx"
        tags={["React", "Radix UI", "Component", "Tabs", "TypeScript"]}
      />

      <CodeBlock
        code={`
@layer utilities {
  .tabs-custom {
    &[data-state="active"] {
      background-color: var(--tabs-active-bg);
      border-color: var(--tabs-active-border);
      color: var(--tabs-active-text);
    }
  }
}`}
        componentName="globals.css"
        language="css"
        tags={["CSS", "Tailwind", "Utilities", "Tabs", "Theme"]}
      />

      {/* VARIANTS */}
      <DocsComponent
        title="Variantes"
        description="Define a aparência visual dos botões por meio da prop 'variant', permitindo adaptar o estilo ao contexto da interface. Quando não informada, a variante padrão é utilizada."
        preview={
          <div className="space-y-5">
            {/* DEFAULT */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">Perfil</TabsTrigger>
                <TabsTrigger value="documents">Documentos</TabsTrigger>
                <TabsTrigger value="config">Configurações</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* GHOST */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" variant="ghost">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" variant="ghost">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" variant="ghost">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* BORDERED */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" variant="bordered">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" variant="bordered">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" variant="bordered">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* UNDERLINE */}
            <Tabs defaultValue="profile">
              <TabsList background={false}>
                <TabsTrigger value="profile" variant="underline">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" variant="underline">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" variant="underline">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={
          <CodeBlock
            code={`      
<div className="space-y-5">
  {/* DEFAULT */}
  <Tabs defaultValue="profile">                 
    <TabsList>
      <TabsTrigger value="profile">Perfil</TabsTrigger>
      <TabsTrigger value="documents">Documentos</TabsTrigger>
      <TabsTrigger value="config">Configurações</TabsTrigger>
    </TabsList>
  </Tabs>

  {/* GHOST */}
  <Tabs defaultValue="profile">                  
    <TabsList>
      <TabsTrigger value="profile" variant="ghost">
        Perfil
      </TabsTrigger>
      <TabsTrigger value="documents" variant="ghost">
        Documentos
      </TabsTrigger>
      <TabsTrigger value="config" variant="ghost">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* BORDERED */}
  <Tabs defaultValue="profile">                  
    <TabsList>
      <TabsTrigger value="profile" variant="bordered">
        Perfil
      </TabsTrigger>
      <TabsTrigger value="documents" variant="bordered">
        Documentos
      </TabsTrigger>
      <TabsTrigger value="config" variant="bordered">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* UNDERLINE */}
  <Tabs defaultValue="profile">                  
    <TabsList background={false}>
      <TabsTrigger value="profile" variant="underline">
        Perfil
      </TabsTrigger>
      <TabsTrigger value="documents" variant="underline">
        Documentos
      </TabsTrigger>
      <TabsTrigger value="config" variant="underline">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
              `}
          />
        }
      />

      {/* START & END CONTENT */}
      <DocsComponent
        title="Ícones e indicadores"
        description="Utilize 'startContent' e 'endContent' para adicionar elementos visuais opcionais ajudam a reforçar o significado das abas e tornam a navegação mais rápida e intuitiva."
        preview={
          <div className="space-y-5">
            {/* START CONTENT */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger
                  value="profile"
                  startContent={
                    <Icon icon="hugeicons:user-account" className="size-5" />
                  }
                >
                  Perfil
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  startContent={
                    <Icon
                      icon="hugeicons:document-validation"
                      className="size-5"
                    />
                  }
                >
                  Documentos
                </TabsTrigger>
                <TabsTrigger
                  value="config"
                  startContent={
                    <Icon
                      icon="hugeicons:configuration-02"
                      className="size-5"
                    />
                  }
                >
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* END CONTENT */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger
                  value="profile"
                  endContent={
                    <Icon icon="hugeicons:user-account" className="size-5" />
                  }
                >
                  Perfil
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  endContent={
                    <Icon
                      icon="hugeicons:document-validation"
                      className="size-5"
                    />
                  }
                >
                  Documentos
                </TabsTrigger>
                <TabsTrigger
                  value="config"
                  endContent={
                    <Icon
                      icon="hugeicons:configuration-02"
                      className="size-5"
                    />
                  }
                >
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={
          <CodeBlock
            code={`
<div className="space-y-5">
  {/* START CONTENT */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger
        value="profile"
        startContent={
          <Icon icon="hugeicons:user-account" className="size-5" />
        }
      >
        Perfil
      </TabsTrigger>
      <TabsTrigger
        value="documents"
        startContent={
          <Icon
            icon="hugeicons:document-validation"
            className="size-5"
          />
        }
      >
        Documentos
      </TabsTrigger>
      <TabsTrigger
        value="config"
        startContent={
          <Icon
            icon="hugeicons:configuration-02"
            className="size-5"
          />
        }
      >
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* END CONTENT */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger
        value="profile"
        endContent={
          <Icon icon="hugeicons:user-account" className="size-5" />
        }
      >
        Perfil
      </TabsTrigger>
      <TabsTrigger
        value="documents"
        endContent={
          <Icon
            icon="hugeicons:document-validation"
            className="size-5"
          />
        }
      >
        Documentos
      </TabsTrigger>
      <TabsTrigger
        value="config"
        endContent={
          <Icon
            icon="hugeicons:configuration-02"
            className="size-5"
          />
        }
      >
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
            `}
          />
        }
      />

      {/* BADGES */}
      <DocsComponent
        title="Badges"
        description="Indicadores visuais utilizados para destacar notificações, estados ou quantidades associadas às abas, com controle de posicionamento por meio de 'badgePosition'."
        preview={
          <div className="space-y-5">
            {/* BADGE POSITION DEFAULT (END) */}
            <Tabs defaultValue="inbox">
              <TabsList>
                <TabsTrigger value="inbox" badgeContent="12">
                  Caixa de entrada
                </TabsTrigger>

                <TabsTrigger value="documents" badgeContent="6">
                  Arquivados
                </TabsTrigger>

                <TabsTrigger value="trash" badgeContent="CHEIO">
                  Lixeira
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* BADGE POSITION START */}
            <Tabs defaultValue="inbox">
              <TabsList>
                <TabsTrigger
                  value="inbox"
                  badgeContent="12"
                  badgePosition="start"
                >
                  Caixa de entrada
                </TabsTrigger>

                <TabsTrigger
                  value="documents"
                  badgeContent="6"
                  badgePosition="start"
                >
                  Arquivados
                </TabsTrigger>

                <TabsTrigger
                  value="trash"
                  badgeContent="CHEIO"
                  badgePosition="start"
                >
                  Lixeira
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={
          <CodeBlock
            code={`
<div className="space-y-5">
  {/* BADGE POSITION DEFAULT (END) */}
  <Tabs defaultValue="inbox">
    <TabsList>
      <TabsTrigger value="inbox" badgeContent="12">
        Caixa de entrada
      </TabsTrigger>

      <TabsTrigger value="documents" badgeContent="6">
        Arquivados
      </TabsTrigger>

      <TabsTrigger value="trash" badgeContent="CHEIO">
        Lixeira
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* BADGE POSITION START */}
  <Tabs defaultValue="inbox">
    <TabsList>
      <TabsTrigger
        value="inbox"
        badgeContent="12"
        badgePosition="start"
      >
        Caixa de entrada
      </TabsTrigger>

      <TabsTrigger
        value="documents"
        badgeContent="6"
        badgePosition="start"
      >
        Arquivados
      </TabsTrigger>

      <TabsTrigger
        value="trash"
        badgeContent="CHEIO"
        badgePosition="start"
      >
        Lixeira
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
            `}
          />
        }
      />

      {/* BACKGROUND */}
      <DocsComponent
        title="Background"
        description="Define a exibição do fundo no agrupamento de abas. Por padrão, o fundo é exibido, mas pode ser desativado pela prop 'background'."
        preview={
          <div className="space-y-5">
            {/* DEFAULT */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">Perfil</TabsTrigger>
                <TabsTrigger value="documents">Documentos</TabsTrigger>
                <TabsTrigger value="config">Configurações</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* DEFAULT */}
            <Tabs defaultValue="profile">
              <TabsList background={false}>
                <TabsTrigger value="profile">Perfil</TabsTrigger>
                <TabsTrigger value="documents">Documentos</TabsTrigger>
                <TabsTrigger value="config">Configurações</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={
          <CodeBlock
            code={`
<div className="space-y-5">
  {/* DEFAULT */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile">Perfil</TabsTrigger>
      <TabsTrigger value="documents">Documentos</TabsTrigger>
      <TabsTrigger value="config">Configurações</TabsTrigger>
    </TabsList>
  </Tabs>

  {/* DEFAULT */}
  <Tabs defaultValue="profile">
    <TabsList background={false}>
      <TabsTrigger value="profile">Perfil</TabsTrigger>
      <TabsTrigger value="documents">Documentos</TabsTrigger>
      <TabsTrigger value="config">Configurações</TabsTrigger>
    </TabsList>
  </Tabs>
</div>
                `}
          />
        }
      />

      {/* SIZE */}
      <DocsComponent
        title="Tamanho"
        description="Permite ajustar a escala visual das abas por meio da prop 'size'. O tamanho padrão é 'md', com opções que se adaptam a diferentes densidades e contextos de interface."
        preview={
          <div className="space-y-5">
            {/* XS */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" size="xs">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" size="xs">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" size="xs">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* SM */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" size="sm">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" size="sm">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" size="sm">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* MD */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" size="md">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" size="md">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" size="md">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* LG */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" size="lg">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" size="lg">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" size="lg">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* XL */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" size="xl">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" size="xl">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" size="xl">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={
          <CodeBlock
            code={`
<div className="space-y-5">
  {/* XS */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" size="xs">
        Perfil
      </TabsTrigger>
      <TabsTrigger value="documents" size="xs">
        Documentos
      </TabsTrigger>
      <TabsTrigger value="config" size="xs">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* SM */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" size="sm">
        Perfil
      </TabsTrigger>
      <TabsTrigger value="documents" size="sm">
        Documentos
      </TabsTrigger>
      <TabsTrigger value="config" size="sm">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* MD */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" size="md">
        Perfil
      </TabsTrigger>
      <TabsTrigger value="documents" size="md">
        Documentos
      </TabsTrigger>
      <TabsTrigger value="config" size="md">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* LG */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" size="lg">
        Perfil
      </TabsTrigger>
      <TabsTrigger value="documents" size="lg">
        Documentos
      </TabsTrigger>
      <TabsTrigger value="config" size="lg">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* XL */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" size="xl">
        Perfil
      </TabsTrigger>
      <TabsTrigger value="documents" size="xl">
        Documentos
      </TabsTrigger>
      <TabsTrigger value="config" size="xl">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
              `}
          />
        }
      />

      {/* COLORS */}
      <DocsComponent
        title="Cores"
        description="Define o esquema de cores das abas por meio da prop 'color'. É possível utilizar cores semânticas pré-definidas (como primary, success ou danger) ou aplicar estilos personalizados com 'customColor', seja via tokens Tailwind ou valores HEX. Essa abordagem garante consistência visual sem limitar a flexibilidade do design."
        preview={
          <div className="space-y-5">
            {/* PRIMARY */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" color="primary">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" color="primary">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" color="primary">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* SECONDARY */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" color="secondary">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" color="secondary">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" color="secondary">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* SUCCESS */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" color="success">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" color="success">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" color="success">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* WARNING */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" color="warning">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" color="warning">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" color="warning">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* DANGER */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile" color="danger">
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="documents" color="danger">
                  Documentos
                </TabsTrigger>
                <TabsTrigger value="config" color="danger">
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* CUSTOM – HEX */}
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger
                  value="profile"
                  color="custom"
                  customColor="#9106D1"
                >
                  Perfil
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  color="custom"
                  customColor="#9106D1"
                >
                  Documentos
                </TabsTrigger>
                <TabsTrigger
                  value="config"
                  color="custom"
                  customColor="#9106D1"
                >
                  Configurações
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        }
        code={
          <CodeBlock
            code={`
<div className="space-y-5">
  {/* PRIMARY */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" color="primary">
        Perfil
      </TabsTrigger>

      <TabsTrigger value="documents" color="primary">
        Documentos
      </TabsTrigger>

      <TabsTrigger value="config" color="primary">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* SECONDARY */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" color="secondary">
        Perfil
      </TabsTrigger>

      <TabsTrigger value="documents" color="secondary">
        Documentos
      </TabsTrigger>

      <TabsTrigger value="config" color="secondary">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* SUCCESS */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" color="success">
        Perfil
      </TabsTrigger>
                  
      <TabsTrigger value="documents" color="success">
        Documentos
      </TabsTrigger>

      <TabsTrigger value="config" color="success">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* WARNING */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" color="warning">
        Perfil
      </TabsTrigger>
      <TabsTrigger value="documents" color="warning">
        Documentos
      </TabsTrigger>
      <TabsTrigger value="config" color="warning">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* DANGER */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile" color="danger">
        Perfil
      </TabsTrigger>

      <TabsTrigger value="documents" color="danger">
        Documentos
      </TabsTrigger>

      <TabsTrigger value="config" color="danger">
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>

  {/* CUSTOM – HEX */}
  <Tabs defaultValue="profile">
    <TabsList>
      <TabsTrigger
        value="profile"
        color="custom"
        customColor="#9106D1"
      >
        Perfil
      </TabsTrigger>

      <TabsTrigger
        value="documents"
        color="custom"
        customColor="#9106D1"
      >
        Documentos
      </TabsTrigger>

      <TabsTrigger
        value="config"
        color="custom"
        customColor="#9106D1"
      >
        Configurações
      </TabsTrigger>
    </TabsList>
  </Tabs>
</div>
            `}
          />
        }
      />

      {/* DISABLED */}
      <DocsComponent
        title="Estado desabilitado"
        description="Indica abas indisponíveis para interação, aplicando um estado visual e comportamental apropriado por meio da prop 'isDisabled'."
        preview={
          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">Perfil</TabsTrigger>
              <TabsTrigger value="documents" isDisabled>
                Documentos
              </TabsTrigger>
              <TabsTrigger value="config" isDisabled>
                Configurações
              </TabsTrigger>
            </TabsList>
          </Tabs>
        }
        code={
          <CodeBlock
            code={`
<Tabs defaultValue="profile">
  <TabsList>
    <TabsTrigger value="profile">Perfil</TabsTrigger>
    <TabsTrigger value="documents" isDisabled>Documentos</TabsTrigger>
    <TabsTrigger value="config" isDisabled>Configurações</TabsTrigger>
  </TabsList>
</Tabs>
                `}
          />
        }
      />

      {/* LOADING */}
      <DocsComponent
        title="Estado de carregamento"
        description="Representa abas em processamento assíncrono. Ao usar a prop 'isLoading', a interação é bloqueada temporariamente e um indicador visual de carregamento é exibido."
        preview={
          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">Perfil</TabsTrigger>
              <TabsTrigger value="documents" isLoading>
                Documentos
              </TabsTrigger>
              <TabsTrigger value="config">Configurações</TabsTrigger>
            </TabsList>
          </Tabs>
        }
        code={
          <CodeBlock
            code={`
<Tabs defaultValue="profile">
  <TabsList>
    <TabsTrigger value="profile">Perfil</TabsTrigger>
    <TabsTrigger value="documents" isLoading>Documentos</TabsTrigger>
    <TabsTrigger value="config">Configurações</TabsTrigger>
  </TabsList>
</Tabs>
                `}
          />
        }
      />

      <Separator label={<span className="px-2">Props</span>} gradient />

      <DocsComponent
        title="Props — Tabs"
        description="Propriedades disponíveis para o componente raiz Tabs."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3">Prop</th>
                  <th className="text-left py-2 px-3">Tipo</th>
                  <th className="text-left py-2 px-3">Default</th>
                  <th className="text-left py-2 px-3">Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">defaultValue</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Define a aba ativa inicial quando usado de forma não
                    controlada.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">value</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Controla manualmente a aba ativa.
                  </td>
                </tr>

                <tr>
                  <td className="px-3 py-2 font-mono">onTabChange</td>
                  <td className="px-3 py-2 font-mono">
                    (value: string) =&gt; void
                  </td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Callback disparado sempre que a aba ativa muda.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsComponent
        title="Props — TabsList"
        description="Configura o container que agrupa os gatilhos das abas."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3">Prop</th>
                  <th className="text-left py-2 px-3">Tipo</th>
                  <th className="text-left py-2 px-3">Opções</th>
                  <th className="text-left py-2 px-3">Default</th>
                  <th className="text-left py-2 px-3">Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 font-mono">background</td>
                  <td className="px-3 py-2 font-mono">boolean</td>
                  <td className="px-3 py-2 font-mono">true | false</td>
                  <td className="px-3 py-2">true</td>
                  <td className="px-3 py-2">
                    Controla a exibição do fundo que envolve as abas.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

      <DocsComponent
        title="Props — TabsTrigger"
        description="Propriedades responsáveis pela aparência, comportamento e estados das abas."
        preview={
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3">Prop</th>
                  <th className="text-left py-2 px-3">Tipo</th>
                  <th className="text-left py-2 px-3">Opções</th>
                  <th className="text-left py-2 px-3">Default</th>
                  <th className="text-left py-2 px-3">Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">variant</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2 font-mono">
                    default | ghost | bordered | underline
                  </td>
                  <td className="px-3 py-2">default</td>
                  <td className="px-3 py-2">Define o estilo visual da aba.</td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">size</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2 font-mono">
                    xs | sm | md | lg | xl
                  </td>
                  <td className="px-3 py-2">md</td>
                  <td className="px-3 py-2">
                    Controla o tamanho e densidade visual da aba.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">color</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2 font-mono">
                    primary | secondary | success | danger | custom
                  </td>
                  <td className="px-3 py-2">primary</td>
                  <td className="px-3 py-2">
                    Define o esquema de cores do estado ativo.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">customColor</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2 font-mono">HEX</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Cor personalizada usada quando <code>color="custom"</code>.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">startContent</td>
                  <td className="px-3 py-2 font-mono">ReactNode</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Elemento exibido antes do texto (ícones, avatares).
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">endContent</td>
                  <td className="px-3 py-2 font-mono">ReactNode</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">Elemento exibido após o texto.</td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">badgeContent</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">
                    Exibe um badge informativo junto à aba.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">badgePosition</td>
                  <td className="px-3 py-2 font-mono">string</td>
                  <td className="px-3 py-2 font-mono">start | end</td>
                  <td className="px-3 py-2">end</td>
                  <td className="px-3 py-2">
                    Define a posição do badge em relação ao texto.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-3 py-2 font-mono">isDisabled</td>
                  <td className="px-3 py-2 font-mono">boolean</td>
                  <td className="px-3 py-2 font-mono">true | false</td>
                  <td className="px-3 py-2">false</td>
                  <td className="px-3 py-2">Desabilita a interação da aba.</td>
                </tr>

                <tr>
                  <td className="px-3 py-2 font-mono">isLoading</td>
                  <td className="px-3 py-2 font-mono">boolean</td>
                  <td className="px-3 py-2 font-mono">true | false</td>
                  <td className="px-3 py-2">false</td>
                  <td className="px-3 py-2">
                    Exibe um estado de carregamento e bloqueia interação.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </main>
  );
}
