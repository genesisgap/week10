export const metadata = {
  title: "About | Movie Planet App",
  description: "Learn about | A movie application",
  keywords: 'nollywood, hollywood, chinese movie, bollywood, animations'
};

export default function Layout({ children }) {
    return (
        <div>
            <h1 className='bg-pink-800 h-screen flex flex-col text-5xl items-center justify-center text-white uppercase font-bold'>about page</h1>
            {children}
        </div>

    )
}