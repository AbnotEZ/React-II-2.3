import { useState ,  useEffect } from "react";
import MyContext from "./MyContext";

const MyContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
  
    const url = "https://pokeapi.co/api/v2/pokemon/";
    
    const getData = async () => {
      const data = await fetch(url)
      const result = await data.json()
      const filtrado = result.slice(0,8);
      setData(filtrado)
    }
  
    useEffect(() => {
      getData()
    }, []);
  
  
    return (
      <MyContext.Provider value={{ data, setData }}>
        {children}
      </MyContext.Provider>
    );
  };
  export default MyContextProvider;