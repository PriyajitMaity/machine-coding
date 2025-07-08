import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");
  const [ setAnimate] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [pageItems] = useState(12);

  const lastItemIndex = pageItems * currPage;
  const firstItemIndex = lastItemIndex - pageItems;
  const items = products.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(products.length / pageItems);

  const nextPages = Array.from({ length: 3 }, (_, index) => currPage + index).filter((ele) => ele <= totalPages);
  const prevPages = Array.from({ length: 2 }, (_, index) => currPage - index - 1)
    .reverse()
    .filter((ele) => ele >= 1);
  const pages = [...prevPages, ...nextPages];

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=0");
      const data = await res.json();
      setProducts(data?.products);
    } catch (error) {
      console.error("Data fetching error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setAnimate(true);
  }, [products, text]);

  const params = Object.keys(Object.assign({}, ...products));
  const filter = (data) => {
    return data.filter((ele) => params.some((parameter) => ele[parameter]?.toString().toLowerCase().includes(text)));
  };

  return (
    <>
      <div className="App">
        <h1>Pagination and Search Bar</h1>
        <div>
          <input type="text"
            className="input"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="products-list">
          {filter(items).map((item, index) => (
            <div
              className="card"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
              key={index}
            >
              <div className="head">
                <span>{item.brand}</span>
                <span>{item.category}</span>
              </div>
              <h3>{item.title}</h3>
              <div className="price-rating">
                <span>price: {item.price}</span>
                <span>rating: {item.rating}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          {currPage > 1 && (
            <button className="btn" onClick={() => setCurrPage(currPage - 1)}>
              prev
            </button>
          )}
          {pages.map((ele, index) => (
            <button
              key={index + 1}
              className={`${currPage === ele ? "active btn" : "btn"}`}
              onClick={() => setCurrPage(ele)}
            >
              {ele}
            </button>
          ))}
          {currPage < totalPages && (
            <button className="btn" onClick={() => setCurrPage(currPage + 1)}>
              next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
