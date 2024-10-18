import "./index.css"
import Home from "./pages/Home ";
import{
  BrowserRouter as Router ,
  Routes,
  Route}
  from "react-router-dom";
import RecipeSearch from "./pages/RecipeSearch";
import Navbar from "./components/Navbar";

function App() {
  return(
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/recipes" element={<RecipeSearch/>} />
      </Routes>
    </Router>
    </>
    
  )
}

export default App;
