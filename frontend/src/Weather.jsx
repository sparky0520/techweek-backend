import Search from "./Search.jsx";
// import Card from "./DisplayCard.jsx"
import { useLocation } from "react-router-dom";

export default function Weather() {
  const location = useLocation();
  const { name } = location.state || {};
  return (
    <div>
      <Search name={name}></Search>
    </div>
  );
}
