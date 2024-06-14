import React from 'react'
import { delay, motion } from 'framer-motion'

function Contact() {
    const variants = {
        initial: {
            y: '-50%',
            opacity: 0,
        },
        initial2: {
            x: '50%',
            opacity: 0,
        },
        initial3: {
            y: '50%',
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
        animate2: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.8,
            },
        },
        animate3: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 1.5,
            },
        },
    }
    return (
        <section className="container relative mx-auto my-4 grid min-h-screen">
            <div className="grid grid-cols-1 items-center justify-evenly justify-items-center lg:grid-cols-2">
                <div className="grid items-center justify-items-center  ">
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <motion.h1
                                variants={variants}
                                initial="initial3"
                                animate="animate3"
                                className="text-3xl  text-stone-700"
                            >
                                營業時間
                            </motion.h1>
                            <h4 className="text-xl">
                                週一至週五：AM9:00-PM:5:00
                            </h4>
                        </div>
                        <div>
                            <motion.h1
                                variants={variants}
                                initial="initial3"
                                animate="animate3"
                                className="text-3xl  text-stone-700"
                            >
                                地址
                            </motion.h1>
                            <h4 className="text-xl">台北市健康路9999號</h4>
                        </div>
                        <div>
                            <motion.h1
                                variants={variants}
                                initial="initial3"
                                animate="animate3"
                                className="text-3xl  text-stone-700"
                            >
                                電話
                            </motion.h1>
                            <h4 className="text-xl">02-1234567</h4>
                        </div>
                        <div>
                            <motion.h1
                                variants={variants}
                                initial="initial3"
                                animate="animate3"
                                className="text-3xl  text-stone-700"
                            >
                                EMAIL
                            </motion.h1>
                            <h4 className="text-xl">
                                TRAVESKY123@TRAVELSKY.COM
                            </h4>
                        </div>
                    </div>
                </div>
                <motion.img
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    src="office.avif"
                    className="object-fit order-first m-6 sm:w-[70dvw] lg:order-2 lg:w-[30dvw] "
                />
            </div>
        </section>
    )
}

export default Contact
