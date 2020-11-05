import React, { createContext, useState, useEffect} from "react";

export const dataContext = createContext();

const DataContextProvider = (props) => {
    const [data, setData] = useState(null);
    const[color, setColor] = useState(null);
    const [opacity, setOpacity] = useState(null);
    const [ isRotated, setIsRotated] = useState(false);
  

    useEffect(() => {
        fetch("http://localhost:1234/data/home.json")
        .then((response) => response.json())
        .then((result) => setData(result))
    }, []);

    return ( 
        <dataContext.Provider value= {{data, color, setColor, opacity, setOpacity,isRotated, setIsRotated }}>
{props.children}
        </dataContext.Provider>
    );
}
 
export default DataContextProvider;