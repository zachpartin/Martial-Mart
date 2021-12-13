

const Products = ({products}) => {
  
  return (
    <div>
      <h1>For Sale</h1>
      {products.map((product) => (
       <h1>{product.name}</h1>
      ))}
    </div>
  )
}

export default Products;