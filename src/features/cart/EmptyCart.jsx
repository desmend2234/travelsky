import LinkButton from '../../ui/LinkButton.jsx'

function EmptyCart() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div>
                <p className="py-4 text-lg font-semibold">
                    你的購物車是空的，開始規畫行程吧 :)
                </p>
                <LinkButton to="/menu/all">&larr; 返回 所有行程</LinkButton>
            </div>
        </div>
    )
}

export default EmptyCart
