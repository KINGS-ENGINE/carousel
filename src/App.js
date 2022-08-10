import "./styles.css";
import Carousel from "./components/Carousel";
import { image } from "./components/source";

export default function App() {
  return (
    <div className="App">
      <Carousel slide={image} />
    </div>
  );
}
