import CartItem from './CartItem.jsx'
import {  useSelector } from 'react-redux'
import EmptyCart from './EmptyCart.jsx'
import {  removeAllCartItem } from '../../services/apiProduct.js'
import {  useOutletContext } from 'react-router-dom'
import { useMutation,  useQueryClient } from '@tanstack/react-query'
import { currencyTwd } from '../../utils/helper.jsx'
import Button from '../../ui/Button'

function Cart() {
    const username = useSelector((state) => state.user.username)

    const { cartData } = useOutletContext()
    const queryClient = useQueryClient()
    console.log(cartData)

    const { mutate, isLoading } = useMutation({
        mutationFn: removeAllCartItem,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['cartData'],
            })
        },
    })
    if (!cartData || !cartData.carts || cartData.carts.length === 0) {
        return <EmptyCart />
    }
    return (
        // <div className="container mx-auto max-h-screen py-3">
        //     <LinkButton to="/menu">&larr; Back to menu</LinkButton>

        //     <h2 className="mt-7 text-xl font-semibold capitalize">
        //         Your cart, {username}
        //     </h2>
        //     <ul className="mt-3 divide-y divide-stone-200 border-b">
        //         {cartData?.carts?.map((item) => (
        //             <CartItem item={item} key={item.product.id}></CartItem>
        //         ))}
        //     </ul>
        //     <div className="mx-28 mt-6 flex space-x-2">
        //         <Button to="/order/new" type="primary">
        //             Order
        //         </Button>
        //         <Button
        //             type="secondary"
        //             onClick={() => mutate()}
        //             disabled={isLoading}
        //         >
        //             {isLoading ? 'Clearing...' : 'Clear Cart'}
        //         </Button>
        //     </div>
        // </div>
        <div className="container mx-auto ">
            <div className="justify-center">
                <div className="bg-white py-5">
                    <h3 className="mb-2 mt-6 flex justify-center text-4xl font-semibold italic text-stone-700">
                        購物車
                    </h3>
                    {cartData?.carts?.map((item) => {
                        return (
                            <CartItem
                                item={item}
                                key={item.product.id}
                            ></CartItem>
                        )
                    })}
                </div>

                <div className="container mx-auto lg:px-32  ">
                    <table className=" flex flex-col justify-evenly  border border-stone-200  bg-zinc-100 px-6 shadow-lg shadow-zinc-200/40 sm:mx-auto md:mx-10 lg:mx-auto xl:mx-48">
                        <tbody className="my-4 grid grid-cols-1 items-center divide-y ">
                            <tr className="flex justify-between pt-4 sm:text-base md:text-xl">
                                <th
                                    scope="row"
                                    className="fw-semibold  border-0 px-3 "
                                >
                                    商品總金額
                                </th>
                                <td className="border-0 px-3 text-end">
                                    {currencyTwd(cartData.final_total)}
                                </td>
                            </tr>

                            <tr className="flex justify-between px-3 pt-6 ">
                                <th className="mb-0 text-3xl font-semibold text-stone-800">
                                    總付款金額
                                </th>
                                <td className="mb-0 text-3xl font-semibold underline">
                                    {currencyTwd(cartData.final_total)}
                                    {/* {Math.round(totalAmount) - 500?.toLocaleString()} */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-3 flex justify-center">
                        <Button type="primary" to="/order/new">
                            前往結帳
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

// export async function loader() {
//     const cartData = await getCartData()
//     return cartData
// }
