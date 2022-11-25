import bus_icon from "./assets/icons/about_banner/bus_icon.svg";
import economy_icon from "./assets/icons/about_banner/economy_icon.svg";
import stock_icon from "./assets/icons/about_banner/stock_icon.svg";
import layers_icon from "./assets/icons/about_banner/layers_icon.svg";

export const titleArray = [
    {id: 1, title: 'Популярные товары'},
    {id: 2, title: 'Почему именно мы?'},
    {id: 3, title: 'Новинки'},
    {id: 4, title: 'Свяжитесь с нами'}
]

export const bannerElement = [
    {
        id: 1,
        icon_url: bus_icon,
        title: 'Самая быстрая доставка',
        body: 'Доставка в любую точку Москвы, Московской области и в регионы РФ. Получите заказ можно и самостоятельно на ближайшем к вам складе'
    },
    {
        id: 2,
        icon_url: economy_icon,
        title: 'Мы экономим ваши деньги',
        body: 'Доставка в любую точку Москвы, Московской области и в регионы РФ. Получите заказ можно и самостоятельно на ближайшем к вам складе'
    },
    {
        id: 3,
        icon_url: stock_icon,
        title: 'Скидки и акции',
        body: 'Доставка в любую точку Москвы, Московской области и в регионы РФ. Получите заказ можно и самостоятельно на ближайшем к вам складе'
    },
    {
        id: 4,
        icon_url: layers_icon,
        title: 'Ответственный подход к сборке заказа',
        body: 'Доставка в любую точку Москвы, Московской области и в регионы РФ. Получите заказ можно и самостоятельно на ближайшем к вам складе'
    }
]

export const deliveryData = [
    {
        id: 1,
        title: 'Адресная доставка по Москве и Санкт-Петербургу зависит от суммы заказа в интернет-магазине "Grundshop":',
        sub_body: '< 25.000 рублей - 500 рублей. > 25.000 рублей - БЕСПЛАТНО!'
    },
    {
        id: 2,
        title: 'Доставка за МКАД',
        body: 'Доставка за пределы МКАД рассчитывается согласно тарифу.',
        sub_body: '25 руб./км'
    },
    {
        id: 3,
        title: 'Забрать заказ можно самостоятельно',
        body: 'Забрать заказ можно самостоятельно из пунктов выдачи, расположенных в пределах Москвы и Санкт-Петербурга. Если Вы выбираете самовывоз, предупредите об этом менеджера и на Вашу e-mail отправят накладную, распечатав которую Вы сможете получить свой заказ.'
    },
    {
        id: 4,
        title: 'Доставка товаров транспортной компанией по России.',
        body: ' Мы сотрудничаем с известными транспортными компаниями, осуществляющими доставку грузов по всем городам России. Вы можете самостоятельно выбрать компанию, которой доверите транспортировку заказа, а мы осуществим отправку. Стоимость услуги зависит от тарифов грузоперевозчика. Ответственность за сохранность посылки несет перевозчик.'
    }
]

export const footerPhones = [
    {id: 1, title: 'Отдел продаж Москва', phone: '8 (499) 460-67-61'},
    {id: 2, title: 'Отдел продаж Санкт-Петербург', phone: '8 (812) 748-22-35'},
    {id: 3, title: 'Сервисный центр', phone: '8 (499) 288-74-79'}
]

export const categoriesList = [
    {id: 1, title: 'Все товары', catId: 29},
    {id: 2, title: 'Циркуляционные', catId: 16},
    {id: 3, title: 'Cкважинные насосы', catId: 20},
    {id: 4, title: 'Канализационные установки', catId: 19},
    {id: 5, title: 'Насосные станции', catId: 23},
    {id: 6, title: 'Промышленные', catId: 26},
    {id: 7, title: 'Дренажные', catId: 17},
    {id: 8, title: 'Комплектующие', catId: 24}
]