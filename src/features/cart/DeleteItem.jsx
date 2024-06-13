import Button from '../../ui/Button.jsx'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeCartItem } from '../../services/apiProduct.js'
import { IoClose } from 'react-icons/io5'

function DeleteItem({ id, type }) {
    const queryClient = useQueryClient()
    const { mutate, isLoading } = useMutation({
        mutationFn: removeCartItem,
        onSuccess: () => {
            // console.log(isLoading)
            queryClient.invalidateQueries('cartData')
        },
    })

    if (type === 'cart') {
        return (
            <div>
                <button
                    className="absolute right-2 top-2 border-0 hover:bg-blue-400"
                    onClick={() => mutate(id)}
                    // style={{ right: '-8px', top: '-8px' }}
                >
                    <IoClose />
                </button>
            </div>
        )
    }
    return (
        <Button
            type="secondary"
            onClick={() => mutate(id)}
            disabled={isLoading}
        >
            {isLoading ? 'Deleting...' : 'Delete'}
        </Button>
    )
}

export default DeleteItem
