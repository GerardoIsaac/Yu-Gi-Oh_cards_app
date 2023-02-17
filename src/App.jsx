import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

/**
 * Este es nuestro componente principal.
 * Renderizamos los componentes para nuestro layout
 */

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
