import { SiWondersharefilmora } from "react-icons/si";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandDisney } from "react-icons/tb";
import { SiNetlify } from "react-icons/si";
import Link from "next/link";



export const metadata = {
  title: "About | Movie Pop",
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
                <h1 className="text-lg md:text-2xl font-semibold  text-blue-700 leading-normal">Welcome!</h1>
                <p className="text-sm md:text-md leading-tight">
                Welcome to Movie Pop, your go-to platform for high-quality movies for free. Whether you’re into timeless classics or the latest TV hits, Movie Pop offers a wide range of entertainment that’s available twenty four seven. With just a click, you can explore our extensive collection and start watching today!
                </p>
              </div>
            </li>

          
            <li className="flex gap-4 items-start">
              <FaArrowAltCircleRight size={30} className="mt-1" />
              <div className="w-96">
                <h1 className="text-lg md:text-2xl font-semibold  text-blue-700 leading-normal">Why Choose Movie Pop?</h1>
                <p className="text-sm md:text-md leading-tight">
                Movie Pop has become a favorite among streaming enthusiasts, offering free, easy access to a wide variety of quality films and TV shows. Here’s what makes Movie Pop stand out:

                <br />

                <br />

                - Extensive Movie Library: From old-time favorites to trending titles, Movie Pop's collection offers something for everyone.
                <br />

                <br />
                - Crystal-Clear Streaming: Enjoy high-definition streaming for an immersive viewing experience.
                Completely Free: No subscriptions, no hidden fees—Movie Pop provides entertainment without breaking the bank.
                <br />

                <br />
                - Simple Navigation: The intuitive interface ensures effortless browsing and quick access to all your favorite content.
                <br />

                <br />
                - Multilingual Options: With subtitles available in both English and Spanish, Movie Pop caters to diverse audiences.
                <br />

                <br />
                -Constant Updates: New movies and TV shows are added regularly to keep the content fresh and exciting.
                </p>
              </div>
            </li>

        
            <li className="flex gap-4 items-start">
              <FaArrowAltCircleRight size={30} className="mt-1" />
              <div className="w-96">
                <h1 className="text-lg md:text-2xl font-semibold text-blue-700 leading-normal">Frequently Asked Questions</h1>
                <p className="text-sm md:text-md leading-tight">
                - Is it possible to watch Movie Pop  content offline?
                <br />
                <br />
                   Movie Pop primarily supports online streaming. However, some titles may offer offline viewing options. For further details, refer to the platform’s terms or contact their support team.
                   <br />
                   <br />
                - How does Movie Pop compare to other free streaming services?
                <br />
                <br />
                  Movie Pop shines for its mix of indie films and classic titles, making it a great alternative to paid services. Though every free platform offers different content, Movie Pop is known for its diverse selection and user-friendly interface.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <br />


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
              <SiNetlify size={30} className="mt-1" />
              <div className="w-96">
                <h1 className="text-lg md:text-2xl font-semibold leading-normal">Netlify</h1>
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
