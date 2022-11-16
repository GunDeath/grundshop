import React from 'react';
import classes from './MyPagination.module.css'

const Pagination = ({nPages, currentPage, setCurrentPage}) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if(currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }
    return (
        <ul className={classes.pagination_main_styles}>
            <li>
                <a href="#" onClick={prevPage}>Назад</a>
            </li>
            {pageNumbers.map(pgNumber => (
                <li key={pgNumber}>
                    <a
                        href="#"
                        onClick={()=>setCurrentPage(pgNumber)}
                        className={
                            pgNumber === currentPage
                                ? classes.active_page
                                : classes.single_page
                        }
                    >
                        {pgNumber}
                    </a>
                </li>
            ))}
            <li>
                <a href="#" onClick={nextPage}>Далле</a>
            </li>
        </ul>
    );
};

export default Pagination;