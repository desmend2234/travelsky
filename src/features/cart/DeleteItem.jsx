import { IoClose } from 'react-icons/io5'
import { useOutletContext } from 'react-router-dom'
import axios from 'axios'

function DeleteItem({ item }) {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
    const apiPath = import.meta.env.VITE_REACT_APP_API_PATH
    const { getCartData } = useOutletContext()
    const removeCartItem = async (id) => {
        try {
            const res = await axios.delete(
                `${apiBaseUrl}/v2/api/${apiPath}/cart/${id}`
            )
            console.log(res)
            getCartData()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <button
                className="absolute right-2 top-2 border-0 hover:bg-blue-400"
                onClick={() => removeCartItem(item.id)}
            >
                <IoClose />
            </button>
        </div>
    )

}

export default DeleteItem
