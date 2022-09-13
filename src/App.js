import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Navbar />
            <div className="pages">
               <Routes>
                  <Route path="/" element={<Home />} />
               </Routes>
            </div>
         </BrowserRouter>
      </div>
   );
}

export default App;
