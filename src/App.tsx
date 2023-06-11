import React, {useState,useEffect} from 'react';
import {Button,Table,TableBody,TableHead,TableCell,TableRow,TextField} from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import RecepieAdd from "./Pages/RecepieAdd";
import RecepieList from "./Pages/RecepieList";
import RecepieView from "./Pages/RecepieView";
// import ProductList from './Pages/ProductList';
// import ProductAdd from './Pages/ProductAdd';
// import ProductView from './Pages/ProductView';
function App() {
  
  return (
    <div>
       <Routes>
            {/*<Route path="/" element={<ProductList/>}/>*/}
            {/*<Route path="/add" element={<ProductAdd/>}/>*/}
            {/*<Route path="/product/:productId" element={<ProductView/>}/>*/}

            <Route path="/add" element={<RecepieAdd/>}/>
            <Route path="/" element={<RecepieList/>}/>
           <Route path="recepie/:recepieId" element={<RecepieView/>}/>

        </Routes> 
    </div>
  );
}

export default App;
