import Banner from "./Banner";
import CustomerReviews from "./CustomerReviews";
import Products from "./Products";
import SportContainer from "./SportContainer";

const Home = () => {
  return (
    <div className="">
      {/* banner section  */}
      <section className="px-5">
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
      {/* CustomerReviews section  */}
      <section>
        <CustomerReviews></CustomerReviews>
      </section>
    </div>
  );
};

export default Home;
