import { getAllProducts, getProduct } from "../models/productModel.js";
import { price2Dkk } from "../utils/formatters.js";
import { getProductList } from "../models/productModel.js"
import { createProductPage } from "../views/pages/productView.js"
import { render } from "../utils/dom.js";
import { createProductsPage } from "../views/pages/productsView.js";

/**
 * Henter alle produkter efter kategori slug
 * @param {*} category_slug 
 */
export const productList = async category_slug => {
    const data = await getProductList(category_slug)
    const viewHtml = createProductsPage(data, category_slug)
    render('root', viewHtml, true)
}

/**
 * Henter et produkt ud fra product slug
 * @param {string} product_slug 
 */
export const productDetails = async product_slug => {
    const data = await getProduct(product_slug)

    const formattedData = {
        ...data,
        price: price2Dkk(data.price)
    }

    const viewHtml = createProductPage(formattedData)
    render('root', viewHtml, true)
}

export const getLatestProducts = async () => {
    const data = await getAllProducts()   
    const sorted = [...data].sort((a, b) => a.createdAt - b.createdAt).reverse()
    const sliced = sorted.slice(0,3);

    productsView(sliced, '', 'Sidste nye produkter')
}