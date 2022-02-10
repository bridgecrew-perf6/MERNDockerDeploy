import { useEffect, useState } from "react";
import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BASE_PROD_URL
    : process.env.REACT_APP_BASE_DEV_URL;

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      {products.map((element) => {
        return (
          <div key={element.id}>
            <h2>{element.productName}</h2>
            <p>{element.price}</p>
            <p>{element.thumbnail}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
