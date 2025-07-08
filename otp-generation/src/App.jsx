import { useEffect, useRef, useState } from "react";
import "./App.css";

const totalInputs = 4;
function App() {
  const [list, setList] = useState(new Array(totalInputs).fill(""));
  const refInput =useRef([]);

  const handleOnChange=(value, index) =>{
    if(isNaN(value)) return;
    const newArr =[...list];
    newArr[index] =value.slice(-1);
    setList(newArr);
    if(value.trim()) refInput.current[index+1]?.focus();
  }
  useEffect(() =>{
    refInput.current[0]?.focus();

  }, [])

  const handleMove =(e, index) =>{
    if(e.key ==='Backspace'){
     !e.target.value && refInput.current[index-1]?.focus();
    }
  } 

  return (
    <div className="App">
      <h1>OTP Generator</h1>
      <div>
        {list.map((ele, index) => (
          <input 
            type="text" 
            className="inputs" 
            key={index}
            value={list[index]}
            ref={input =>refInput.current[index] =input}
            onChange={(e) =>handleOnChange(e.target.value, index)}
            onKeyDown={(e) =>handleMove(e, index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
