import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Soon from './pages/Soon.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="soon" element={<Soon />} />
        <Route path=":category" element={<CategoryPage />} />
        <Route path=":category/:slug" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
