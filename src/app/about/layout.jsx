import { SiWondersharefilmora } from "react-icons/si";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandDisney } from "react-icons/tb";
import Link from "next/link";



export const metadata = {
  title: "About | Movie Planet App",
  description: "Learn about | A movie application",
  keywords: 'nollywood, hollywood, chinese movie, bollywood, animations',
};

export default function Layout({ children }) {
  return (
    <div className="text-white h-auto w-auto md:flex md:flex-wrap items-center shadow-xl md:justify-center l bg-black p-12 ">
      <div>
        <h2 className="text-2xl md:text-5xl capitalize font-bold">About Us</h2>

        <div className="md:flex flex-wrap flex-col md:flex-row items-start gap-10 mt-8">
          
          <div className="md:pr-20">
          <SiWondersharefilmora size={200} color="blue" />
           </div>

        
          <ul className="space-y-8">
           
            <li className="flex gap-4 items-start">
              <FaArrowAltCircleRight size={30} className="mt-1" />
              <div className="w-96">
                <h1 className="text-lg md:text-2xl font-semibold leading-normal">Mission</h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint error voluptas et. Odio ad iusto voluptatum provident laudantium. Modi dolores fugit dolor labore nam atque illo porro officiis facilis.
                </p>
              </div>
            </li>

          
            <li className="flex gap-4 items-start">
              <FaArrowAltCircleRight size={30} className="mt-1" />
              <div className="w-96">
                <h1 className="text-lg md:text-2xl font-semibold leading-normal">Vision</h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint error voluptas et. Odio ad iusto voluptatum provident laudantium. Modi dolores fugit dolor labore nam atque illo porro officiis facilis.
                </p>
              </div>
            </li>

        
            <li className="flex gap-4 items-start">
              <FaArrowAltCircleRight size={30} className="mt-1" />
              <div className="w-96">
                <h1 className="text-lg md:text-2xl font-semibold leading-normal">Purpose</h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint error voluptas et. Odio ad iusto voluptatum provident laudantium. Modi dolores fugit dolor labore nam atque illo porro officiis facilis.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <br />

      {/* credits page area */}

     <div className="md:flex-wrap">
        <h2 className="text-2xl md:text-6xl capitalize font-bold">Credits</h2>

        <div className="md:flex flex-wrap flex-col md:flex-row items-start gap-10 mt-8">
          
          <div className="md:pr-20">
          <SiWondersharefilmora size={200} color="blue" />
           </div>

        
          <ul className="space-y-8">
           
            <li className="flex gap-4 items-start">
              <FaArrowAltCircleRight size={30} className="mt-1" />
              <div className="w-96">
                <h1 className="text-lg md:text-2xl font-semibold leading-normal">Univelcity</h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint error voluptas et. Odio ad iusto voluptatum provident laudantium. Modi dolores fugit dolor labore nam atque illo porro officiis facilis.
                </p>
              </div>
            </li>

          
            <li className="flex gap-4 items-start">
              <FaGithub size={30} className="mt-1" />
              <div className="w-96">
                <h1 className="text-lg md:text-2xl font-semibold leading-normal">Github</h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint error voluptas et. Odio ad iusto voluptatum provident laudantium. Modi dolores fugit dolor labore nam atque illo porro officiis facilis.
                </p>
              </div>
            </li>

        
            <li className="flex gap-4 items-start">
              <IoLogoVercel size={30} className="mt-1" />
              <div className="w-96">
                <h1 className="text-lg md:text-2xl font-semibold leading-normal">Vercel</h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint error voluptas et. Odio ad iusto voluptatum provident laudantium. Modi dolores fugit dolor labore nam atque illo porro officiis facilis.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <TbBrandDisney size={30} className="mt-1" />
              <div className="w-96">
                <h1 className="text-lg md:text-2xl font-semibold leading-normal">Disney UK</h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint error voluptas et. Odio ad iusto voluptatum provident laudantium. Modi dolores fugit dolor labore nam atque illo porro officiis facilis.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <FaArrowAltCircleRight size={30} className="mt-1" />
              <div className="w-96">
                <h1 className="text-lg md:text-2xl font-semibold leading-normal">Frontend June24 Cohorts Collegues</h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint error voluptas et. Odio ad iusto voluptatum provident laudantium. Modi dolores fugit dolor labore nam atque illo porro officiis facilis.
                </p>
              </div>
            </li>
            
             <br />

            <Link href={'/'}>
            <button className='bg-blue-700 justify-center hover:opacity-85 capitalize hover:scale-105 md:px-4 mx-2 md:py-2 duration-300 mt-0 font-semibold rounded-md text-white'>go to home </button> 
            </Link> <Link href={'/contact'}>
            <button className='bg-orange-700 justify-center hover:opacity-85 capitalize hover:scale-105 md:px-4 mx-2 md:py-2 duration-300 mt-0 font-semibold rounded-md text-white'>contact us</button> 
            </Link>

            


          </ul>


          </div>
        </div>

        
    
      

      {children}
    </div>
  );
}
