import Banner from "./Banner";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      {/* banner section  */}
      <section>
        <Banner></Banner>
      </section>
      {/* products section  */}
      <section>
        <Products></Products>
      </section>
    </div>
  );
};

export default Home;
