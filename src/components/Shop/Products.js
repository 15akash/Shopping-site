import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_data = [
  {
    id: 1,
    price: 250,
    title: "My first book",
    description: "The first book I have ever written",
  },
  {
    id: 2,
    price: 299,
    title: "My second book",
    description: "The second book I have ever written",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_data.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
