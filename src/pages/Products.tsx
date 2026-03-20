import midnight from "@/assets/midnight oud.png"
import azure from "@/assets/azure coast.png"
import amber from "@/assets/amber enigma.png"
import productImg from "@/assets/perfume products.png"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
export default function Products () {
    type TProduct = {
        photo:string;
        name:string;
        price:number;
        description:string;
        testimonial:string;
        nameTestimonial:string;
    }

    const dataProducts:TProduct[] = [
        {
            photo:midnight,
            name:'Midnight Oud',
            price:240,
            description:'A mysterious blend of rare Agarwood, smoked leather, and wild damask rose. Intense, seductive, and timeless.',
            testimonial:'"The complexity of Midnight Oud is unmatched. It lingers beautifully throughout the evening, drawing endless compliments."',
            nameTestimonial:'Andrew'
        },
        {
            photo:azure,
            name:'Azure Coast',
            price:185,
            description:'Capturing the essence of the Mediterranean with sea salt, Sicilian lemon, and sun-drenched cedarwood.',
            testimonial:'"It\'s like summer in a bottle. Fresh yet sophisticated. My absolute go-to for daytime elegance."',
            nameTestimonial:'Joseph'
        },
        {
            photo:amber,
            name:'Amber Enigma',
            price:210,
            description:'A warm, enveloping scent featuring Madagascar vanilla, toasted sandalwood, and spiced amber resin.',
            testimonial:'"The warmest, most comforting scent I\'ve ever worn. The Amber Enigma is truly a masterpiece of balance."',
            nameTestimonial:'Tony'
        }
    ]

    return (
        <>  
            <section className="bg-amber-50">
                <div className="px-8 py-12 mx-auto max-w-7xl md:px-12 grid grid-cols-1 gap-20">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <span className='text-amber-400 text-[10px] lg:text-sm font-bold tracking-wide'>THE ART OF ESSENCE</span>
                        <h1 className="font-bold text-center text-2xl md:text-3xl">Curated Fragrances for the Discerning Soul</h1>
                        <p className="text-slate-700 text-center text-sm">Discover our signature collection of artisanal elixirs, hand-poured and aged to perfection using the world's rarest botanical extracts.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {
                            dataProducts.map((item, idx) => (
                                <motion.div key={item.name} initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8, delay:idx*0.1}}>
                                    <Card className="overflow-hidden h-full hover:-translate-y-2 hover:shadow-xl transition-all">
                                        <img src={item.photo} alt={item.name} />
                                        <CardHeader>
                                            <div className="flex justify-between items-center">
                                                <h1 className="font-bold text-lg">{item.name}</h1>
                                                <span className="text-amber-500 font-semibold">${item.price}</span>
                                            </div>
                                            <p className="text-slate-500 text-xs">{item.description}</p>
                                        </CardHeader>
                                        <CardContent className="h-32">
                                            <Separator className="mb-3"/>
                                            <p className="text-slate-600 italic text-sm mb-2">{item.testimonial}</p>
                                            <span className="font-bold">— {item.nameTestimonial}</span>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full hover:bg-amber-500 transition-colors">Buy Now</Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))
                        }
                        
                    </div>
                </div>
            </section>

            <section className="bg-[#1a1a1a]">
                    <div className="px-8 py-12 mx-auto max-w-7xl md:px-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
                        <motion.div initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} className="grid grid-cols-1 gap-5">
                            <h1 className="text-slate-50 text-xl font-extrabold md:text-5xl">Tailored Fragrance Experience</h1>
                            <p className="text-slate-400 text-sm md:text-lg">Beyond our core collection, we offer exclusive services designed to elevate your personal olfactory journey. Experience the pinnacle of luxury perfumery.</p>
                            <div className="flex gap-5">
                                <div>
                                    <div className="border w-8 h-8 border-amber-300 rounded-full text-amber-300 font-semibold text-sm flex justify-center items-center">
                                        <span>01</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-lg font-bold text-slate-50">Bespoke Creation</span>
                                    <p className="text-slate-400 text-xs mt-2">Work directly with our Master Perfumer to design a scent that is uniquely yours. A 6-month journey into the art of essence.</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div>
                                    <div className="border w-8 h-8 border-amber-300 rounded-full text-amber-300 font-semibold text-sm flex justify-center items-center">
                                        <span>02</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-lg font-bold text-slate-50">Scent Profiling</span>
                                    <p className="text-slate-400 text-xs mt-2">Discover your olfactory DNA through a private consultation and curated selection of notes that match your lifestyle.</p>
                                </div>
                            </div>
                            <div>
                                <Button className="bg-[#1a1a1a] text-amber-300 border-amber-300 px-4 py-6 hover:text-black hover:bg-amber-300 transition-colors text-xs">BOOK A CONSULTATION</Button>
                            </div>
                        </motion.div>
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}}>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-amber-300/20 rounded-lg blur group-hover:bg-amber-300/30 transition duration-1000"></div>
                                <img src={productImg} alt="product image" className="relative rounded-lg w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            </div>
                        </motion.div>
                    </div>
            </section>
        </>
    )
}