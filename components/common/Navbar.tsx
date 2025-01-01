"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { handleSignIn, handleSignOut } from '../../actions'
import { usePathname } from 'next/navigation'
import { Session } from 'next-auth'

type NavbarProps = {
    session: Session | null;
}

export const Navbar = ({ session }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    return (
        <nav className="w-full min-h-[8vh] h-fit bg-white shadow-md border-b border-gray-200 relative z-50">
            <div className="px-4 md:px-8 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <div className="text-2xl font-bold text-gray-800 transition-transform duration-200 hover:translate-x-1 hover:translate-y-[-1px] cursor-pointer">
                            Prisme Edge
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {session && (
                            <Link href="/dashboard" className="text-lg font-medium text-gray-700 hover:text-red-700 hover:scale-105 transition-transform duration-200">
                                Dashboard
                            </Link>
                        )}
                        <Link href="/" className="text-lg font-medium text-gray-700 hover:text-red-700 hover:scale-105 transition-transform duration-200">
                            Home
                        </Link>
                        <Link href="/games" className="text-lg font-medium text-gray-700 hover:text-red-700 hover:scale-105 transition-transform duration-200">
                            Games
                        </Link>
                        <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-red-700 hover:scale-105 transition-transform duration-200">
                            About
                        </Link>
                        {session ? (
                            <form action={handleSignOut}>
                                <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition-transform duration-200 hover:scale-105">
                                    Sign Out
                                </button>
                            </form>
                        ) : (
                            <form action={handleSignIn}>
                                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-transform duration-200 hover:scale-105">
                                    Sign in with Google
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 absolute top-full left-0 right-0 bg-white shadow-md z-50">
                        <div className="flex flex-col space-y-4 p-4">
                            {session && (
                                <Link href="/dashboard" className="text-lg font-medium text-gray-700 hover:text-red-700 transition-colors duration-200">
                                    Dashboard
                                </Link>
                            )}
                            <Link href="/" className="text-lg font-medium text-gray-700 hover:text-red-700 transition-colors duration-200">
                                Home
                            </Link>
                            <Link href="/games" className="text-lg font-medium text-gray-700 hover:text-red-700 transition-colors duration-200">
                                Games
                            </Link>
                            <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-red-700 transition-colors duration-200">
                                About
                            </Link>
                            {session ? (
                                <form action={handleSignOut}>
                                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition-colors duration-200">
                                        Sign Out
                                    </button>
                                </form>
                            ) : (
                                <form action={handleSignIn}>
                                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-colors duration-200">
                                        Sign in with Google
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
