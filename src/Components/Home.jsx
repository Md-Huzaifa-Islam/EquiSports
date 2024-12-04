import Banner from "./Banner";
import Products from "./Products";
import SportContainer from "./SportContainer";

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
      {/* sports category section  */}
      <section>
        <SportContainer></SportContainer>
      </section>
    </div>
  );
};

export default Home;
