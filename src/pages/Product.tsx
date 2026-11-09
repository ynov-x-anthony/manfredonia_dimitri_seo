import { Link, useParams } from 'react-router-dom'
import { products } from '../data'
import { useDocumentMeta } from '../useDocumentMeta'

export default function Product() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  useDocumentMeta({
    title: product
      ? `${product.name} pour rouler en ville | CycloShop`
      : 'Produit introuvable | CycloShop',
    description: product?.description ?? 'Ce produit est introuvable.',
  })

  if (!product) {
    return <p className="page">Produit introuvable.</p>
  }

  const similarProducts = products.filter((p) => p.id !== product.id)

  return (
    <div className="page">
      <h1>{product.name}</h1>
      <p className="price">{product.price} €</p>
      <p>{product.description}</p>

      <h2>Produits similaires</h2>
      <ul>
        {similarProducts.map((similarProduct) => (
          <li key={similarProduct.id}>
            <Link to={`/produits/${similarProduct.slug}`}>
              {similarProduct.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
