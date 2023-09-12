import PropTypes from 'prop-types';

const ProductPage = ({ products }) => {
  return (
    <div>
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductPage;
