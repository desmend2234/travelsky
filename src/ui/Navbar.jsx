import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../features/user/userSlice.js'
import SearchProduct from './SearchProduct.jsx'
// import { getCartTotalQuantity } from '../features/cart/cartSlice.js'
// import { fetchCategory } from '../features/menu/productSlice.js'

function Navbar({ categoryList, totalCartQty }) {
        const navigate = useNavigate()
    const dispatch = useDispatch()

    // const cartQuantity = useSelector(getCartTotalQuantity)
    const username = useSelector((state) => state.user.username)

    function handleLogOut() {
        dispatch(logOut())
        navigate('/')
    }
    // async function handleCategory(allCategory, setCategoryList) {
    //     try {
    //         // 將種類回傳成陣列
    //         let unSortProduct = allCategory?.map((item) => {
    //             return item.category
    //         })
    //         // 篩選出不重複的種類

    //         let sorted = unSortProduct.filter((item, i) => {
    //             return unSortProduct.indexOf(item) === i
    //         })

    //         setCategoryList(sorted)
    //         console.log(categoryList)

    //         return sorted
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    return (
        <div>
            <nav className="border-stone-200 bg-blue-200">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <NavLink
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img src="/logo2.svg" className="h-14" alt="Logo" />
                        <span className="self-center whitespace-nowrap text-2xl font-semibold text-stone-700">
                            TRAVEL SKY
                        </span>
                    </NavLink>
                    <SearchProduct />
                    <button
                        data-collapse-toggle="navbar-multi-level"
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200 md:hidden"
                        aria-controls="navbar-multi-level"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className="mx-3 hidden w-full md:block md:w-auto"
                        id="navbar-multi-level"
                    >
                        <ul className="mt-4 flex flex-col  space-x-6 rounded-lg border border-stone-100 bg-gray-50 p-4 text-xl font-medium md:mt-0 md:flex-row md:gap-6 md:border-0 md:bg-blue-200 md:p-0 rtl:space-x-reverse">
                            <li>
                                <NavLink
                                    href="/"
                                    className="block rounded bg-blue-500 px-3 py-2 text-white  md:bg-transparent md:p-0 md:text-blue-700 "
                                    aria-current="page"
                                >
                                    首頁
                                </NavLink>
                            </li>
                            <li>
                                <button
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                    className="flex w-full items-center justify-between px-3 py-2 text-stone-900 hover:bg-stone-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-600"
                                    // onClick={(e) => {
                                    //     e.preventDefault()
                                    //     dispatch(fetchCategory())
                                    // }}
                                >
                                    行程
                                    <svg
                                        className="ms-2.5 h-2.5 w-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div
                                    id="dropdownNavbar"
                                    className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700"
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownLargeButton"
                                    >
                                        <li>
                                            <NavLink
                                                to="/menu/all"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                所有行程
                                            </NavLink>
                                        </li>

                                        <li aria-labelledby="dropdownNavbarLink">
                                            <button
                                                id="doubleDropdownButton"
                                                data-dropdown-toggle="doubleDropdown"
                                                data-dropdown-placement="right-start"
                                                type="button"
                                                className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                類別
                                                <svg
                                                    className="ms-2.5 h-2.5 w-2.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="m1 1 4 4 4-4"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                id="doubleDropdown"
                                                className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                                            >
                                                <ul
                                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="doubleDropdownButton"
                                                >
                                                    {categoryList?.map(
                                                        (item) => {
                                                            return (
                                                                <li key={item}>
                                                                    <NavLink
                                                                        to={`/menu/${item}`}
                                                                        className="block px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                    >
                                                                        {item}
                                                                    </NavLink>
                                                                </li>
                                                            )
                                                        }
                                                    )}
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <li>
                                            <NavLink
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Earnings
                                            </NavLink>
                                        </li> */}
                                    </ul>
                                    {username && (
                                        <div className="py-1">
                                            <NavLink
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={handleLogOut}
                                            >
                                                登出
                                            </NavLink>
                                        </div>
                                    )}
                                </div>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="block rounded px-3 py-2 text-stone-900 hover:bg-stone-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-600"
                                >
                                    關於我們
                                </NavLink>
                            </li>{' '}
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="block rounded px-3 py-2 text-stone-900 hover:bg-stone-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-600"
                                >
                                    聯絡我們
                                </NavLink>
                            </li>
                            {totalCartQty > 0 && (
                                <li>
                                    <NavLink
                                        to="/cart"
                                        className="block rounded px-3 py-2 text-stone-900 hover:bg-stone-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-600 lg:hidden"
                                    >
                                        購物車
                                    </NavLink>
                                </li>
                            )}
                            <li>
                                {totalCartQty > 0 && (
                                    <NavLink
                                        to="/cart"
                                        className="relative rounded px-3 py-2 text-stone-900 hover:bg-stone-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-600"
                                    >
                                        <img
                                            src="/cart.svg"
                                            className="hidden h-8 w-8 lg:flex"
                                        />
                                        <div className="absolute right-[-1rem] top-[-1rem] hidden rounded-full bg-red-500 px-2 text-stone-100  lg:flex">
                                            {totalCartQty}
                                        </div>
                                    </NavLink>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
