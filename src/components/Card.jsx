/**
 * Este componente muestra una vista idividual de cada carta.
 * Incluye el nombre, una descripción, la imagen, el tipo de carta, y el precio de cada carta.
 */

const Card = ({ name, img, desc, price, type }) => {
  return (
    <div className='card mx-auto'>
      <img src={img} alt={name} className='card-img-top card-img' />
      <div className='card-body'>
        <h4 className='card-title'>{name}</h4>
        <p className='card-subtitle text-muted fw-bold text-end my-2'>{type}</p>
        <div className='card-description'>
          <p className='card-text'>{desc}</p>
        </div>
      </div>
      <div className='card-footer'>
        <span className='fs-5'>Price: ${price}</span>
        <a href='#' className='float-end btn btn-primary'>
          Buy on Amazon
        </a>
      </div>
    </div>
  );
};

export default Card;
