
import { Menu, X } from 'lucide-react';
import { useState } from 'react'
import { Button } from '../ui/button';
import { Link, NavLink } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
export default function Navbar({children}:React.PropsWithChildren){
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About Us', href: '/about-us' },
        { name: 'Products', href: '/products' },
        { name: 'Teams', href: '/teams' },
        { name: 'Blog', href: '/blog' },
      ];

    return (
        <>
            <nav className='sticky w-full top-0 z-50 bg-white/85 backdrop-blur-md border-b border-white/20 shadow-sm'>
                <div className='flex justify-between items-center px-5 py-2 md:px-10 md:py-4'>
                    <div className='flex justify-between items-center w-full'>

                        <Link to="/" onClick={() => setIsOpen(false)} >
                            <div className='flex flex-col items-center justify-center max-w-2xl'>
                                    <span className='text-amber-400 tracking-[0.3em]  font-bold'>ELIXIR</span>
                                    <span className='text-slate-600 tracking-[0.3em] text-[8px]'>THE ART OF ESSENCE</span>
                            </div>
                        </Link>
                        
                        {/* Link navbar Desktop*/}
                        <div className='space-x-3 hidden md:flex'>
                            {
                                navLinks.map((item) => (
                                    <NavLink 
                                    key={item.name}
                                    to={item.href}
                                    className={({ isActive }) => isActive ? 'text-amber-400 text-lg font-bold' : 'text-slate-400 text-lg hover:text-amber-300'}>
                                        {item.name}
                                    </NavLink>
                                ))
                            }
                        </div>

                    </div>
                    {/* Menu Mobile */}
                    <Button onClick={() => setIsOpen(!isOpen)} className='bg-transparent md:hidden'>
                        {isOpen ? <X className='text-black'/> : <Menu className='text-black'/>}
                    </Button>
                </div>


                {/* Mobile */}
                {isOpen && (
                    <div className='md:hidden'>
                            {
                                navLinks.map((item)=> (
                                    <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className='bg-amber-400 text-amber-50 font-bold block text-center p-2'
                                    onClick={() => setIsOpen(false)} 
                                    >
                                        {item.name}
                                    </NavLink>
                                ))
                            }
                    </div>
                )}
            </nav>
            <div>
                {children}
            </div>
            {/* Footer */}
            <section className='bg-slate-900'>
                <div className='container max-w-5xl px-4 py-12 mx-auto md:px-8 grid grid-cols-1 gap-5 md:flex md:justify-between md:items-center'>
                    <div className='space-y-5 md:w-1/2'>
                        <div className='flex flex-col justify-start items-center max-w-fit'>
                            <span className='text-amber-400 tracking-[0.3em] font-bold'>ELIXIR</span>
                            <span className='text-slate-200 tracking-[0.3em] text-[8px]'>THE ART OF ESSENCE</span>
                        </div>
                        
                        <div className='space-x-3 space-y-5'>
                            <p className='text-xs text-slate-400 md:text-sm'>Sign up for our newsletter to receive exclusive offers, early access to new releases, and olfactory inspiration.</p>
                            <Input placeholder="Email Address" type="email" className="w-47 border-slate-600"/>
                            <Button className='bg-amber-400 text-slate-50 w-18'>Join</Button>
                        </div>
                    </div>
                    <div>
                        <span className='text-slate-50 font-bold'>Quick Links</span>
                        <div className='grid grid-cols-1 gap-2 mt-5'>
                            {
                                navLinks.map((item) => (
                                    <Link
                                    key={item.name}
                                    to={item.href}
                                    className='text-slate-400 text-xs md:text-sm'>
                                    {item.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    
                </div>
                <Separator className='bg-slate-800'/>
                <p className='text-slate-400 text-xs text-center py-5'>© 2024 Elixir Perfumes. All Rights Reserved.</p>
            </section>
        </>
    )
}