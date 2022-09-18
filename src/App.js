import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "keen-slider/keen-slider.min.css";
import Slider from "./components/Slider";
import Button from "react-bootstrap/Button";
import NavBar from "./components/NavBar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row middle">
          <div className="header col-12">
            <h1>Don't Miss This Race!</h1>
          </div>
          <div className="col-12 button">
            <Button>Sign Up</Button>
          </div>
          <div className="card-container">
            <div className="card-row">
              <div className="col-4">
                <Card />
              </div>
              <div className="col-4">
                <Card />
              </div>
              <div className="col-4">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom position-absolute top-100 start-50 translate-middle">
        <Slider />
      </div>
    </>
  );
}

export default App;
