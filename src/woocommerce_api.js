import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
    url: "https://mybackend.rusgetter.store/",
    consumerKey: "ck_cefbcaa40e47276dc6064169c20751350a5365d3",
    consumerSecret: "cs_bd901cab6cdfd1bf119befce7fdd291bcdd352d2",
    version: "wc/v3",
    axiosConfig: {
        headers: {}
    }
});

export const apiAcf = new WooCommerceRestApi({
    url: "https://mybackend.rusgetter.store/",
    consumerKey: "ck_cefbcaa40e47276dc6064169c20751350a5365d3",
    consumerSecret: "cs_bd901cab6cdfd1bf119befce7fdd291bcdd352d2",
    version: "acf/v3",
    axiosConfig: {
        headers: {}
    }
});