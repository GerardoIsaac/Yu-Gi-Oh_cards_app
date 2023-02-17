import { useSelector } from 'react-redux';
import Card from './Card';

const CardsGrid = ({ currentCards }) => {
  // Accedemos al estado del Redux store
  const state = useSelector(state => state.cards);

  // Si el estado se encuentra cargando la información, mostramos un mensaje
  if (state.isLoading) {
    return (
      <div className='container'>
        <p className='fs-1 text-center'>Loading...</p>;
      </div>
    );
  }

  // Cuando se cargue la info, renderizamos una cuadrícula de cartas
  return (
    <div className='container'>
      <div className='row'>
        {currentCards.map(
          ({ id, name, card_images: img, desc, type, card_prices: price }) => (
            <div key={id} className='col-md-6 col-lg-4 col-xl-3 mb-4'>
              <Card
                name={name}
                img={img[0].image_url}
                desc={desc}
                type={type}
                price={price[0].tcgplayer_price}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardsGrid;
