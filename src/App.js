import React from 'react';
import { render } from "react-dom";
import Container from './components/Container';
import DataContextProvider from './contexts/DataContext';


const App = () => {
    return ( 
        <>
        <DataContextProvider >
        <Container />
        </DataContextProvider>
        </>
     );
};
 
render(<App />, document.querySelector("#root"));


