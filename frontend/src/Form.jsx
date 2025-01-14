import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleRedirect = () => {
    if (name) navigate("/weather", { state: { name } }); // Redirect to the About page
  };

  return (
    <div className="form">
      <h1>Enter your name</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
      />
      <button onClick={handleRedirect} className="input button">
        Submit
      </button>
    </div>
  );
}

export default Form;
