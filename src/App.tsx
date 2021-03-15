import CreatePeople from "./components/CreatePeople";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Wrapper from "./components/Wrapper";


import "./styles/global.css";


function App() {
  return (
    <div className="container">
      <Header/>
      <Wrapper/>
      <Footer/>
      <Modal/>
    </div>
  );
}

export default App;

