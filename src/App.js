import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Navbar/>
          <Content/>
          <Footer/>
      
      </header>
    </div>
  );
}

export default App;
