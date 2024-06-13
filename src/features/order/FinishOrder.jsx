import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { checkOutOrder, getCartData } from '../../services/apiProduct'
import EmptyCart from '../cart/EmptyCart'
import { useSelector } from 'react-redux'
import { getCart } from '../cart/cartSlice'
import LinkButton from '../../ui/LinkButton'
import Button from '../../ui/Button'
import { currencyTwd } from '../../utils/helper'

function FinishOrder() {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
    const apiPath = import.meta.env.VITE_REACT_APP_API_PATH
    const { orderId } = useParams()
    const [order, setOrder] = useState()
    // const order = useLoaderData()
    // console.log(order)

    const paySuccess = async (orderId) => {
        try {
            const res = await axios.get(
                `${apiBaseUrl}/v2/api/${apiPath}/order/${orderId}`
            )
            console.log(res.data.order)
            setOrder(res.data.order)
            getCartData()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        paySuccess(orderId)
    }, [orderId])
    // if (!orderData) return <EmptyCart />
    return (
        <div className="container mx-auto ">
            <div className="flex max-h-[20rem] justify-center py-3">
                <img
                    className="rounded-md object-cover"
                    src="https://images.unsplash.com/photo-1576660016828-1d73950e9d2b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>
            <div className="my-5">
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className="py-3 text-3xl">購買成功!</h2>
                        <p className="mb-4">
                            感謝您下單！我們已收到您的付款並確認了您的訂單。您的商品將在三個工作日內發貨。請留意您提供的聯絡方式以接收配送通知。如有任何問題或需要協助，請隨時聯繫我們的客服團隊。再次感謝您的支持，祝您購物愉快！
                        </p>
                        <Link
                            to="/"
                            className="rounded-sm px-4 py-2 text-base text-blue-500 outline outline-1  outline-offset-2 transition-colors duration-300 hover:bg-blue-200 hover:text-blue-600"
                        >
                            &larr; 返回首頁
                        </Link>
                    </div>

                    <div className="bg-white-100 py-4 shadow-md shadow-blue-300/20 transition-shadow  duration-500 hover:shadow-blue-500/40">
                        <div className="flex items-center  px-4 py-2">
                            <p className="text-xl font-semibold text-stone-700">
                                訂單內容
                            </p>
                        </div>
                        <div className="px-4">
                            <ul className="list-none divide-y divide-solid">
                                {Object.values(order?.products ?? {}).map(
                                    (item) => {
                                        return (
                                            <li
                                                className="px-0 pb-4"
                                                key={item.id}
                                            >
                                                <div className="mt-2 flex w-full grow ">
                                                    <img
                                                        src={
                                                            item.product
                                                                .imageUrl
                                                        }
                                                        className="max-h-[5rem] object-cover"
                                                    />
                                                    <div className=" flex w-full grow flex-col ">
                                                        <li className="flex justify-between  pl-2  font-semibold">
                                                            <h5 className="text-stone-500">
                                                                {
                                                                    item.product
                                                                        .title
                                                                }
                                                            </h5>
                                                            <p className="">
                                                                x{item.qty}
                                                            </p>
                                                        </li>
                                                        <li className="mt-auto flex  justify-between px-0 ">
                                                            <p className="mb-0 pl-2 text-base text-stone-500 ">
                                                                {currencyTwd(
                                                                    item.product
                                                                        .price
                                                                )}
                                                            </p>
                                                            <p className="mb-0 text-xl text-stone-700">
                                                                {currencyTwd(
                                                                    item.total
                                                                )}
                                                            </p>
                                                        </li>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                )}
                                <li className="px-0 py-4 text-stone-700">
                                    <table className="table w-full grow">
                                        <tbody>
                                            <tr className="">
                                                <th
                                                    scope="row"
                                                    className="border-0 px-0 pt-0"
                                                >
                                                    付款方式
                                                </th>
                                                <td className="border-0 px-0 pt-0 text-end">
                                                    ApplePay
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="mt-2 flex justify-between ">
                                        <p className="mb-0 text-3xl font-semibold">
                                            總金額
                                        </p>
                                        <p className="mb-0 text-3xl font-semibold italic underline">
                                            {currencyTwd(order?.total)}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="container">
        //     <div
        //         style={{
        //             minHeight: '400px',
        //             backgroundImage:
        //                 'url(https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        //             backgroundPosition: ' center center',
        //         }}
        //     ></div>
        //     <div className="mb-7 mt-5">
        //         <div className="row">
        //             <div className="col-md-6">
        //                 <h2>訂購成功</h2>
        //                 <p>
        //                     感謝您的訂購！我們已經收到您的付款並確認訂單。您的商品將於三個工作日內進行出貨，請留意您所提供的聯絡方式，以便及時接收配送通知。如有任何疑問或需要協助，請隨時聯繫我們的客服團隊。再次感謝您的支持，祝您有個愉快的購物體驗！
        //                 </p>
        //                 <a
        //                     href="./index.html"
        //                     className="btn btn-outline-dark rounded-0 mb-4 me-2"
        //                 >
        //                     回首頁
        //                 </a>
        //             </div>
        //             <div className="col-md-6">
        //                 <div className="card rounded-0 py-4">
        //                     <div className="card-header border-bottom-0 bg-white px-4 py-0">
        //                         <h2>訂購細項</h2>
        //                     </div>
        //                     <div className="card-body px-4 py-0">
        //                         <ul className="list-group list-group-flush">
        //                             {Object.values(order?.products || {}).map(
        //                                 (item) => {
        //                                     return (
        //                                         <li
        //                                             className="list-group-item px-0"
        //                                             key={item.id}
        //                                         >
        //                                             <div className="d-flex mt-2">
        //                                                 <img
        //                                                     src={
        //                                                         item.product
        //                                                             .imageUrl
        //                                                     }
        //                                                     alt=""
        //                                                     className="me-2"
        //                                                     style={{
        //                                                         width: '60px',
        //                                                         height: '60px',
        //                                                         objectFit:
        //                                                             'cover',
        //                                                     }}
        //                                                 />
        //                                                 <div className="w-100 d-flex flex-column">
        //                                                     <div className="d-flex justify-content-between fw-bold">
        //                                                         <h5>
        //                                                             {
        //                                                                 item
        //                                                                     .product
        //                                                                     .title
        //                                                             }
        //                                                         </h5>
        //                                                         <p className="mb-0">
        //                                                             x{item.qty}
        //                                                         </p>
        //                                                     </div>
        //                                                     <div className="d-flex justify-content-between mt-auto">
        //                                                         <p className="text-muted mb-0">
        //                                                             <small>
        //                                                                 NT$
        //                                                                 {
        //                                                                     item
        //                                                                         .product
        //                                                                         .price
        //                                                                 }
        //                                                             </small>
        //                                                         </p>
        //                                                         <p className="mb-0">
        //                                                             NT${' '}
        //                                                             {item.total}
        //                                                         </p>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                         </li>
        //                                     )
        //                                 }
        //                             )}

        //                             <li className="list-group-item px-0 pb-0">
        //                                 <table className="text-muted table">
        //                                     <tbody>
        //                                         <tr>
        //                                             <th
        //                                                 scope="row"
        //                                                 className="font-weight-normal border-0 px-0"
        //                                             >
        //                                                 優惠券
        //                                             </th>
        //                                             <td className="border-0 px-0 text-end">
        //                                                 NT${order?.total}
        //                                             </td>
        //                                         </tr>
        //                                         <tr>
        //                                             <th
        //                                                 scope="row"
        //                                                 className="font-weight-normal border-0 px-0 pt-0"
        //                                             >
        //                                                 Payment
        //                                             </th>
        //                                             <td className="border-0 px-0 pt-0 text-end">
        //                                                 ApplePay
        //                                             </td>
        //                                         </tr>
        //                                     </tbody>
        //                                 </table>
        //                                 <div className="d-flex justify-content-between mt-2">
        //                                     <p className="h4 fw-bold mb-0">
        //                                         合計
        //                                     </p>
        //                                     <p className="h4 fw-bold mb-0">
        //                                         NT${order?.total}
        //                                     </p>
        //                                 </div>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default FinishOrder

export async function loader({ params }) {
    const order = await checkOutOrder(params.id)
    return order
}
