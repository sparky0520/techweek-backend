import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleRedirect = () => {
    if (name) navigate("/weather", { state: { name } }); // Redirect to the About page
  };

  return (
    <div>
      <h1>Enter your name</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleRedirect}>Submit</button>
    </div>
  );
}

export default Form;
