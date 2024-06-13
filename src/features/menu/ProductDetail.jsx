import axios from 'axios'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { addMonths } from 'date-fns'
import { useState, useLayoutEffect, useEffect } from 'react'
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom'
import { useDispatch,  } from 'react-redux'
import { addItem } from '../cart/cartSlice'
import { getCartData, getProductItem } from '../../services/apiProduct'
import UpdateItemQuantity from '../cart/UpdateItemQuantity'
import DeleteItem from '../cart/DeleteItem'
import { Carousel } from 'flowbite-react'
import { currencyTwd } from '../../utils/helper'
import Button from '../../ui/Button'
import { Breadcrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'
import {  useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import LazyLoad from 'react-lazy-load'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
const apiPath = import.meta.env.VITE_REACT_APP_API_PATH

function ProductDetail() {
    const [cartQuantity, setCartQuantity] = useState(1)
    const [tempPic, setTempPic] = useState([])
    const [productItem, setProductItem] = useState({})
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)
    const { id } = useParams()
    const menu = useLoaderData()
    const queryClient = useQueryClient()
    const { cartData } = useOutletContext()
    const currentItem = cartData?.carts?.find((item) => {
        return item?.product_id === id
    })
    const itemId = currentItem?.id
    const currentQuantity = currentItem?.qty
    const isInCart = currentQuantity > 0

    useEffect(() => {
        async function fetCart() {
            const cartData = await getCartData()
            console.log(cartData)

            return cartData
        }
        fetCart()
    }, [])
    console.log('isInCart:', isInCart, 'currentQuantity:', currentQuantity)

    const dispatch = useDispatch()
    const addCart = async () => {
        try {
            const res = await axios.post(
                `${apiBaseUrl}/v2/api/${apiPath}/cart`,
                {
                    data: {
                        product_id: id,
                        qty: cartQuantity,
                    },
                }
            )
            toast.success('Successfully adding to cart')
            queryClient.invalidateQueries('cartData')
            dispatch(addItem(menu))
        } catch (error) {
            toast.error(error)
        }
    }
    const getMainPic = async (id) => {
        try {
            const res = await axios.get(
                `${apiBaseUrl}/v2/api/${apiPath}/product/${id}`
            )
            console.log(res)

            setProductItem(res.data.product)
            const productData = res.data.product
            let filterImage = productData.imagesUrl.filter((item) => {
                return item !== ''
            })
            const combinedArray = [productData.imageUrl, ...filterImage]
            setTempPic(combinedArray)
            return productData
        } catch (error) {
            console.log(error)
        }
    }

    // const { data: product1, isLoading } = useQuery({
    //     queryKey: ['getProduct', id],
    //     queryFn: (id) => getMainPic(id),
    // })
    // console.log(product1)

    // useEffect(() => {
    //     getProductItem(id)
    // }, [id])
    useLayoutEffect(() => {
        getMainPic(id)
    }, [id])
    const datePicker = (dates) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
    }
    // 從本地存儲加載先前選取的日期，如果沒有則使用預設值
    const savedDate = localStorage.getItem(`selectedDate_${id}`)
    const [selectedDate, setSelectedDate] = useState(
        savedDate ? new Date(savedDate) : new Date()
    )
    // 更新選取的日期並將其存儲在本地存儲中
    const handleDateChange = (dates, id) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
        localStorage.removeItem(`selectedStartDate_${id}`)
        localStorage.removeItem(`selectedEndDate_${id}`)
        localStorage.setItem(`selectedStartDate_${id}`, start)
        localStorage.setItem(`selectedEndDate_${id}`, end)
    }

    return (
        <div className="container mx-auto">
            <div className="my-4 px-8">
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item href="/" icon={HiHome}>
                        <p className="text-xl text-stone-600">Home</p>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/menu/all">
                        <p className="text-xl text-stone-600">Menu</p>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href={`/menu/productDetail/${id}`}>
                        <p className="text-xl text-stone-600">
                            {productItem.title}
                        </p>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="mx-auto my-6">
                <div className="mx-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                    <div>
                        <div className="h-56 sm:h-64 xl:h-96">
                            <Carousel slide={false}>
                                {tempPic.map((img, index) => {
                                    return (
                                        <LazyLoad key={index}>
                                            <img
                                                src={img}
                                                className="object-cover"
                                            />
                                        </LazyLoad>
                                    )
                                })}
                            </Carousel>
                        </div>
                        <div>
                            <h5
                                style={{ whiteSpace: 'pre-line' }}
                                className="mb-3 mt-3"
                            >
                                {productItem.content}
                            </h5>
                        </div>
                    </div>
                    <div className="flex flex-col" key={productItem.id}>
                        <h3 className="  text-3xl font-semibold text-stone-700">
                            {productItem.title}
                        </h3>
                        <p className=" my-4 text-5xl font-semibold text-red-400">
                            {currencyTwd(productItem.price)}
                        </p>
                        <div className=" mx-0 flex text-wrap rounded-md  px-0 py-2 align-top font-medium text-stone-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 256 256"
                                className="mx-3"
                            >
                                <path
                                    fill="currentColor"
                                    d="M241.91 137.42L142.59 38.1a13.94 13.94 0 0 0-9.9-4.1H40a6 6 0 0 0-6 6v92.69a13.94 13.94 0 0 0 4.1 9.9l99.32 99.32a14 14 0 0 0 19.8 0l84.69-84.69a14 14 0 0 0 0-19.8m-8.49 11.31l-84.69 84.69a2 2 0 0 1-2.83 0L46.59 134.1a2 2 0 0 1-.59-1.41V46h86.69a2 2 0 0 1 1.41.59l99.32 99.31a2 2 0 0 1 0 2.83M94 84a10 10 0 1 1-10-10a10 10 0 0 1 10 10"
                                />
                            </svg>
                            <p className="gap-3 text-xl capitalize tracking-wide">
                                已經有
                                <span className="text-2xl font-semibold">
                                    {productItem.origin_price}
                                </span>{' '}
                                人參加!
                            </p>
                        </div>
                        <hr className="my-4" />
                        <div>
                            <p className="py-4 text-xl tracking-wide text-stone-700">
                                {productItem.description}
                            </p>
                        </div>
                        <div className="py-4">
                            <h5 className="my-2 text-xl font-semibold text-stone-700">
                                選擇參加日期
                            </h5>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => handleDateChange(date, id)}
                                minDate={new Date()}
                                maxDate={addMonths(new Date(), 5)}
                                startDate={startDate}
                                endDate={endDate}
                                selectsRange
                                inline
                                showDisabledMonthNavigation
                            />
                        </div>
                        <hr className="py-2" />

                        {isInCart && (
                            <div className="my-4 flex items-center justify-normal">
                                <div className="px-6  text-center">
                                    <label className="text-xl tracking-wide">
                                        數量
                                    </label>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-8">
                                    <UpdateItemQuantity
                                        id={itemId}
                                        item={currentItem}
                                    />
                                    {/* <DeleteItem id={id} /> */}
                                </div>
                            </div>
                        )}
                        {!isInCart && (
                            <Button type="primary" onClick={() => addCart()}>
                                加入購物車
                            </Button>
                        )}
                        {isInCart && (
                            <Button type="checkOut" to="/cart">
                                結帳
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail

export async function loader({ params }) {
    const menuData = await getProductItem(params.id)
    return menuData
}
