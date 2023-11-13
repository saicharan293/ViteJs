import { useRef, useState } from "react";
import FirstComponent from "./components/FirstComponent";

const App = () => {
  
  const inputref= useRef(null)
  const [x, setx] = useState([])
  return (
    <div>
      <input type="text" ref={inputref} />
      <button onClick={()=>{setx([...x,inputref.current.value])}}> submit</button>
    {x.map((data,i)=>{return <h2 key={i}>{data}</h2>})}
      
    </div>
  )
}

export default App
