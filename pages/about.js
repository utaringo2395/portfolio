import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import stylesAbout from "../styles/About.module.css";
import Navbar from "../components/Navbar";

export default function about() {
  return (
    <div className={stylesAbout.container}>
      <Head>
        <title>mmmacias | Web designer</title>
        <meta name="description" content="Mariana M. | Web Designer" />
        <link rel="icon" href="/mmm.ico" />
      </Head>
      <header className="msticky top-0 z-50">
        <Navbar></Navbar>
      </header>

      <main className={stylesAbout.mainAbout}>
        <div className={stylesAbout.mainTextAbout}>
          <h1 className={styles.title}> I&apos;m Mariana</h1>
          <p className={styles.description}>
            Web Designer & aspiring Front-end Developer.
          </p>
          <br />
          <p className={stylesAbout.bodyText}>
            Hey! I&apos;m Mariana Macías, 26. Web designer and an enthusiast of
            front-end development.{" "}
          </p>
          <br />
          <p className={stylesAbout.bodyText}>
            I have a bachelor degree in Graphic Design, from the Universidad
            Autónoma de Aguascalientes.
            <br />
            Also attended some conferences and courses to learn about UI and UX,
            which are the main reasons I switch from an artistic path to a
            tech-ish one.
          </p>
          <br />
          <ul>
            <li className={stylesAbout.quoteText}>
              <b>“Becoming a data-aware Designer”</b>
              <br />
              <i>Digital Tech Fest (2020)</i>
            </li>
            <li className={stylesAbout.quoteText}>
              <b>”Colaboración UX - Prototipado”</b>
              <br />
              <i>UX Digital Summit (2017)</i>
            </li>
            <li className={stylesAbout.quoteText}>
              <b>”Startup Weekend eCommerce”</b>
              <br />
              <i>Startup Weekend Aguascalientes (2016)</i>
            </li>
          </ul>
          <br />
          <p className={stylesAbout.bodyText}>
            I&apos;ve learned HTML and CSS with online courses and help from fellow
            friends and work colleagues. Recently learning JS and some other
            libraries, such as Vue, React, and React frameworks like Next.js
          </p>
          <br />
          <p className={stylesAbout.bodyText}>
            When I&apos;m not working, I like to do some other activities, like
            cooking and eating stuff I can make with my kitchen appliances, and yes,
            that&apos;s 100% an adulting thing. Petting and smooching my schnauzer
            doggo, Teo. And singing, nothing formal, I just enjoy singing anime
            songs or something from the Yeah Yeah Yeahs as I do some other
            stuff.
          </p>
          <br />
          <p classsName={stylesAbout.bodyText}>
            This is just a little bit about me! Go and check out some of my{" "}
            <Link
              href="/#work"
              className={stylesAbout.workLink}
              rel="noopener noreferrer"
            >
              work
            </Link>{" "}
            :)
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className="text-center">©2021 mmmacias</p>
      </footer>
    </div>
  );
}
