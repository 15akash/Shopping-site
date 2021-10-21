import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App(props) {
  // const [productList, setProductList] = useState([]);

  // const onAddProductHandler = (uTitle, uPrice, uDescription) => {
  //   setProductList((prevLists) => {
  //     return [
  //       ...prevLists,
  //       { title: uTitle, price: uPrice, description: uDescription },
  //     ];
  //   });
  // };

  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
