import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import { AppLayout } from "./components/layout/app-layout"
import { CategoryPage } from "./pages/category-page"
import { HomePage } from "./pages/home-page"
import { ItemPage } from "./pages/item-page"
import { NotFoundPage } from "./pages/not-found-page"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/item/:slug" element={<ItemPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
