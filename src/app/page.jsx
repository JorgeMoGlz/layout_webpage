import { 
  NavBar, 
  Hero,
  Work,
  RaiServices,
  RaiProducts,
  About,
  Faq,
  Contact,
} from "@/components";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.layout}>
        <Hero />
        <Work />
        <RaiServices />
        <RaiProducts />
        <About />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
