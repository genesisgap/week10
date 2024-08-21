import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <ul className='flex justify-around capitalize font-bold items-center h-20 bg-black text-gray-700 text-lg'>

            <Link href={'/'}>
            <li className="hover:text-green-500">home</li>
            </Link>

            <Link href={'/movies'}>
            <li className="hover:text-green-500">movies</li>
            </Link>

            <Link href={'/about'}>
            <li className="hover:text-green-500">about us</li>
            </Link>

            <Link href={'/contact'}>
            <li className="hover:text-green-500">contact us</li>
            </Link>

            <Link href={'/more'}>
            <li className="hover:text-green-500">more</li>
            </Link>

        </ul>
    </nav>
  )
}
