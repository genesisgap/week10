export const metadata = {
  title: "About | Movie Planet App",
  description: "Learn about | A movie application",
  keywords: 'nollywood, hollywood, chinese movie, bollywood, animations'

  
};

export default function Layout({ children }) {
    return (
        <div> 
            <h1 className='bg-gray-800 flex flex-col text-7xl items-center justify-center text-gray-400 capitalize font-bold'>about us </h1>
            <p className=' h-60 bg-black text-gray-400 text-1xl text-center justify-center flex flex-col'>Movie Arcade is your source for movie reviews and movie ratings to help maximize your movie-going-experience. Our easy to use movie reviews and movie ratings are based on scores and opinions from respected movie critics, family advocacy groups and movie fans like you.Movie Arcade is your source for movie reviews and movie ratings to help maximize your movie-going-experience. Our easy to use movie reviews and movie ratings are based on scores and opinions from respected movie critics, family advocacy groups and movie fans like you. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore minus dolores consectetur velit quasi esse porro doloremque itaque similique nobis cupiditate saepe sint quo omnis voluptatem, error sed officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est dolorem veritatis ab, laboriosam repudiandae saepe accusantium fugit. Ad laudantium nisi qui quos beatae deserunt perferendis voluptatem quae fuga repudiandae.</p>
            {children}
        </div>

    )
}