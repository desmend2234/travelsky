import { Outlet, useOutletContext } from 'react-router-dom'
import { Breadcrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'
import SideTabs from './SideTabs'

function Menu() {
    const { categoryList, allCategory } = useOutletContext()
    return (
        <div>
            <div className="mt-28">
                <Breadcrumb
                    aria-label="Default breadcrumb example"
                    className="container mx-auto"
                >
                    <Breadcrumb.Item href="/" icon={HiHome}>
                        <p className="text-xl text-stone-600">首頁</p>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/menu/all">
                        <p className="text-xl text-stone-600">所有行程</p>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <SideTabs categoryList={categoryList} allCategory={allCategory} />
            <Outlet context={{ allCategory, categoryList }} />
        </div>
    )
}

export default Menu
