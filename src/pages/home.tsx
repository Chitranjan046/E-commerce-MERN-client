import { Link } from 'react-router-dom';
import ProductCard from '../components/product-card';

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section>{/* Your section content */}</section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        {/* Corrected closing double quote in the photo prop */}
        <ProductCard
          productId="ChitrANJAN"
          name="acer"
          price={55}
          stock={555}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/71NKq8zV8ML._SX679_.jpg" // Closing double quote added here
        />
      </main>
    </div>
  );
};

export default Home;
