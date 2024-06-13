
import { currencyTwd } from '../../utils/helper.jsx'
import DeleteItem from './DeleteItem.jsx'
import UpdateItemQuantity from './UpdateItemQuantity.jsx'
import { Link } from 'react-router-dom'
import { Rating } from 'flowbite-react'

function CartItem({ item }) {
    const { price} = item.product
    const {  id, qty } = item
    console.log(item)

    return (
        // <li className="py-3 sm:flex sm:items-center sm:justify-between">
        //     {/* <p className="mb-1 text-xl font-semibold sm:mb-0">
        //         {qty}&times; {title}
        //     </p> */}
        //     <div className="flex items-center justify-between sm:gap-6">
        //         <p className="text-xl font-bold sm:gap-6">
        //             {formatCurrency(price * qty)}
        //         </p>
        //         <UpdateItemQuantity qty={qty} item={item} />
        //         <DeleteItem id={id} />
        //     </div>
        // </li>
        <div className="py-3 sm:mx-auto md:mx-20 lg:mx-44 xl:mx-96 ">
            <div
                className="relative flex justify-items-stretch border border-stone-200 bg-slate-100 p-4"
                key={item.id}
            >
                <img
                    src={item.product.imageUrl}
                    className="w-1/4 rounded-md object-cover"
                    // width="200px"
                    // height="150px"
                />
                <div className="absolute right-6 top-2 ">
                    <DeleteItem id={id} type="cart" />
                </div>
                <div className="flex w-full flex-col justify-between">
                    <h5 className="px-6 font-semibold text-stone-600 sm:text-base md:text-2xl">
                        {item.product.title}
                    </h5>
                    {/* <p className="px-2">
                                            {selectedDate(item.product.id)}
                                        </p> */}
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
                        <div className="grid px-4">
                            <UpdateItemQuantity qty={qty} item={item} />
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
