import productHeroImg from '../../assets/productsHero.svg'
import { Button } from '../ui/button'
export default function Home () {
    return (
        <>
            <div className='bg-[#10221A]'>
                
                {/* Hero */}

                <div className="h-screen p-6 space-y-6 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:p-12 lg:space-y-0 lg:gap-6">
                    <div className="mx-auto grid place-items-center relative">
                        <div className="max-w-72 lg:max-w-96 mx-auto absolute inset-0 bg-amber-50 blur-2xl opacity-10 z-0"></div>
                        <img className='max-w-72 lg:max-w-96 relative z-10 rounded-4xl' src={productHeroImg} alt="perfume" />

                    </div>
                    <div className='space-y-4 w-96 lg:w-3xl'>
                        <h3 className='text-emerald-500 font-bold text-sm lg:text-lg'>New Collection 2024</h3>
                        <h2 className='font-extrabold text-emerald-100 text-5xl lg:text-8xl'>The Soul of <span className='text-emerald-500'>Pure Luxury</span></h2>
                        <p className='text-emerald-50 lg:text-2xl'>Crafting olfactory masterpieces that define identity. ELIXIR is more than a scent; it's a legacy of elegance and a commitment to the extraordinary.</p>
                        <div className='space-x-3'>
                            <Button className='border border-black bg-emerald-600 text-emerald-950 font-bold py-6 px-7 hover:bg-emerald-500 lg:text-2xl'>Shop Collection</Button>
                            <Button className='border border-black bg-emerald-950 text-emerald-100 font-bold py-6 px-7 hover:bg-emerald-900 lg:text-2xl'>Our Story</Button>
                        </div>
                    </div>
                </div>
                <div className="h-screen">
                    
                    <h1>Products</h1>

                </div>
                <div className="h-screen">
                    
                    <h1>Testimonials</h1>

                </div>
                <div className="h-screen">
                    
                    <h1>Tagline</h1>

                </div>
            </div>
        </>
    )
}