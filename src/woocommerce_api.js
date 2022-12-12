import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const baseUrl = 'https://mybackend.rusgetter.store/wp-json/wc/v3';
export const oldBaseUrl = 'https://mybackend.rusgetter.store/wp-json/wc/v2';
export const consumerKey = "ck_cefbcaa40e47276dc6064169c20751350a5365d3";
export const consumerSecret = "cs_bd901cab6cdfd1bf119befce7fdd291bcdd352d2";

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