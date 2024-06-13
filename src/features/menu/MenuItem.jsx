import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'
import { currencyTwd } from '../../utils/helper'
import { Rating } from 'flowbite-react'

function MenuItem({ item }) {
    console.log(item);
    
    return (
        <div className="my-5 rounded-lg bg-stone-50">
            <Link to={`/menu/productDetail/${item.id}`}>
                <LazyLoad>
                    <img
                        className="object-cover"
                        src={item.imageUrl}
                        alt="product image"
                    />
                </LazyLoad>
                <div className="px-5 py-2">
                    <Link to={`/menu/productDetail/${item.id}`}>
                        <div className="text-3xl font-semibold tracking-tight text-gray-900 hover:underline ">
                            {item.title}
                        </div>
                    </Link>
                    <div className="mb-5 mt-2.5 flex items-center justify-between ">
                        <Rating>
                            <Rating.Star />
                            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                                4.95
                            </p>
                            <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                            <Link
                                to='#'
                                className="text-sm font-medium text-gray-900  dark:text-white"
                            >
                                {item.origin_price} 評論
                            </Link>
                        </Rating>
                        <span className=" flex rounded-xl bg-orange-300  px-6 py-1 text-sm text-stone-700">
                            {item.category}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-slate-600 ">
                            {currencyTwd(item.price)}
                        </span>
                        <Link
                            to={`/menu/productDetail/${item.id}`}
                            className="rounded-lg bg-blue-700 px-2 w-[7rem] py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            了解更多
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuItem
