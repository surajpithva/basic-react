import "./style.css";
//named import that's why we use curly brackets
import { Header } from "./components/Header";
import Body from "./components/body";
import { Footer } from "./components/Footer";
//

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;
