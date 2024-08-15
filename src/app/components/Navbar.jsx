import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <ul className='flex justify-around capitalize items-center h-36 bg-slate-600 text-white text-lg'>

            <Link href={'/'}>
            <li>home</li>
            </Link>

            <Link href={'/gallery'}>
            <li>gallery</li>
            </Link>

            <Link href={'/about us'}>
            <li>about us</li>
            </Link>

            <Link href={'/contact us'}>
            <li>contact us</li>
            </Link>

            <Link href={'/help'}>
            <li>help</li>
            </Link>

        </ul>
    </nav>
  )
}
