import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="home">
      <h1>A-Square Cuisine Bowl Builder</h1>
      <p>
        Create your own custom meal bowl with your favorite base, protein,
        sauce, side, and drink.
      </p>
      <Link className="button-link" to="/create">
        Start Customizing
      </Link>
    </main>
  )
}

export default Home
