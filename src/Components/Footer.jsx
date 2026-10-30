import Animated from './Animated'
import { quickLinks, sitemapLinks, socialLinks } from '../data/data'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='px-auto relative mt-44 overflow-hidden'>
            <div className='max-w-7xl mx-auto'>

                {/* row */}

                <div className='flex flex-wrap gap-6 justify-between pb-8'>

                    {/* Column 1 :- brand and social */}

                    <div className='flex flex-col items-start text-left'>
                        <Animated>
                            <img src='/assets/logo.svg' alt='logo' />
                        </Animated>
                        <Animated delay={0.2}>
                            <p className='mt-3 text-sm-5.5 text-zinc-600 max-w-81.25'>
                                We serve freshly prepared dishes made with quality ingredients, bringing you a delightful dining expe
                            </p>
                        </Animated>
                        <div className='flex items-center gap-1.5 mt-6'>
                            {socialLinks.map((item, index) => (
                                <Animated key={index} delay={index * 0.05}>
                                    <a href={item.href} className='size-7.5 rounded-full border border-slate-300 grid place-content-center'>{item.icon}</a>
                                </Animated>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 :- Queck link */}

                    <div>
                        <p className='font-medium mb-5'>Quick links</p>
                        <div className='flex flex-col gap-2.5'>
                            {quickLinks.map((link, index) => (
                                <Animated key={link.name} delay={index * 0.05}>
                                    <a href={link.href} className='text-zinc-600 hover:text-zinc-500'>
                                        {link.name}
                                    </a>
                                </Animated>
                            ))}
                        </div>
                    </div>

                    {/* Column 3 :- Get in touch */}

                    <div>
                        <p className='font-medium mb-5'>Get in Tuoch</p>
                        <div className='space-y-2'>
                            <Animated>
                                <a href='mailto:aadarshyadav5050Qgmail.com' className='flex items-center gap-1 text-zinc-600 hover:text-zinc-500'>
                                    <Mail size={20} className='shrink-0' />
                                    aadarshyadav5050Qgmail.com
                                </a>
                            </Animated>
                            <Animated delay={0.2}>
                                <a href='tel:959-8443-396' className='flex items-center gap-1 text-zinc-600 hover:text-zinc-500'>
                                    <Phone size={20} className='shrink-0' />
                                    959-8443-396
                                </a>
                            </Animated>
                        </div>
                    </div>

                    {/* Coiumn 4:- Sitemap */}

                    <div>
                        <p className='font-medium mb-5'>Sitemap</p>
                        <div className='flex flex-col gap-2.5'>
                            {sitemapLinks.map((link, index) => (
                                <Animated key={link.name} delay={index * 0.05}>
                                    <a href={link.href} className='text-zinc-600 hover:text-zinc-500'>
                                        {link.name}
                                    </a>
                                </Animated>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}

                <div className='border-t text-zinc-500 border-slate-200 py-4.5 flex justify-between items-center'>
                    <p>@ 2026 . All Right Reserved .</p>
                    <p>Desined By <a href='#'> Aadarsh Yadav</a></p>
                </div>
            </div>

            {/* Watermark Logo backdrop */}

            <div className='absolute inset-0 text-center select-none -z-1 pointer-event-none'>
                <span className='text-[300px] tracking-wide font-urbanist font-semibolt text-zinc-100/70'>Restro</span>
            </div>
        </footer>
    )
}

export default Footer