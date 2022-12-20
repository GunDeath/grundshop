import React from 'react';
import classes from './MyOrderContactForm.module.css'
import MyOrderTitle from "../../MyTitles/MyOrderTitle/MyOrderTitle";
import MyFormLabel from "./MyFormLabel/MyFormLabel";
import MyFormInput from "./MyFormInput/MyFormInput";
import MyCheckbox from "../../MyInputs/MyCheckbox/MyCheckbox";

const MyOrderContactForm = ({setOrderObject, orderObject}) => {
    return (
        <div className={classes.myOrderFormLayout}>
            <div className={classes.myOrderFormLayoutTitle}>
                <MyOrderTitle>Данные для доставки</MyOrderTitle>
            </div>
            <MyFormLabel labelText='Имя'>
                <MyFormInput type="text" name='first_name' id='first_name' placeholder='Иван' value={orderObject.name} onChange={(e) => setOrderObject({...orderObject, name: e.target.value})} labeltext='Имя'/>
            </MyFormLabel>
            <MyFormLabel labelText='Телефон'>
                <MyFormInput type="tel" name='phone' id='phone' placeholder='+7 (999) 99-99-999' value={orderObject.phone} onChange={(e) => setOrderObject({...orderObject, phone: e.target.value})}/>
            </MyFormLabel>
            <MyFormLabel labelText='Фамилия'>
                <MyFormInput type="text" name='last_name' id='last_name' placeholder='Иванов' value={orderObject.surname} onChange={(e) => setOrderObject({...orderObject, surname: e.target.value})}/>
            </MyFormLabel>
            <MyFormLabel labelText='Электронная почта'>
                <MyFormInput type="email" name='email' id='email' placeholder='Ваша почта' value={orderObject.email} onChange={(e) => setOrderObject({...orderObject, email: e.target.value})}/>
            </MyFormLabel>
            <MyFormLabel labelText='Отчество'>
                <MyFormInput type="text" name='last_name' id='last_name' placeholder='Иванович' value={orderObject.patronymic} onChange={(e) => setOrderObject({...orderObject, patronymic: e.target.value})}/>
            </MyFormLabel>
            <MyFormLabel labelText='Адрес доставки'>
                <MyFormInput type="text" name='address_1' id='address_1' placeholder='Ваш адрес' value={orderObject.address} onChange={(e) => setOrderObject({...orderObject, address: e.target.value})}/>
            </MyFormLabel>
            <MyCheckbox />
        </div>
    );
};

export default MyOrderContactForm;