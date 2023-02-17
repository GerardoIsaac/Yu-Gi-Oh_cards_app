import { useSelector } from 'react-redux';

const CardsList = ({ currentCards }) => {
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

  // Cuando se cargue la info, renderizamos una lista de cartas
  return (
    <div
      className='container-fluid'
      style={{ maxWidth: '75vw', minWidth: '23rem' }}
    >
      <ul className='list-group list-group-flush'>
        {currentCards.map(
          ({ id, name, card_images: img, type, card_prices: price }) => (
            <li key={id} className='list-group-item mb-1 rounded'>
              <div className='row g-0'>
                <div className='col-2 md-col-1'>
                  <img src={img[0].image_url_small} alt={name} width={50} />
                </div>

                <div className='col-8 md-col-10'>
                  <h4>{name}</h4>
                  <p className='text-muted'>{type}</p>
                </div>

                <div className='col-2 md-col-1'>
                  <span className='fs-5'>
                    price: ${price[0].tcgplayer_price}
                  </span>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CardsList;
