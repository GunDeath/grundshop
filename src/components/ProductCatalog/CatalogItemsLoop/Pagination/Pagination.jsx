import React from 'react';
import classes from "./Pagination.module.css";

const Pagination = (props) => {
    const pageNumbers = [...Array(props.nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if(props.currentPage !== props.nPages)
            props.setCurrentPage(props.currentPage + 1)
    }
    const prevPage = () => {
        if(props.currentPage !== 1)
            props.setCurrentPage(props.currentPage - 1)
    }
    return (
        <ul className={classes.paginationMainStyles}>
            <li>
                <p onClick={prevPage}>Назад</p>
            </li>
            {pageNumbers.map(pgNumber => (
                <li key={pgNumber}>
                    <p
                        onClick={()=>props.setCurrentPage(pgNumber)}
                        className={
                            pgNumber === props.currentPage
                                ? classes.activePage
                                : classes.singlePage
                        }
                    >
                        {pgNumber}
                    </p>
                </li>
            ))}
            <li>
                <p onClick={nextPage}>Далле</p>
            </li>
        </ul>
    );
};

export default Pagination;