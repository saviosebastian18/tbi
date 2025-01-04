// import { useState } from 'React'
// import './App.css'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Users from './Users' 
// import CreateUsers from './CreateUsers'
// import UpdateUsers from './UpdateUsers'
// import React from 'React'

// function App() {

//   return (
//     <>
// <BrowserRouter>
// <Routes>
//   <Route path="/" element={<Users />} ></Route>
//   <Route path="/create" element={<CreateUsers />} ></Route>
//   <Route path="/update/:id" element={<UpdateUsers />} ></Route>

// </Routes>

// </BrowserRouter>

      
//     </>
//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // BrowserRouter, Routes, Route from react-router-dom
import Users from './Users'; // Import Users component
import CreateUsers from './CreateUsers'; // Import CreateUsers component
import UpdateUsers from './UpdateUsers'; // Import UpdateUsers component
import './App.css'; // Import your CSS file

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUsers />} />
        <Route path="/update/:id" element={<UpdateUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
