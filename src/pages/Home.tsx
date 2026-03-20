import luxuriousElixir from '@/assets/luxurious elixir.png'
import expertise from '@/assets/expertise.png'
import bottleLeaf from '@/assets/bottle-leaf.png'
import midnigh from '@/assets/midnight oud.png'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardHeader} from '@/components/ui/card'

import { useState, useEffect }from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import { CircleCheckBig, Quote } from 'lucide-react';
import { Link } from 'react-router'
export default function Home () {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const count:number= 2
   
    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap() + 1)
    
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <>
            <section className='h-screen bg-amber-50'>
                <div className='container grid grid-cols-1 p-4 mx-auto max-w-7xl md:px-8 md:grid-cols-2 md:gap-15 md:py-20 md:items-center lg:py-10'>
                    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} className='grid grid-cols-1 gap-5 md:flex md:flex-col'>
                        <span className='text-amber-400 text-xs lg:text-sm font-bold tracking-[0.3em]'>NEW COLLECTION</span>
                        <div>
                            <h1 className='text-4xl font-light lg:text-5xl'>Devine Your</h1>
                            <span className='text-4xl font-bold lg:text-5xl'>Signature</span>
                        </div>
                        <p className='text-sm text-slate-500 lg:text-lg'>Crafted with the rarest botanicals, Elixir creates scents that linger in the memory and define the soul.</p>
                        <Button className='p-4 text-xs font-bold max-w-48 bg-amber-400 lg:text-sm lg:p-5 hover:bg-amber-500'>EXPLORE FRAGRANCES</Button>
                    </motion.div>
                    <motion.div initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} className='my-5'>
                        <img src={luxuriousElixir} alt="luxurious elixir" />
                    </motion.div>
                </div>

            </section>

            <section className='bg-slate-50'>
                <div className='container grid grid-cols-1 px-4 py-12 mx-auto max-w-7xl md:px-8 gap-15 md:grid-cols-2'>
                    <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} transition={{duration:0.8}} className='grid grid-cols-1 gap-5 '>

                        <span className='text-amber-400 text-xs md:text-lg font-bold tracking-[0.3em]'>OUR HERITAGE</span>
                        <div>
                            <h1 className='text-3xl font-light md:text-4xl'>Beyond the Bottle:</h1>
                            <span className='text-3xl font-bold md:text-4xl'>The Elixir Legacy</span>
                        </div>
                        <p className='text-xs font-light text-slate-500 md:text-sm lg:text-lg'>Founded in 1924 in the historic hills of Grasse, Elixir began as a small botanical laboratory dedicated to the purest extraction of jasmine and rose. Over a century later, we remain a family-owned house where the secrets of olfactory alchemy are passed down through generations.</p>
                        <p className='text-xs font-light text-slate-500 md:text-sm lg:text-lg'>Our team is led by a collective of <span className='italic font-bold'>Master Perfumers</span>, artisans who spend years developing a single formula. They don't just create scents; they compose liquid poems that capture the ephemeral beauty of nature.</p>
                        
                    </motion.div>
                    
                    <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} transition={{duration:0.8}}  className='grid grid-cols-2 gap-4'>
                        <div className='grid grid-cols-1 gap-4 pb-5'>
                            <div>
                                <Card className='p-6'>
                                    <span className='text-xs font-bold text-amber-400'>EXPERTISE</span>
                                    <p className='text-xs text-slate-500'>Our Master Perfumers combine traditional methods with modern molecular science to achieve unprecedented depth.</p>
                                </Card>
                            </div>
                            <div>
                                <img className='rounded-xl' src={expertise} alt="expertise" />
                            </div>
                        </div>
                    
                        <div className='grid items-center grid-cols-1 gap-4 pt-5'>
                            <div>
                                <img className='rounded-xl' src={bottleLeaf} alt="bottleLeaf" />
                            </div>
                            <div>
                                <Card className='p-6'>
                                    <span className='text-xs font-bold text-amber-400'>Sustainability</span>
                                    <p className='text-xs text-slate-500'>From ethically harvested sandalwood to zero-waste packaging, our commitment to the earth is as deep as our fragrance notes.</p>
                                </Card>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className='bg-amber-50'>
                <div className='container grid max-w-lg grid-cols-1 gap-5 mx-auto py-15'>
                    <span className='text-amber-400 text-xs lg:text-sm font-bold tracking-[0.3em] mx-auto'>OUR MISSION</span>
                    <p className='mx-auto text-lg italic font-light text-center md:text-2xl lg:text-3xl'>"To distill the essence of nature into timeless olfactory experiences that empower personal expression."</p>
                </div>
            </section>

            <section>
                <div className='container grid grid-cols-1 gap-5 px-4 py-12 mx-auto max-w-7xl md:px-8 md:grid-cols-2 md:gap-10'>
                    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} className='grid grid-cols-1 gap-5 md:order-2'>
                        <h1 className='text-2xl font-bold md:text-4xl'>The Art of Alchemy</h1>
                        <p className='text-sm text-slate-500 lg:text-lg'>Founded in the heart of the perfume capital, Elixir combines centuries-old distillation techniques with modern chemistry. Every bottle is a result of meticulous sourcing—from the lavender fields of Provence to the sandalwood forests of Mysore.</p>
                        <p className='text-sm text-slate-500 lg:text-lg'>We believe that a fragrance is more than just a scent; it is a narrative of your journey, a quiet declaration of your presence.</p>

                        <div className='grid grid-cols-1 gap-3'>
                            <div className='flex items-center space-x-4'>
                                <CircleCheckBig className='text-amber-400'/>
                                <span className='text-sm font-bold'>100% Sustainably Sourced</span>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <CircleCheckBig className='text-amber-400'/>
                                <span className='text-sm font-bold'>Cruelty-Free Practices</span>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <CircleCheckBig className='text-amber-400'/>
                                <span className='text-sm font-bold'>Artisanal Small-Batch Production</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} className='grid grid-cols-2 gap-3 md:order-1'>
                        <div className='my-5'>
                            <img className='rounded-xl' src={expertise} alt="expertise" />
                        </div>
                        <div className='my-10'>
                            <img className='rounded-xl' src={bottleLeaf} alt="bottleLeaf" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className='bg-slate-100'>
                <div className='container grid max-w-5xl grid-cols-1 gap-10 px-4 py-12 mx-auto md:px-8'>
                    <div>
                        <div>
                            <h1 className='text-2xl font-bold md:text-4xl'>Featured Collection</h1>
                            <p className='text-sm text-slate-500 lg:text-lg'>Curated favorites for the season</p>
                        </div>
                        
                    </div>

                    <motion.div initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}}  className='flex items-center justify-center'>
                        <Card>
                            <img className='max-h-72' src={midnigh} alt="midnight oud" />
                            <CardHeader>
                                <h1>Midnight Oud</h1>
                                <p>A mysterious blend of rare Agarwood, smoked leather, and wild damask rose. Intense, seductive, and timeless.</p>
                            </CardHeader>
                            <CardFooter>
                                <Button className="w-full">
                                    <Link to='/products'>
                                        View All
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </div>
            </section>

            <section className='bg-amber-50'>
                <div className='container max-w-5xl px-4 py-12 mx-auto md:px-8'>
                    <Quote className='mx-auto mb-5 text-amber-400'/>
                    <div className="mx-auto max-w-40 md:max-w-100">
                        <Carousel setApi={setApi} className="w-full ">
                            <CarouselContent>
                                    <CarouselItem>
                                        <div>
                                            <p className='text-lg italic md:text-2xl'>"Elixir has completely changed my perception of fragrance. Every morning, applying 'Amber Nocturne' feels like a ritual of confidence. It's sophisticated, subtle, and truly unique." ~ <span className='font-bold'>Elena Vance</span></p>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div>
                                            <p className='text-lg italic md:text-2xl'>"The complexity of Midnight Oud is unmatched. It lingers beautifully throughout the evening, drawing endless compliments."~ <span className='font-bold'>Julian V., New York</span></p>
                                        </div>
                                    </CarouselItem>                                                             
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <div className="py-2 text-sm text-center text-muted-foreground">
                            {current} of {count}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}