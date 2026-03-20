import luxury from '@/assets/modernluxury.png'
import julian from '@/assets/julian.png'
import elena from '@/assets/elena.png'
import marcus from '@/assets/marcus.png'
import { motion } from 'motion/react'
import { Zap, UsersRound, FlaskConical } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
export default function AboutUs () {
    type TStackHolder = {
        name:string;
        position:string;
        description:string;
        photo:string;
    };

    const stackHolders:TStackHolder[] = [
        {
            name:'Julian Vance',
            position:'Founder & Master Perfumer',
            description:'With over 25 years of experience in Grasse, Julian blends traditional French techniques with bold, unexpected botanical pairings.',
            photo:julian
        },
        {
            name:'Elena Rodriguez',
            position:'Chief of Botanical Sourcing',
            description:"Elena spends half the year traveling to remote regions to secure the world's rarest and most potent natural essences.",
            photo:elena
        },
        {
            name:'Marcus Chen',
            position:'Creative Director',
            description:'The visual soul behind Elixir, Marcus ensures that every bottle and packaging reflects the minimalist elegance of the scent within.',
            photo:marcus
        }
    ]

    return (    
        <>
            <section className="bg-[url(@/assets/parfumebackground.png)] bg-cover h-screen lg:bg-center">
                <div className="w-full bg-black/70 h-screen">
                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8}} className="container px-4 py-12 md:px-8 flex flex-col justify-center items-center gap-4 h-screen mx-auto">
                        <h1 className="text-slate-200 text-4xl font-extralight text-center">THE ART OF ESSENCE</h1>
                        <p className="text-slate-400 text-center font-extralight max-w-lg">Crafting olfactory memories through precision, passion, and the world's finest botanicals.</p>
                    </motion.div>
                </div>
            </section>

            <section className="bg-slate-50">
                <div className="container max-w-7xl px-8 py-14 mx-auto items-center grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
                    <motion.div initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}}  className="grid grid-cols-1 gap-5">
                        <span className='text-amber-400 text-[10px] lg:text-sm font-semibold tracking-[0.3em] italic'>OUR STORY</span>
                        <div className="max-w-44 md:max-w-fit">
                            <h1 className='text-2xl lg:text-3xl font-light'>A decade of redefining</h1>
                            <span className='text-2xl lg:text-3xl font-bold'>modern luxury.</span>
                        </div>
                        <div className="text-slate-600 text-xs grid grid-cols-1 gap-4">
                            <p >Founded in 2014 by master perfumer Julian Vance, Elixir began as a small boutique laboratory in the heart of Grasse, France. Our mission was simple yet ambitious: to return to the roots of high-perfumery while embracing a contemporary, minimalist aesthetic.</p>
                            <p>What started as a collection of three signature scents has evolved into a global symbol of understated elegance. We believe that a fragrance should not precede the wearer, but rather whisper their story to those close enough to listen.</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="text-slate-600 text-xs">
                                <span className="font-bold text-xl text-slate-950">2014</span>
                                <p>The First Laboratory</p>
                            </div>
                            <div className="text-slate-600 text-xs">
                                <span className="font-bold text-xl text-slate-950">2018</span>
                                <p>Global Flagship Launch</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}}>
                        <img className='rounded-xl' src={luxury} alt="modernluxury" />
                    </motion.div>
                </div>
            </section>

            <section className='bg-[#1a1a1a] md:h-screen flex justify-between items-center'>
                <div className='container max-w-7xl px-8 py-14 grid grid-cols-1 gap-5 md:gap-10 mx-auto'>
                    <div className='flex flex-col items-center gap-3 md:gap-7'>
                        <h1 className="text-slate-200 text-2xl md:text-4xl">Rooted in Integrity</h1>
                        <p className="text-slate-400 text-center text-sm font-extralight max-w-lg md:text-lg">Our workplace culture is built on the same principles as our fragrances: transparency, sustainability, and harmony.</p>
                    </div>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10'>
                        <motion.div initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}}  className='bg-transparent rounded-lg border border-gray-800 transition-colors group hover:border-amber-200 grid grid-cols-1 gap-3 p-6 '>
                            <div className='w-8 h-8 md:w-12 md:h-12 rounded-full bg-amber-300/20 group-hover:bg-amber-300 flex justify-center items-center'>
                                <Zap className='text-amber-400 group-hover:text-black w-4 md:w-7'/>
                            </div>
                            <h1 className="text-slate-200 font-semibold md:text-xl">Conscious Sourcing</h1>
                            <p className="text-slate-400 text-xs md:text-sm font-extralight max-w-lg">We partner exclusively with sustainable farms that respect both the land and the laborers who harvest our raw ingredients.</p>
                        </motion.div>
                        <motion.div initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}} className='bg-transparent rounded-lg border border-gray-800 transition-colors group hover:border-amber-200 grid grid-cols-1 gap-3 p-6'>
                            <div className='w-8 h-8 md:w-12 md:h-12 rounded-full bg-amber-300/20 group-hover:bg-amber-300 flex justify-center items-center'>
                                <FlaskConical className='text-amber-400 group-hover:text-black w-4 md:w-7'/>
                            </div>
                            <h1 className="text-slate-200 font-semibold ">Pure Formulation</h1>
                            <p className="text-slate-400 text-xs md:text-sm font-extralight max-w-lg">Zero synthetic stabilizers. Our elixirs are crafted using ancient maceration techniques for purity and depth.</p>
                        </motion.div>
                        <motion.div initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8, delay:0.4}} className='bg-transparent rounded-lg border border-gray-800 transition-colors group hover:border-amber-200 grid grid-cols-1 gap-3 p-6'>
                            <div className='w-8 h-8 md:w-12 md:h-12 rounded-full bg-amber-300/20 group-hover:bg-amber-300 flex justify-center items-center'>
                                <UsersRound className='text-amber-400 group-hover:text-black w-4 md:w-7'/>
                            </div>
                            <h1 className="text-slate-200 font-semibold ">Diverse Creators</h1>
                            <p className="text-slate-400 text-xs md:text-sm font-extralight max-w-lg">We foster an environment where voices from all backgrounds contribute to the future of olfactory art.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className='bg-slate-50'>
                <div className='container max-w-7xl px-8 py-14 mx-auto grid grid-cols-1 gap-5'>
                    <span className='text-amber-400 text-[10px] lg:text-sm font-semibold tracking-[0.3em] italic'>Our Visionaries</span>
                    <div className='grid grid-cols-1 gap-3 mt-1 md:flex md:justify-between md:items-baseline-last'>
                        <h1 className='text-2xl lg:text-3xl font-light md:max-w-1/3'>The Hands Behind the <span className='font-bold'>Fragrance.</span></h1>
                        <p className='text-xs text-slate-500'>A collective of botanists, chemists, and artists dedicated to the sensory experience.</p>
                    </div>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 mt-4 lg:grid-cols-3'>
                        {
                            stackHolders.map((item, idx) => (
                                <motion.div key={item.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8, delay:idx*0.1}}>
                                    <Card className='overflow-hidden h-full hover:-translate-y-2 hover:shadow-xl transition-all'>
                                        <img className='grayscale-100 hover:grayscale-0 hover:scale-105 transition-all duration-500' src={item.photo} alt="julian" />
                                        <CardHeader>
                                            <span className='text-lg font-semibold'>{item.name}</span>
                                            <p className='text-amber-400 '>{item.position}</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className='text-xs text-slate-500'>{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))
                        }

                        
                    </div>
                </div>
            </section>            
        </>
    )
}