import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <SiteHeader />
          <main className="flex-1 p-6 space-y-4">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Bem-vindo ao painel de controle. Aqui você encontra uma visão geral do sistema.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <p className="text-sm font-medium text-muted-foreground">Tickets Abertos</p>
                <h2 className="text-2xl font-bold">12</h2>
              </div>
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <p className="text-sm font-medium text-muted-foreground">Novas Mensagens</p>
                <h2 className="text-2xl font-bold">37</h2>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
