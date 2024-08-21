export const metadata = {
    title: "More | Reviews",
    description: "More | Reviews",
    keywords: 'reviews'
  };

export default function Layout({ children }) {
  return (
    <div>
        <h1>More Information On Movie Reviews</h1>
        {children}
    </div>
   
  )
}
