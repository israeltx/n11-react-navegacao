import { useNavigate } from "react-router"

export function Home() {
  const navigate = useNavigate()

  function openProducts() {
    navigate('/products')
  }

  return (
    <div>
      <h1>Página Home</h1>

      <nav>
        <a href="/products">Produtos</a>
        <a href="/products?category=tvs">Categoria</a>

        <button type="button" onClick={openProducts}>Ver produtos</button>
      </nav>
    </div>
  )
}