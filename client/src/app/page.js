import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductScetion";

export default function Home() {
  return (
    <div>
      <section className="">
        <Banner />
      </section>
      <section>
        <ProductSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
