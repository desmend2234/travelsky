import Button from '../../ui/Button.jsx'

function UpdateItemQuantity({  cartQuantity, setCartQuantity }) {
    return (
        <div className="flex items-center gap-4 text-xl md:gap-5">
            <Button
                type="round"
                onClick={() =>
                    setCartQuantity((pre) => (pre === 1 ? 1 : pre - 1))
                }
            >
                -
            </Button>
            <span className="text-base font-semibold">{cartQuantity}</span>
            <Button
                type="round"
                onClick={() => setCartQuantity((pre) => pre + 1)}
            >
                +
            </Button>
        </div>
    )
}

export default UpdateItemQuantity
