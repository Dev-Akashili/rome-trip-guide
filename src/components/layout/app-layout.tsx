import { Outlet } from "react-router-dom"
import { Navbar } from "./navbar"

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <Outlet />
      </main>
      <footer className="border-t px-4 py-5 text-center text-sm text-muted-foreground">
        This belongs to Akashili ·{" "}
        <a
          href="https://akashili.com"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground underline underline-offset-4 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          akashili.com
        </a>
      </footer>
    </div>
  )
}
