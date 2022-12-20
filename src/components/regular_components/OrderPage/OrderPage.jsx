import React, {useEffect, useState} from 'react';
import classes from './OrderPage.module.css'
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import MyBreadCrumbs from "../../UIUX/NEW_UI/MyBreadCrumbs/MyBreadCrumbs";
import HorizontalProductCard from "../../UIUX/NEW_UI/MyBlocks/HorizontalProductCart/HorizontalProductCard";
import axios from "axios";
import {consumerKey, consumerSecret} from "../../../woocommerce_api";
import MyFormInput from "../../UIUX/NEW_UI/MyForms/MyOrderContactForm/MyFormInput/MyFormInput";
import MyFormLabel from "../../UIUX/NEW_UI/MyForms/MyOrderContactForm/MyFormLabel/MyFormLabel";
import MyOrderTitle from "../../UIUX/NEW_UI/MyTitles/MyOrderTitle/MyOrderTitle";
import MyOrderContactForm from "../../UIUX/NEW_UI/MyForms/MyOrderContactForm/MyOrderContactForm";

const OrderPage = () => {
    const {cart} = useTypedSelector(state => state)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('cod')
    const [products, setProducts] = useState([])

    const [orderObject, setOrderObject] = useState({
        name: '',
        surname: '',
        patronymic: '',
        phone: '',
        email: '',
        address: ''
    })

    useEffect(()=>{
        if(cart.length !== 0){
            cart.map(cartItem => {
                setProducts(oldArray => [...oldArray, {product_id: cartItem.id, quantity: cartItem.quantity}])
            })
        }
    }, [])

    const newOrder = {
        payment_method: paymentMethod,
        shipping: {
            first_name: name + ' ' + patronymic,
            address_1: address,
            last_name: surname,
            country: "RU",
            email: email,
            phone: phone
        },
        line_items: products
    }

    const data = { auth: { "Content-Type": "application/json",  "username": consumerKey,  "password": consumerSecret } }
    const addProductReviews = async (newOrder) => {
        await axios.post(`https://mybackend.rusgetter.store/wp-json/wc/v3/orders`, newOrder, data)
            .then((response) => console.log(response.data))
    }

    return (
        <div className={classes.orderPage}>
            <MyBreadCrumbs url='/order' title='Заказ' />
            {
                cart.map(product => <HorizontalProductCard  product={product} key={product.id}/>)
            }
            <MyOrderContactForm setOrderObject={setOrderObject} orderObject={orderObject}/>
        </div>
    );
};

export default OrderPage;