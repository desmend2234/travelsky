import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'
import { currencyTwd } from '../../utils/helper'
import { Rating, Popover } from 'flowbite-react'
import { reviews } from './reviews'
import { delay, motion } from 'framer-motion'

function MenuItem({ item }) {
    const [reviewer] = reviews.filter(
        (review) => review.location === item.title
    )
    const variants = {
        initial: {
            y: '-50%',
            opacity: 0,
        },
        initial2: {
            x: '50%',
            opacity: 0,
        },
        initial3: {
            y: '50%',
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
            },
        },
        animate2: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 1.2,
            },
        },
        animate3: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 1.5,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 1.5,
                repeat: Infinity,
            },
        },
        onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
                duration: 0.8,
                delay: 1,
            },
        },
    }

    return (
        <motion.div
            variants={variants}
            whileHover={{ scale: 1.05 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
            }}
            className="my-10 rounded-lg bg-stone-50 shadow-md"
        >
            <LazyLoad>
                <img className="object-cover" src={item.imageUrl} />
            </LazyLoad>
            <div className="px-5 py-2">
                <Link to={`/menu/productDetail/${item.id}`}>
                    <div className="text-3xl font-semibold tracking-tight text-stone-700 hover:underline ">
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
                        <Popover
                            aria-labelledby="profile-popover"
                            content={
                                <div className="w-64 p-3">
                                    <div className="mb-2 flex items-center justify-between">
                                        <a href="#">
                                            <img
                                                className="object-fit w-10 rounded-full"
                                                src={reviewer.img}
                                            />
                                        </a>
                                    </div>
                                    <p
                                        id="profile-popover"
                                        className="text-base font-semibold leading-none text-gray-900 dark:text-white"
                                    >
                                        <a href="#">{reviewer.name}</a>
                                    </p>
                                    <p className="mb-3 text-sm font-normal">
                                        {reviewer.from}
                                    </p>
                                    <p className="mb-4 text-sm">
                                        {reviewer.description}
                                    </p>
                                    <ul className="flex text-sm">
                                        <li className="me-2">
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                {reviewer.following}
                                            </span>
                                            <span> Following</span>
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900 ">
                                                {reviewer.followers}
                                            </span>
                                            <span> Followers</span>
                                        </li>
                                    </ul>
                                </div>
                            }
                        >
                            <button
                                type="button"
                                className="text-sm font-medium text-gray-900 underline hover:text-sky-700"
                            >
                                {item.origin_price} 評論
                            </button>
                        </Popover>
                    </Rating>
                    <span className=" flex rounded-xl bg-sky-500  px-6 py-1 text-sm text-white">
                        {item.category}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-600 ">
                        {currencyTwd(item.price)}
                    </span>
                    <Link
                        to={`/menu/productDetail/${item.id}`}
                        className="w-[7rem] rounded-lg bg-blue-700 px-2 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        了解更多
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default MenuItem
