
import { useState, useRef, useMemo } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameInput = useRef();

  const handleSubmit = () => {
    setProducts((prev) => {
      return [...prev, { name, price: +price }];
    });
    setName("");
    setPrice("");
    nameInput.current.focus();
  };

  const total = useMemo(() =>{
    const result = products.reduce(
     (result, product) => {
      console.log('tính toán lại......')

     return result + product.price},
      0
    );
    return result;
  }, [products]);
  // nếu để Dependencies rỗng thì nó chỉ trả kết quả một lần là kết quả đã tính toán trước đó và không update lại cái mới
  // Dependencies được chuyền vào thay đổi thì tính toán lại không thì không re-render lại

  return (
    <div style={{ padding: 32 }}>
      <input
        ref={nameInput}
        placeholder="Enter name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        placeholder="Enter price..."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;