import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

function MobileNav() {
    const [openMenu, setOpenMenu] = useState(false)
    const menuVariants = {
        hidden: {
            x: '100%',
        },
        show: {
            x: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.9],
            },
        },
    }
    return (
        <nav className="flex min-h-fit lg:hidden">
            <Link className=" flex w-[40dw] gap-2">
                <img src="/logo2.svg" className="h-14" alt="Logo" />
                <span className="self-center whitespace-nowrap text-2xl font-semibold text-stone-700">
                    TRAVEL SKY
                </span>
            </Link>
            <div
                onClick={() => setOpenMenu(true)}
                className="absolute right-10 top-10 h-6 w-6 cursor-pointer z-30"
            >
                <img src="/menu.png" />
            </div>
            <motion.div
                variants={menuVariants}
                initial="hidden"
                animate={openMenu ? 'show' : ''}
                className="absolute right-0 top-0 z-20 min-h-[40dvh] w-full max-w-xs bg-white text-xl shadow-2xl"
            >
                <div onClick={() => setOpenMenu(false)}>
                    <img
                        src="/cross.png"
                        className="absolute left-4 top-4 z-30 h-6 w-6 cursor-pointer"
                    />
                </div>

                <ul className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-y-8 md:gap-[4dvw]">
                    <li>
                        <NavLink to="/" onClick={() => setOpenMenu(false)}>
                            首頁
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/menu/all"
                            onClick={() => setOpenMenu(false)}
                        >
                            行程
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={() => setOpenMenu(false)}>
                            關於我們
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            onClick={() => setOpenMenu(false)}
                        >
                            聯絡我們
                        </NavLink>
                    </li>
                </ul>
            </motion.div>{' '}
        </nav>
    )
}

export default MobileNav
