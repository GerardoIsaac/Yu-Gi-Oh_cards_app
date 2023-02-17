const CardsPerPageSelector = ({ cardsPerPage, setCardsPerPage }) => {
  const options = [10, 20, 30, 40, 50];

  return (
    <>
      <p className='fs-5 text-end'>Cards per page:</p>

      <ul className='pagination justify-content-end '>
        {options.map(option => (
          <li key={option} className='page-item'>
            <button
              onClick={() => setCardsPerPage(option)}
              className={
                cardsPerPage === option ? 'page-link active' : 'page-link'
              }
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardsPerPageSelector;
