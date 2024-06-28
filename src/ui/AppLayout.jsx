import Loader from './Loader.jsx'
import Navbar from './Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './footer.jsx'
import { useEffect, useState } from 'react'
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllProduct, handleCategory } from '../services/apiProduct.js'
import axios from 'axios'

function AppLayout() {
    const [categoryList, setCategoryList] = useState()
    const [totalCartQty, setTotalCartQty] = useState()
    const queryClient = useQueryClient()
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
    const apiPath = import.meta.env.VITE_REACT_APP_API_PATH
    const [cartData, setCartData] = useState({})

    const { data: allCategory, isPending: allCategoryLoading } = useQuery({
        queryKey: ['allProducts'],
        queryFn: getAllProduct,
    })
    const getCartData = async () => {
        try {
            const res = await axios.get(`${apiBaseUrl}/v2/api/${apiPath}/cart`)
            setCartData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleCategoryAndUpdate(allCategory)
    }, [allCategory])

    useEffect(() => {
        getCartData()
    })
    
    useEffect(() => {
        calculateTotalQuantity(cartData)
    }, [cartData])

    const handleCategoryAndUpdate = async (allCategory) => {
        try {
            const updatedList = await handleCategory(allCategory)
            setCategoryList(updatedList)
        } catch (error) {
            console.error('Error updating categoryList:', error)
        }
    }

    const calculateTotalQuantity = (cartData) => {
        const totalQuantity = cartData?.carts?.reduce((sum, item) => {
            return (sum += item.qty)
        }, 0)
        setTotalCartQty(totalQuantity)
    }

    useEffect(() => {
        getAllProduct()
    }, [])

    return (
        <div className="bg-white-50  grid min-h-dvh grid-rows-[auto_1fr_auto] max-w-screen">
            <Navbar categoryList={categoryList} totalCartQty={totalCartQty} />
            <Loader loading={allCategoryLoading} />
            {
                <Outlet
                    context={{
                        categoryList,
                        allCategory,
                        cartData,
                        totalCartQty,
                        getCartData,
                    }}
                />
            }
            <Footer />
        </div>
    )
}

export default AppLayout
