import NavBar from "./components/NavBar";
import ImageCarrosel from "./components/ImageCarrosel";
import ImageRightBO from "./components/ImageRightBO";
import ImageLeftBO from "./components/ImageLeftBO";
import BasicFooter from "./components/BasicFooter";


function App() {
  return (
    <div class="App">
      <NavBar />
      <ImageCarrosel />
      <h1 className="bodyTitle">About Us</h1>
      <ImageRightBO title="Title" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Purus faucibus ornare suspendisse sed. Diam maecenas sed enim ut sem viverra aliquet. Ultrices eros in cursus turpis massa tincidunt dui ut. Faucibus in ornare quam viverra orci. Arcu cursus vitae congue mauris rhoncus aenean vel."/>
      <ImageLeftBO title="Title" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Purus faucibus ornare suspendisse sed. Diam maecenas sed enim ut sem viverra aliquet. Ultrices eros in cursus turpis massa tincidunt dui ut. Faucibus in ornare quam viverra orci. Arcu cursus vitae congue mauris rhoncus aenean vel."/>
      <hr className="lineElem" />
      <BasicFooter />
    </div>
  );
}

export default App;
