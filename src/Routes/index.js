import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import {Home, AddScenerio, AddVehicle, AllScenerios} from '../Pages'
function Roughter(){
    return(
           <>
           <BrowserRouter>
                    <Routes>
                     <Route path='/' Component={Home}/>
                     <Route path='/AddScenerio' Component={AddScenerio}/>
                     <Route path='/AllScenerios' Component={AllScenerios}/>
                     <Route path='/AddVehicle' Component={AddVehicle}/>
                   </Routes>
            
           </BrowserRouter>
           </>
          
    )
}
export default Roughter;