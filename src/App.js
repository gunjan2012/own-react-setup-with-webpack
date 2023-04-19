import "./styles/index.css";
import svgImage from "./assets/online-community-icon.svg";

function App() {
  return (
    <>
      <img
        width={200}
        src="https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif"
        alt="React Logo"
      />
      <img width={200} src={svgImage} alt="React Logo" />
      <img
        width={200}
        src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png"
        alt="Webpack Logo"
      />
      <br />
      <br />
      <button className="btn btn-primary text-center">Welcome</button>
    </>
  );
}

export default App;
