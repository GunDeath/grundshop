import React from 'react';
import classes from './MyBuyNow.module.css'
import {api} from "../../../../../woocommerce_api";

const MyBuyNow = ({children}) => {

    const data = {
        payment_method: "cod",
        payment_method_title: "Оплата при доставке",
        set_paid: true,
        billing: {
            first_name: "John",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US",
            email: "john.doe@example.com",
            phone: "(555) 555-5555"
        },
        shipping: {
            first_name: "John",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US"
        },
        line_items: [
            {
                product_id: 576,
                quantity: 2
            }
        ],
        shipping_lines: [
            {
                method_id: "flat_rate",
                method_title: "Flat Rate",
                total: "10.00"
            }
        ]
    };


    const buyNow = (data) => {
        api.post(`orders`, data)
            .then(response => {
                if (response.status === 200) {
                    console.log('good')
                }
            })
            .catch(error => {
            })
    }

    return (
        <button className={classes.muBuyNowButton} onClick={()=>buyNow(data)}>
            {children}
        </button>
    );
};

export default MyBuyNow;