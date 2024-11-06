import Link from 'next/link'
import { auth, signIn, signOut } from '../../auth'

export const Navbar = async () => {
    const session = await auth()
    console.log(session)

    return (
        <nav className="w-full min-h-[8vh] h-fit flex items-center justify-between px-8 py-4 bg-white shadow-md border-b border-gray-200">
            <div className="text-2xl font-bold text-gray-800 transition-transform duration-200 hover:translate-x-1 hover:translate-y-[-1px] cursor-pointer">
                Prisme Edge
            </div>
            <ul className="flex space-x-8">
                <li>
                    <Link href="#" className="text-lg font-medium text-gray-700 hover:text-red-700 hover:scale-105 transition-transform duration-200">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-lg font-medium text-gray-700 hover:text-red-700 hover:scale-105 transition-transform duration-200">
                        Games
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-lg font-medium text-gray-700 hover:text-red-700 hover:scale-105 transition-transform duration-200">
                        About
                    </Link>
                </li>
                <li>
                    {session && session.user ? (
                        <form
                            action={async () => {
                                "use server"
                                await signOut()
                            }}
                        >
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition-transform duration-200 hover:scale-105"
                            >
                                Sign Out
                            </button>
                        </form>
                    ) : (
                        <form
                            action={async () => {
                                "use server"
                                await signIn("google")
                            }}
                        >
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-transform duration-200 hover:scale-105"
                            >
                                Sign in with Google
                            </button>
                        </form>
                    )}
                </li>
            </ul>
        </nav>
    )
}
