// import Weather from "./Weather.jsx"

// function App() {

//   return (
//     <>
//      <Weather></Weather>
//     </>
//   )
// }

// export default App
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Weather from "./Weather";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
