

const Products = ({products}) => {
  
  return (
    <div>
      <h1>For Sale</h1>
      {products.map((product) => (
        {product}
      ))}
    </div>
  )
}

export default Products;