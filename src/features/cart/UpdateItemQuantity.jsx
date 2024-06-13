import Button from '../../ui/Button.jsx'

import { updateCartItem } from '../../services/apiProduct.js'
import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

function UpdateItemQuantity({ item }) {
    const [currentQuantity, setCurrentQuantity] = useState(item?.qty * 1)

    useEffect(() => {
        setCurrentQuantity(item?.qty * 1)
    }, [item])
    const queryClient = useQueryClient()
    const updateQuantity = async (newQty) => {
        console.log(newQty)
        try {
            const newQuantity = await updateCartItem(item, newQty)
            console.log(newQuantity)

            return newQuantity
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    const handleDecrease = () => {
        const newQty = currentQuantity - 1
        updateQuantity(newQty)
        queryClient.invalidateQueries('cartData')
    }
    const handleIncrease = async () => {
        const newQty = currentQuantity + 1
        updateQuantity(newQty)
        queryClient.invalidateQueries('cartData')
    }

    const { mutate: increase, isLoading: increaseLoading } = useMutation({
        mutationFn: handleIncrease,
        onSuccess: () => {
            setCurrentQuantity((currentQuantity) => currentQuantity + 1)
        },
    })
    const { mutate: decrease, isLoading: decreaseLoading } = useMutation({
        mutationFn: handleDecrease,
        onSuccess: () => {
            setCurrentQuantity((currentQuantity) => currentQuantity - 1)
        },
    })
    return (
        <div className="flex items-center gap-4 text-xl md:gap-5">
            <Button type="round" onClick={decrease}>
                -
            </Button>
            <span className="text-base font-semibold">{currentQuantity}</span>
            <Button
                type="round"
                // onClick={() => dispatch(increaseItemQuantity(id))}
                onClick={increase}
            >
                +
            </Button>
        </div>
    )
}

export default UpdateItemQuantity
