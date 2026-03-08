
import { Sun, Menu, X } from 'lucide-react';
import { useState } from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
export default function Navbar({children}:React.PropsWithChildren){
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About Us', href: 'about-us' },
        { name: 'Products', href: 'products' },
        { name: 'Teams', href: 'teams' },
        { name: 'Blog', href: 'blog' },
      ];

    return (
        <>
            <nav className='fixed w-full top-0 z-50 bg-emerald-900/30 h-[6vh] backdrop-blur-md border-b border-white/20 shadow-sm'>
                <div className='flex justify-between items-center py-1.5 px-12'>
                    <div className='flex justify-between items-center space-x-5'>

                        <Link to="/">
                            <div className='flex justify-between items-center space-x-2.5'>
                                    <Sun className='text-emerald-500 '/>
                                    <h1 className='text-emerald-300 text-2xl'>Elixir</h1>
                            </div>
                        </Link>
                        
                        {/* Link navbar Desktop*/}
                        <div className='space-x-3 hidden md:flex'>
                            {
                                navLinks.map((item) => (
                                    <Link 
                                    key={item.name}
                                    to={item.href}
                                    className='text-emerald-50 text-lg hover:text-emerald-200'>
                                        {item.name}
                                    </Link>
                                ))
                            }
                        </div>

                    </div>
                    {/* Menu Mobile */}
                    <Button onClick={() => setIsOpen(!isOpen)} className='bg-transparent md:hidden'>
                        {isOpen ? <X className='text-emerald-500'/> : <Menu className='text-emerald-500'/>}
                    </Button>
                </div>


                {/* Mobile */}
                {isOpen && (
                    <div className='md:hidden'>
                            {
                                navLinks.map((item)=> (
                                    <Link
                                    key={item.name}
                                    to={item.href}
                                    className='bg-emerald-800 text-emerald-100 font-bold block text-center p-2'
                                    >
                                        {item.name}
                                    </Link>
                                ))
                            }
                    </div>
                )}
            </nav>
            <div>
                {children}
            </div>
        </>
    )
}