import React, {useEffect, useState} from 'react';
import classes from './Test.module.css'
import CatalogAside from "../../CatalogAside/CatalogAside";
import CatalogItemsLoop from "../../ProductCatalog/CatalogItemsLoop/CatalogItemsLoop";

const Test = () => {
    const [name, setName] = useState({
        id: 15,
        name: 'Радиатор',
        price: 16500
    });
    useEffect(()=> {
        localStorage.setItem('name', JSON.stringify(name))
    }, [name])

    console.log(localStorage.getItem('name'))
    return (
        <div>
            <h1>localStorage with React hooks</h1>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    aria-label="fullname"
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Test;