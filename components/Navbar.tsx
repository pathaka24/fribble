import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProvider from './AuthProvider'

const Navbar = () => {
    const session = {}
    return (
        <nav className='flex justify-between items-center py-5 px-8 border-b border-nav-border gap-4'>
            <div className='flex-1 gap-10 flex items-center justify-start'>
                <Link href='/'>
                    <Image
                        src='/assets/logo.svg'
                        width={115}
                        height={43}
                        alt='Flexible'
                    />
                </Link>
                <ul className='xl:flex hidden text-small gap-7'>
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='gap-4 flex justify-center items-center'>
                {session ? (
                    <>
                        UserPhoto
                        <Link href='/crrate-project'>
                            Share Work
                        </Link>
                    </>
                ) : (
                    <AuthProvider />
                )}
            </div>
        </nav>
    )
}

export default Navbar