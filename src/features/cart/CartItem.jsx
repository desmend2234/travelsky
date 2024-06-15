import { currencyTwd } from '../../utils/helper.jsx'
import DeleteItem from './DeleteItem.jsx'
import UpdateItemQuantity from './UpdateItemQuantity.jsx'
import { Link, useOutletContext } from 'react-router-dom'
import { Rating } from 'flowbite-react'
import { useState } from 'react'
import axios from 'axios'
import Button from '../../ui/Button.jsx'

function CartItem({ item }) {
    const { price } = item.product
    const {  qty } = item
    const [cartQuantity, setCartQuantity] = useState()
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
    const apiPath = import.meta.env.VITE_REACT_APP_API_PATH
    const { getCartData } = useOutletContext()

    const updateCartItem = async (item, quantity) => {
        try {
            const res = await axios.put(
                `${apiBaseUrl}/v2/api/${apiPath}/cart/${item.id}`,
                {
                    data: {
                        product_id: item.product_id,
                        qty: quantity,
                    },
                }
            )
            console.log(res)
            getCartData()
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="py-3 sm:mx-auto md:mx-20 lg:mx-44 xl:mx-96 ">
            <div
                className="relative flex justify-items-stretch rounded-md border border-stone-200 bg-slate-100 p-4"
                key={item.id}
            >
                <img
                    src={item.product.imageUrl}
                    className="w-1/4 rounded-md object-cover"
                />
                <div className="absolute right-6 top-2 ">
                    <DeleteItem item={item} type="cart" />
                </div>
                <div className="flex w-full flex-col justify-between">
                    <h5 className="px-6 font-semibold text-stone-600 sm:text-base md:text-2xl">
                        {item.product.title}
                    </h5>

                    <div className="px-4">
                        <Rating>
                            <Rating.Star />
                            <p className="mx-1 py-1 text-base font-bold text-gray-700 dark:text-white">
                                4.95
                            </p>
                            <Link className="text-base font-medium text-gray-700 underline hover:no-underline dark:text-white">
                                {item.product.origin_price} reviews
                            </Link>
                        </Rating>
                    </div>
                    <div className="grid w-full grid-flow-col grid-cols-2 grid-rows-1 items-center ">
                        <div className="mx-6 flex items-center gap-4 text-base md:gap-5">
                            <select
                                className="form-select px-2 py-0"
                                value={item.qty}
                                onChange={(e) =>
                                    updateCartItem(item, +e.target.value)
                                }
                                // disabled={isLoadingItem.includes(item.id)}
                            >
                                {[...new Array(20)].map((i, num) => {
                                    return <option key={num}>{num + 1}</option>
                                })}
                            </select>
                        </div>

                        <div className="grid justify-items-end font-semibold sm:justify-end sm:px-2 sm:text-base md:px-6 md:text-xl">
                            {currencyTwd(price * qty)}
                        </div>
                    </div>
                </div>
            </div>{' '}
        </div>
    )
}

export default CartItem
