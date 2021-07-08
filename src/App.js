import "./App.css";
 import { BrowserRouter } from "react-router-dom";  
import Main from "../src/components/Main/Main";
import Header from "../src/components/Header/Header";
function App() {
  return (
    <div className="App">
 
       <BrowserRouter>  
       <Header />
      <Main />

      </BrowserRouter> 
      {/* 

     
      
  </BrowserRouter> */}
    </div>
  );
}

export default App;
