import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../app/slices/cards/cardSlice';

import CardsGrid from './CardsGrid';
import CardsList from './CardsList';
import CardsPerPageSelector from './CardsPerPageSelector';
import Pagination from './Pagination';
import ViewSelector from './ViewSelector';

/**
 * En este componente mostramos el contenido principal de la página
 * Incluimos una cuadricula o lista de cartas, a eleccion del usuario
 * un componente de paginación, y un selector de cuantas cartas se desean
 * ver por página.
 */
const Home = () => {
  // States para obtener la página actual y el número de cartas por página
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(10);

  // State para obtener el modo de visualización
  const [view, setView] = useState('G');

  // Obtenemos el estado de Redux
  const state = useSelector(state => state.cards);
  const dispatch = useDispatch();

  // Hacemos la petición de las cartas al montar el componente
  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  const cards = state.data;

  /**
   * Obtenemos el índice de la primera y última carta a mostrar
   * y calculamos el número de cartas que mostraremos
   */
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = cards.slice(firstCardIndex, lastCardIndex);

  return (
    <div className='home container-fluid py-5'>
      <div className='row pb-4 px-5'>
        <div className='col'>
          <ViewSelector view={view} setView={setView} />
        </div>

        <div className='col'>
          <CardsPerPageSelector
            cardsPerPage={cardsPerPage}
            setCardsPerPage={setCardsPerPage}
          />
        </div>
      </div>

      <div className='row pt-4'>
        {/* Renderizamos el componente de cuadrícula o de lista según la elección del usuario */}
        {view === 'G' ? (
          <CardsGrid currentCards={currentCards} />
        ) : (
          <CardsList currentCards={currentCards} />
        )}
      </div>

      <div className='row pt-4'>
        <Pagination
          totalCards={cards.length}
          cardsPerPage={cardsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Home;
