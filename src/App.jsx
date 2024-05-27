import "./App.css";
import { Global } from "./components/Global/Global";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Global />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
