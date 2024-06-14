import axios from 'axios'
import toast from 'react-hot-toast'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
const apiPath = import.meta.env.VITE_REACT_APP_API_PATH
export async function getAllProduct() {
    try {
        const res = await axios.get(
            `${apiBaseUrl}/v2/api/${apiPath}/products/all`
        )
       
        return res.data.products
    } catch (error) {
        console.log(error)
    }
}

export async function getProduct(page = 1) {
    try {
        const res = await axios.get(
            `${apiBaseUrl}/v2/api/${apiPath}/products?page=${page}`
        )
        console.log(res)
        let data = res.data.products
        let pages = res.data.pagination

        return data, pages
        // dispatch({ type: 'GET_PRODUCTS', payload: res.data.products })
        // console.log(res.data.products)
        // dispatch({ type: 'GET_PAGE', payload: res.data.pagination })
    } catch (error) {
        console.log(error)
    }
}

export const getProductItem = async (id) => {
    try {
        const res = await axios.get(
            `${apiBaseUrl}/v2/api/${apiPath}/product/${id}`
        )
        return res.data.product
    } catch (error) {
        console.log(error)
    }
}

export const getCartData = async () => {
    try {
        const res = await axios.get(`${apiBaseUrl}/v2/api/${apiPath}/cart`)
        return res.data.data
    } catch (error) {
        console.log(error)
    }
}
// export const addCart = async () => {
//     try {
//         const res = await axios.post(`/v2/api/${API_URL}/cart`, {
//             data: {
//                 product_id: productItem.id,
//                 qty: cartQuantity,
//             },
//         })
//         dispatch({ type: 'ADD_TO_CART', payload: [res.data.data.product] })
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const removeCartItem = async (id) => {
//     try {
//         const res = await axios.delete(
//             `${apiBaseUrl}/v2/api/${apiPath}/cart/${id}`
//         )
//         getCart()
//     } catch (error) {
//         console.log(error)
//     }
// }

export const checkOutOrder = async (orderId) => {
    try {
        const res = await axios.get(
            `${apiBaseUrl}/v2/api/${apiPath}/order/${orderId}`
        )
        // getCart()
        return res.data.order
    } catch (error) {
        console.log(error)
    }
}

export const onSubmit = async (form) => {
    try {
        const res = await axios.post(
            `${apiBaseUrl}/v2/api/${apiPath}/order`,
            form
        )
        if (!res.data.success) {
            throw new Error('Failed to submit order')
        }
        return res.data
    } catch (error) {
        console.error('Error submitting order:', error)
    }
}

export async function handleCategory(allCategory) {
    try {
        // 將種類回傳成陣列
        let unSortProduct = allCategory?.map((item) => {
            return item.category
        })
        // 篩選出不重複的種類
        let sorted = unSortProduct?.filter((item, i) => {
            return unSortProduct.indexOf(item) === i
        })
        return sorted
    } catch (error) {
        console.log(error)
    }
}

export const updateCartItem = async (item, newQty) => {
    console.log(item, newQty)
    const data = {
        data: { product_id: item?.product_id, qty: newQty },
    }
    try {
        const res = await axios.put(
            `${apiBaseUrl}/v2/api/${apiPath}/cart/${item.id}`,
            data
        )
        getCartData()
        return res?.data?.data?.qty
    } catch (error) {
        console.log(error)
    }
}
export const removeCartItem = async (id) => {
    console.log(id)
    try {
        const res = await axios.delete(
            `${apiBaseUrl}/v2/api/${apiPath}/cart/${id}`
        )
        // getCartData()
        toast.success('Successfully delete item')
        getCartData()

        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const removeAllCartItem = async () => {
    try {
        const res = await axios.delete(`${apiBaseUrl}/v2/api/${apiPath}/carts`)
        toast.success('Successfully delete all item')
        getCartData()
    } catch (error) {
        console.log(error)
    }
}
