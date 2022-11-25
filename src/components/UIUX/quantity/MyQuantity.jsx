import React, {useState} from 'react';
import classes from './MyQuantity.module.css'

const MyQuantity = ({getQuantity}) => {
    const [counter, setCounter] = useState(1)
    getQuantity(counter)
    return (
        <div className={classes.mainMyQuantityBlock}>
            <button
                className={
                    counter > 1
                        ? `${classes.myQuantitySingleBlock}`
                        : `${classes.myQuantitySingleBlock} ${classes.disable}`
                }
                onClick={() => setCounter(counter - 1)}
                disabled={counter <= 1}
            >-
            </button>
            <div className={`${classes.myQuantitySingleBlock}`}>{counter}</div>
            <button
                className={`${classes.myQuantitySingleBlock}`}
                onClick={() => setCounter(counter + 1)}
            >+
            </button>
        </div>
    );
};

export default MyQuantity;