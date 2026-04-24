import { getAllProducts, getProduct } from "../models/productModel.js";
import { price2Dkk } from "../utils/formatters.js";
import { getProductList } from "../models/productModel.js"
import { productView } from "../views/pages/productView.js"
import { productsView } from "../views/pages/productsView.js"

/**
 * Henter alle produkter efter kategori slug
 * @param {*} category_slug 
 */
export const productListPage = async category_slug => {
    const data = await getProductList(category_slug)
    productsView(data, category_slug)
}

/**
 * Henter et produkt ud fra product slug
 * @param {string} product_slug 
 */
export const productDetailsPage = async product_slug => {
    const data = await getProduct(product_slug)

    const formattedData = {
        ...data,
        price: price2Dkk(data.price)
    }

    productView(formattedData)
}

export const getLatestProducts = async () => {
    const data = await getAllProducts()   
    const sorted = [...data].sort((a, b) => a.createdAt - b.createdAt).reverse()
    const sliced = sorted.slice(0,3);

    productsView(sliced, '', 'Sidste nye produkter')
    
    
}