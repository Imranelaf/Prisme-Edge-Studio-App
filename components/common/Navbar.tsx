import Link from 'next/link'
import { auth, signIn, signOut } from '../../auth'

export const Navbar = async () => {
    const session = await auth()
    console.log(session)

    return (
        <>
            <div className="w-full min-h-[8vh] h-fit flex flex-row justify-around border-2 border-black shadow-md ">
                <div className="logo flex h-full min-h-[8vh] w-fit justify-center p-3 bg-brown-700 rounded-b-lg">
                    Prisme Edge
                </div>
                <div className="btns flex flex-col h-full min-h-[8vh] w-fit p-3 relative justify-center rounded-b-lg">
                    <ul className="flex flex-row justify-center">
                        <Link href="#" className="keepmargin mx-4 h-full min-h-[8vh]  w-fit px-4 pt-3 hover:bg-red-700 hover:text-white hover:scale-105 transition-transform duration-200 ease-in-out rounded">
                            Home
                        </Link>
                        <Link href="#" className="keepmargin mx-4 h-full min-h-[8vh] w-fit px-4 pt-3 hover:bg-red-700 hover:text-white hover:scale-105 transition-transform duration-200 ease-in-out rounded">
                            Games
                        </Link>
                        <Link href="#" className="keepmargin mx-4 h-full min-h-[8vh] w-fit px-4 pt-3 hover:bg-red-700 hover:text-white hover:scale-105 transition-transform duration-200 ease-in-out rounded">
                            About
                        </Link>
                        {session && session?.user ? (
                            <form
                                action={async () => {
                                    "use server"
                                    await signOut()
                                }}
                                className="inline-block mx-4"
                            >
                                <button
                                    type="submit"
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
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
                                className="inline-block mx-4"
                            >
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 py-px-3 mt-1 rounded"
                                >
                                    Sign in with Google
                                </button>
                            </form>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}
