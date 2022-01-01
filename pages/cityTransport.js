import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import stylesProject from "../styles/Project.module.css";
import Navbar from "../components/Navbar";

export default function cityTransport() {
  return (
    <div className={styles.container}>
      <Head>
        <title>City Transport | mmmacias</title>
        <meta name="description" content="Mariana M. | Web Designer" />
        <link rel="icon" href="/mmm.ico" />
      </Head>
      <header className="msticky top-0 z-50">
        <Navbar></Navbar>
      </header>

      <main className={stylesProject.main}>
        <div className={stylesProject.headerCityTransport}>
          <h1 className={stylesProject.titleCity}>City Transport</h1>
        </div>

        <div className={stylesProject.body}>
          <p className={stylesProject.description}>UI, Redesign</p>

          <p className={stylesProject.subtext}>Design Team</p>
          <p className={stylesProject.text}>
            José María Armendariz <br />
            Mariana Macías
          </p>
          <p className={stylesProject.text}>
            UbikAgs is a local state app that links various places and services
            related to government with the public transport, to know which rute
            you can use to get to a place.
            <br />
            <br />
            The main functionality was already done, so we mainly worked on the
            redesign and how to display certain actions on iOS.
          </p>
          <hr className={stylesProject.line} />
          <p className={stylesProject.description}>Rebrand</p>
          <p className={stylesProject.text}>
            First of all, we focused on rebrand, so we could have a style guide
            for the rest of the app and the content that had to be created from
            zero, like the icons of each category and color palette.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/city/rebrand.png"
              alt="city-transport-rebrand"
              width={1287}
              height={1075}
            />
          </div>
          <p className={stylesProject.imgDesc}>App rebranding</p>
          <br />
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/city/icons.png"
              alt="city-transport-icons"
              width={1400}
              height={648}
            />
          </div>
          <p className={stylesProject.imgDesc}>
            Icons for active and default states
          </p>
          <br />
          <p className={stylesProject.description}>Interface redesign</p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/city/redesign1.png"
              alt="city-transport-redisgn-before-and-after"
              width={1400}
              height={1665}
            />
          </div>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/city/redesign2.png"
              alt="city-transport-redisgn-before-and-after"
              width={1400}
              height={1706}
            />
          </div>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/city/redesign3.png"
              alt="city-transport-redisgn-before-and-after"
              width={1400}
              height={2122}
            />
          </div>
          <br />
          <p className={stylesProject.text}></p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className="text-center">©2021 mmmacias</p>
      </footer>
    </div>
  );
}
