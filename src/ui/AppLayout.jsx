import Loader from './Loader.jsx'
import Navbar from './Navbar.jsx'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './footer.jsx'
import { useEffect, useState } from 'react'
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query'
import {
    getAllProduct,
    getCartData,
    handleCategory,
} from '../services/apiProduct.js'

function AppLayout() {
    const [loading, setLoading] = useState(false)
    const [categoryList, setCategoryList] = useState()
    const [totalCartQty, setTotalCartQty] = useState()
    // const [cartData, setCartData] = useState()
    const queryClient = useQueryClient()

    const { data: allCategory, isPending: allCategoryLoading } = useQuery({
        queryKey: ['allProducts'],
        queryFn: getAllProduct,
        staleTime: 0,
    })
    useEffect(() => {
        handleCategoryAndUpdate(allCategory)
    }, [allCategory])

    const { data: cartData, isLoading } = useQuery({
        queryKey: ['all'],
        queryFn: getCartData,
        staleTime: 0,
    })
    useEffect(() => {
        calculateTotalQuantity(cartData)
    }, [cartData])

    const handleCategoryAndUpdate = async (allCategory) => {
        try {
            const updatedList = await handleCategory(allCategory)
            console.log(updatedList)

            setCategoryList(updatedList)
        } catch (error) {
            console.error('Error updating categoryList:', error)
        }
    }

    const calculateTotalQuantity = (cartData) => {
        console.log(cartData)

        const totalQuantity = cartData?.carts?.reduce((sum, item) => {
            return (sum += item.qty)
        }, 0)
        setTotalCartQty(totalQuantity)
    }
    useEffect(() => {
        getCartData()
    }, [])

    return (
        <div className="bg-white-50  grid min-h-dvh grid-rows-[auto_1fr_auto]">
            <Navbar categoryList={categoryList} totalCartQty={totalCartQty} />
            <Loader loading={allCategoryLoading} />
            {!isLoading && (
                <Outlet
                    context={{
                        categoryList,
                        allCategory,
                        cartData,
                        totalCartQty,
                    }}
                />
            )}
            <Footer />
        </div>
    )
}

export default AppLayout
