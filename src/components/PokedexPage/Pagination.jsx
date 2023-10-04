import '../PokedexPage/styles/Pagination.css'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <nav>
        <ul className="pagination_main">
            {
                pageNumbers.map(number => (
                    <li className="pagination_cuadro" key={number}>
                        <a className="pagination_text" onClick={() => paginate(number)} href="!#">
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination