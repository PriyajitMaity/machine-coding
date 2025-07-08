import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      header: "Heading 01",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quia temporibus eius, perspiciatis, nobis ipsa corrupti aliquam facilis aspernatur repellat accusantium vel nostrum. Cupiditate voluptas numquam fuga iusto voluptates dignissimos",
    },
    {
      header: "Heading 02",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quia temporibus eius, perspiciatis, nobis ipsa corrupti aliquam facilis aspernatur repellat accusantium vel nostrum. Cupiditate voluptas numquam fuga iusto voluptates dignissimos",
    },
    {
      header: "Heading 03",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quia temporibus eius, perspiciatis, nobis ipsa corrupti aliquam facilis aspernatur repellat accusantium vel nostrum. Cupiditate voluptas numquam fuga iusto voluptates dignissimos",
    },
    {
      header: "Heading 04",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quia temporibus eius, perspiciatis, nobis ipsa corrupti aliquam facilis aspernatur repellat accusantium vel nostrum. Cupiditate voluptas numquam fuga iusto voluptates dignissimos",
    },
  ];

  const [activeAcc, setActiveAcc] = useState(null);

  const handleActive = (id, e) => {
    setActiveAcc(activeAcc === id ? null : id);
  };

  return (
    <div className="Accordion">
      <h1>Accordion Code for machine coding</h1>
      <div>
        {data.map((ele, index) => (
          <div className="acc-list" key={index}>
            <button className="acc-btn" onClick={() => handleActive(index)}>
              {ele.header}
            </button>
            {activeAcc === index && (
              <p className="acc-content">{ele.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
