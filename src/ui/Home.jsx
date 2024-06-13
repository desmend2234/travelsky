import { useSelector } from 'react-redux'
import Button from './Button'
import Username from '../features/user/Username'
import { Link } from 'react-router-dom'
import CreateUser from '../features/user/CreateUser'

import { delay, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
function Home() {
    const username = useSelector((state) => state.user.username)
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
                duration: 1.5,
            },
        },
        animate2: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 1.2,
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
        scrollButton: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 1.5,
                repeat: Infinity,
            },
        },
        onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
                duration: 0.8,
                delay: 1,
            },
        },
    }
    return (
        <div className="container mx-auto my-8 min-h-full text-center">
            <section className="relative my-12 flex min-h-[80vh]  justify-center">
                <div className="px-5">
                    <div className="mb-5 items-center justify-center">
                        <div className="mb-4 grid gap-4 text-wrap md:grid-cols-1 lg:grid-cols-2">
                            <motion.article
                                className="text-left"
                                variants={variants}
                                initial="initial2"
                                animate="animate2"
                            >
                                <h3 className="mb-2 text-balance text-6xl font-semibold uppercase ">
                                    踏上璀璨旅程
                                </h3>
                                <p className="mb-10 whitespace-normal break-words text-xl normal-case">
                                    踏上終極旅程，探索世界上最令人驚嘆的目的地，體驗獨一無二的冒險。無論是壯麗的自然景觀、歷史悠久的文化遺址，還是充滿活力的城市，都能帶給你難以忘懷的回憶。這是一段充滿驚奇與發現的旅程，讓你親身感受不同的風土人情和美食佳餚。無論你是尋求刺激的冒險家，還是渴望放鬆的旅行者，你的夢想之旅正在等待——今天就開始探索吧，讓每一刻都成為值得珍藏的回憶！
                                </p>{' '}
                                {username === '' ? (
                                    <CreateUser />
                                ) : (
                                    <div className="my-2 pt-20">
                                        <Button type="primary" to="/menu/all">
                                            歡迎繼續選購, {username}
                                        </Button>
                                    </div>
                                )}
                            </motion.article>
                            <motion.img
                                variants={variants}
                                initial="initial"
                                animate="animate"
                                className="object-fit sm:hidden md:flex"
                                src={
                                    'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                }
                            />
                        </div>
                    </div>{' '}
                </div>{' '}
                <motion.img
                    src="/arrow.png"
                    variants={variants}
                    animate="scrollButton"
                    className="absolute bottom-[4rem] hidden h-10  w-10 lg:flex"
                />
            </section>

            {username && (
                <div
                    className="absolute right-10 flex "
                    style={{ top: '8rem' }}
                >
                    <p className="hidden uppercase text-stone-700 md:flex">
                        Welcome,
                    </p>
                    <p className="items-center uppercase text-stone-700">
                        <Username />
                    </p>
                </div>
            )}
            <section>
                <h1 className="px-4 text-xl font-semibold uppercase text-stone-700 md:text-3xl">
                    提供最好的旅程
                    <br />
                    <span className="uppercase text-blue-500">
                        探索你的下一段冒險
                    </span>
                </h1>
            </section>
            <section className="my-14 bg-slate-50 py-10">
                <div className="grid gap-8 p-5 text-left text-xl text-stone-800 md:lg:grid-cols-1 lg:grid-cols-3 ">
                    <Link to="/menu/productDetail/-O-G8K-ldnkPxh_ZDSPr">
                        <motion.div
                            className="grid-flow-row grid-cols-2 space-y-2 "
                            variants={variants}
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 8,
                            }}
                        >
                            <img className="object-fit " src="halstatt.avif" />
                            <p>
                                哈修塔特，位於奧地利，是一個風景如畫的小鎮。這裡擁有美麗的湖泊、壯麗的阿爾卑斯山景觀和保存完好的古老建築，屬於世界文化遺產。遊客可以漫步於狹窄街道，探索歷史悠久的教堂和鹽礦，享受寧靜的湖畔風光。
                            </p>
                        </motion.div>
                    </Link>
                    <Link to="/menu/productDetail/-O-Gd9CUCUuJCtRBUqwh">
                        <motion.div
                            variants={variants}
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 10,
                            }}
                            className="grid-flow-row grid-cols-2 space-y-2"
                        >
                            <img
                                className="object-fit "
                                src="/effel tower.avif"
                            />
                            <p>
                                艾菲爾鐵塔，位於法國巴黎，是世界上最著名的地標之一。這座宏偉的鐵塔於1889年建成，高達324米，吸引了無數遊客前來觀光。艾菲爾鐵塔不僅是巴黎的象徵，也是人類工程技術的傑作。登上鐵塔，可以俯瞰整個巴黎市區，感受浪漫之都的獨特魅力。無論白天還是夜晚，鐵塔都以其獨特的風采迷倒眾人。
                            </p>
                        </motion.div>
                    </Link>
                    <Link to="/menu/productDetail/-O-GeHyiHxN0cjZPrdVX">
                        <motion.div
                            variants={variants}
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 10,
                            }}
                            className="grid-flow-row grid-cols-2 space-y-2"
                        >
                            <img className="object-fit " src="/river.avif" />
                            <p>
                                內卡河，位於德國西南部，是萊茵河的一條重要支流。這條河流經過黑森林、圖賓根和海德堡等風景如畫的地區，全長約367公里。內卡河兩岸風光秀麗，擁有古老的城堡、歷史悠久的小鎮和綠意盎然的葡萄園，吸引了無數遊客前來遊覽。乘船遊覽內卡河，能欣賞到德國的自然美景和文化遺產，是一次難忘的體驗。
                            </p>
                        </motion.div>
                    </Link>
                </div>
            </section>
            <section>
                <div className="my-8 grid min-h-[86dvh] grid-cols-1 content-around text-justify lg:grid-cols-2">
                    <div className="mx-6 my-10 text-balance ">
                        <h1 className="text-pretty text-6xl font-semibold">
                            我們提供的服務
                        </h1>
                        <p>
                            網站提供全面的服務，包括量身定制行程、精選當地景點推薦、便捷的訂票服務（機票、酒店、景點門票）、專業的導遊安排以及全天候的客戶服務支持。無論您是計劃一次探險之旅還是休閒度假，我們都會為您提供最好的旅行體驗，確保您的旅途充滿愉快和回憶。
                        </p>
                    </div>
                    <ul className="mx-8 grid h-fit list-inside list-disc items-center gap-4 text-balance bg-[#2970DB] px-12 py-20 text-left text-xl font-semibold text-white">
                        <li>
                            旅遊規劃：量身定制旅程，包括交通、住宿和行程安排。
                        </li>
                        <li>景點推薦：精選當地獨特景點及必遊景點介紹。</li>

                        <li>
                            導遊服務：安排專業導遊，深度解說當地文化和歷史。
                        </li>
                        <li>
                            客服支持：24小時線上客服，解答問題並提供即時支援。
                        </li>
                    </ul>
                </div>
            </section>
            <section></section>
            <section>
                <div className="min-h-[86dvh]">
                    <h1 className="px-4 pt-10 text-xl font-semibold uppercase text-stone-700 md:text-3xl ">
                        客戶評論
                        <br />
                        <span className=" text-xl text-blue-500">
                            看看其他人怎麼說
                        </span>
                    </h1>
                    <div className="my-14 h-96 w-full flex-col   rounded  bg-stone-100">
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper h-80"
                            slidesPerView={2}
                            spaceBetween={20}
                            breakpoints={{
                                324: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 2 },
                            }}
                        >
                            <SwiperSlide className="flex  flex-col items-center justify-center ">
                                <div className="my-2 w-[20rem] rounded-3xl bg-white  px-4 sm:w-[35rem] lg:w-[25vw]">
                                    <div className="mt-4 flex items-center gap-2  text-wrap rounded-lg px-4 ">
                                        <img
                                            className="object-fit my-2 h-24 rounded-full"
                                            src={
                                                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                            }
                                        />
                                        <div className="flex-col text-left">
                                            <h3 className="text-xl">
                                                Natalie Audrey
                                            </h3>
                                            <div>紐約,美國</div>
                                        </div>
                                    </div>
                                    <p className="mx-4 mb-4 text-left">
                                        這次威尼斯旅遊行程充滿了驚喜與感動。從壯麗的運河風光到歷史悠久的聖馬可廣場，每一站都帶來難忘的體驗，讓人流連忘返。
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex  flex-col items-center justify-center ">
                                <div className="my-2 w-[20rem] rounded-3xl bg-white  px-4 sm:w-[35rem] lg:w-[25vw]">
                                    <div className="mt-4 flex items-center gap-2  text-wrap rounded-lg px-4 ">
                                        <img
                                            className="object-fit my-2 h-24 rounded-full"
                                            src={
                                                'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                            }
                                        />
                                        <div className="flex-col text-left">
                                            <h3 className="text-xl">
                                                James Teller
                                            </h3>
                                            <div>赫爾辛基,芬蘭</div>
                                        </div>
                                    </div>
                                    <p className="mx-4 mb-4 text-left">
                                        這次米蘭旅遊行程充滿驚喜。從欣賞宏偉的米蘭大教堂，到漫步於文藝復興氣息濃厚的斯卡拉歌劇院，每一刻都令人難忘。米蘭的時尚與美食同樣令人陶醉。
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex  flex-col items-center justify-center ">
                                <div className="my-2 w-[20rem] rounded-3xl bg-white  px-4 sm:w-[35rem] lg:w-[25vw]">
                                    <div className="mt-4 flex items-center gap-2  text-wrap rounded-lg px-4 ">
                                        <img
                                            className="object-fit my-2 h-24 rounded-full"
                                            src={
                                                'https://images.unsplash.com/photo-1612000529646-f424a2aa1bff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                            }
                                        />
                                        <div className="flex-col text-left">
                                            <h3 className="text-xl">
                                                Mason Lawrence
                                            </h3>
                                            <div>馬尼拉,菲律賓</div>
                                        </div>
                                    </div>
                                    <p className="mx-4 mb-4 text-left">
                                        這次奧斯陸旅遊行程充滿驚喜。從探索壯麗的維格蘭雕塑公園，到參觀歷史悠久的奧斯陸皇宮，每一站都帶來獨特的體驗。奧斯陸的自然美景與豐富的文化讓人流連忘返。
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex  flex-col items-center justify-center ">
                                <div className="my-2 w-[20rem] rounded-3xl bg-white  px-4 sm:w-[35rem] lg:w-[25vw]">
                                    <div className="mt-4 flex items-center gap-2  text-wrap rounded-lg px-4 ">
                                        <img
                                            className="object-fit my-2 h-24 rounded-full"
                                            src={
                                                'https://images.unsplash.com/photo-1622403974791-6535771380d5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                            }
                                        />
                                        <div className="flex-col text-left">
                                            <h3 className="text-xl">
                                                Alex Cindy
                                            </h3>
                                            <div>邁阿密,美國</div>
                                        </div>
                                    </div>
                                    <p className="mx-4 mb-4 text-left">
                                        這次台北旅遊行程充滿驚喜。從登上壯觀的台北101俯瞰全市，到探索熱鬧的士林夜市品嘗美食，每一站都帶來獨特的體驗。台北的文化與活力讓人流連忘返。
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className="min-h-[75dvh] bg-gray-600 bg-[url('https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-no-repeat bg-blend-multiply">
                <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                        還等什麼？立即出發！
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl text-justify">
                        加入我們，展開一段難忘的旅程。探索全新目的地，創造持久的回憶，體驗一生一次的冒險。別再等待——今天就開始你的冒險吧！
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link
                            to="/menu/all"
                            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            立刻探索
                            <svg
                                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
