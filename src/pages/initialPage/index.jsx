import Banner from "components/Banner";
import styles from "./InitialPage.module.scss";

import Footer from "components/Footer";
import Gallery from "components/Gallery";
import Header from "components/Header";
import Menu from "components/Menu";
import Popular from "components/Popular";

export default function InitialPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.main}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.gallery}>
                    <Gallery />
                    <Popular />
                </div>
            </main>
            <Footer />
        </>
    )
}