import { delay, motion } from 'framer-motion'

function About() {
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
        <section className="container mx-auto my-24 min-h-full">
            <div className="grid grid-cols-1 items-center justify-items-center lg:grid-cols-2">
                <motion.img
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=2594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="object-fit m-6 hidden w-[35dvw] lg:flex"
                />
                <div className="grid items-center justify-items-center lg:grid-rows-2">
                    <motion.img
                        variants={variants}
                        initial="initial2"
                        animate="animate2"
                        src="https://images.unsplash.com/photo-1576961453646-b4c376c7021b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="object-fit  m-6 lg:w-[15dvw]"
                    />
                    <motion.h1
                        variants={variants}
                        initial="initial3"
                        animate="animate3"
                        className="text-8xl uppercase text-stone-700"
                    >
                        About us
                    </motion.h1>
                    <motion.div
                        variants={variants}
                        initial="initial3"
                        animate="animate3"
                        className="grid gap-8 text-xl sm:my-4 md:mx-8 md:grid-cols-2"
                    >
                        <h3>
                            Travel
                            Sky堅持提供高品質的服務，並不斷追求卓越，確保每一次旅行都是一次美好的體驗。我們注重社會責任，積極參與環保和社區活動，推動可持續旅遊。我們的文化以客戶為中心，致力於滿足和超越客戶的期望，讓每一位客戶都能享受到難忘的旅遊體驗。
                        </h3>
                        <h3>
                            Travel
                            Sky的公司文化以創新、協作和卓越為核心。我們鼓勵員工勇於創新，提出新穎的旅遊理念和解決方案，以滿足客戶不斷變化的需求。我們重視團隊合作，相信集體智慧和協同努力能夠帶來最佳的成果。每一位員工都被視為公司重要的一部分，我們致力於營造開放、包容和支持的工作環境，促進員工的專業成長和個人發展。
                        </h3>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
