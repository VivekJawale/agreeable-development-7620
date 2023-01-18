import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import MainRoutes from './Routes/MainRoutes';
import Footer from './Pages/Footer';
import MainChatbot from "./Components/Chatbot/MainChatbot"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
      <MainChatbot/>
    </div>
  );
}

export default App;
