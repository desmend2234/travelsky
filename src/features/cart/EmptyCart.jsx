import LinkButton from '../../ui/LinkButton.jsx'

function EmptyCart() {
    return (
        <div className="min-h-screen">
            <LinkButton to="/menu/all">&larr; 返回所有行程</LinkButton>

            <p className="py-4 text-lg font-semibold">
                你的購物車是空的，開始規畫行程吧 :)
            </p>
        </div>
    )
}

export default EmptyCart
