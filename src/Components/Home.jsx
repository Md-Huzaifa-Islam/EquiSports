import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CustomerReviews from "./CustomerReviews";
import FaqSection from "./FaqSection";
import Products from "./Products";
import SportContainer from "./SportContainer";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>{`Home | EquiSports`}</title>
      </Helmet>
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
      {/* CustomerReviews section  */}
      <section>
        <CustomerReviews></CustomerReviews>
      </section>
      <section>
        <FaqSection></FaqSection>
      </section>
    </div>
  );
};

export default Home;
