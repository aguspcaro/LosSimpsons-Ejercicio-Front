// componentes
import Home from "./components/Home";
import Landing from "./components/Landing";

import { BrowserRouter, Route } from "react-router-dom";


function App() {

  return (

    <BrowserRouter>
      
      <Route path="/" component={Landing} exact/>

      <Route path="/home" component={Home}/>

    </BrowserRouter>
  );
}

export default App;
