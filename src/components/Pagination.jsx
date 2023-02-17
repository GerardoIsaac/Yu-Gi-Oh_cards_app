const Pagination = ({
  totalCards,
  cardsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [];
  const pagesDisplay = 5;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  // Calculamos el rango de páginas a mostrar
  let startPage = Math.max(1, currentPage - Math.floor(pagesDisplay / 2));
  const endPage = Math.min(totalPages, startPage + pagesDisplay - 1);

  // Nos aseguramos de que el máximo de páginas sea mostrado y vamos cambiando la página inicial según se requiera
  if (endPage - startPage + 1 < pagesDisplay) {
    startPage = endPage - pagesDisplay + 1;
    if (startPage < 1) startPage = 1;
  }

  // Agregamos el número de páginas que mostraremos
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <ul className='pagination justify-content-center'>
      {/* Boton para regresar a la página anterior */}
      <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
        <a
          href='#'
          className='page-link'
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </a>
      </li>

      {/* Botones numerados para seleccionar una página específica */}
      {pages.map((page, index) => (
        <li key={index} className='page-item'>
          <a
            href='#'
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? 'page-link active' : 'page-link'}
          >
            {page}
          </a>
        </li>
      ))}

      {/* Botón para avanzar a la siguiente página */}
      <li
        className={currentPage === endPage ? 'page-item disabled' : 'page-item'}
      >
        <a
          href='#'
          onClick={() => setCurrentPage(currentPage + 1)}
          className='page-link'
        >
          Next
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
