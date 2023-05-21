import "./styles.css";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
export default function App() {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(debounceValue);
  }, [debounceValue]);
  return (
    <div className="App">
      <h1>Hello There</h1>
      <h2>UseDebounce Implementation</h2>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
