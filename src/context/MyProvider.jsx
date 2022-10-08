import { useState ,  useEffect } from "react";
import MyContextApi from "./MyContextApi";
const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const url = "https://digimon-api.herokuapp.com/api/digimon";
  
  const getData = async () => {
    const data = await fetch(url)
    const result = await data.json()
   
    setData(result)
  }

  useEffect(() => {
    getData()
  }, []);



  return (
    <MyContextApi.Provider value={{ data, setData }}>
      {children}
    </MyContextApi.Provider>
  );
};
export default MyContextProvider;