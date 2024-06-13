import { useOutletContext, useParams } from 'react-router-dom'
import MenuItem from './MenuItem'

function ProductCategories() {
    const { categories: currentCategory } = useParams()
    const { allCategory } = useOutletContext()

    return (
        <div className="container mx-auto">
            <div className="mx-8 grid space-x-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {allCategory?.map((item) => {
                    return item.category === currentCategory ? (
                        <MenuItem item={item} key={item.id} />
                    ) : currentCategory === 'all' ? (
                        <MenuItem item={item} key={item.id} />
                    ) : (
                        ''
                    )
                })}
            </div>
        </div>
    )
}

export default ProductCategories
