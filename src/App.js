import "./styles/index.css";
import svgImage from "./assets/online-community-icon.svg";

function App() {
  return (
    <>
      <img
        className="tech-logos"
        width={200}
        src="https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif"
        alt="React Logo"
      />
      <img className="tech-logos" width={200} src={svgImage} alt="React Logo" />
      <img
        className="tech-logos"
        width={200}
        src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png"
        alt="Webpack Logo"
      />
      <br />
      <br />
      <span>Welcome to React Application</span>
    </>
  );
}

export default App;
