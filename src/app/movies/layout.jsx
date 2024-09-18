import { Roboto } from "next/font/google";

const sat = Roboto({ subsets: ["latin"] , weight: ['400']});

export default function MovieLayout({children}) {
  return (
    
    <div className={sat.className} >
        {children}
    </div>
  )
}
