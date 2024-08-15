export const metadata = {
  title: "About | Create A Movie App",
  description: "Learn about | A Movie Application",
  keywords: 'nollywood, hollywood'
};

export default function AboutLayout({ children }) {
    return (
        <div>
            <h1>about page</h1>
            {children}
        </div>

    )
}