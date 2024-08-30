export const metadata = {
    title: "More | Reviews",
    description: "More | Reviews",
    keywords: 'reviews'
  };

export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: 'orange', padding: 170}}>
      <h1 style={{ color: 'darkblue', fontSize: 100,  }}>Inspire..</h1>
      {children}
    </div>
  )
}
