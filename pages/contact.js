import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import stylesContact from "../styles/Contact.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function contact() {
  return (
    <div className={stylesContact.container}>
      <Head>
        <title>mmmacias | Web designer</title>
        <meta name="description" content="Mariana M. | UI Designer" />
        <link rel="icon" href="/mmm.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <header className="msticky top-0 z-50">
        <Navbar></Navbar>
      </header>

      <main className={stylesContact.main}>
        <div className={stylesContact.contactImgContainer}>
          <Image src="/img/contact.png" width={440} height={285} alt="contact-image" />
        </div>
        <div className={stylesContact.divider}></div>
        <div className={stylesContact.contactText}>
          <h1 className={styles.title}>Contact</h1>
          <br />
          <a
            href="mailto:mariana.macias2395@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={stylesContact.infoContainer}
          >
            <Image
              src="/img/icons/ic_round-mail.jpg"
              alt="icon-mail"
              width={41}
              height={25}
            />
            <p className={stylesContact.text}>marianamacias2395@gmail.com</p>
          </a>
          <a
            href="https://www.behance.net/marianamacias2395"
            target="_blank"
            rel="noopener noreferrer"
            className={stylesContact.infoContainer}
          >
            <Image
              src="/img/icons/ic_behance.jpg"
              alt="icon-behance"
              width={41}
              height={25}
            />
            <p className={stylesContact.text}>/marianamacias2395</p>
          </a>
          <a
            href="https://www.linkedin.com/in/mariana-macias2395/"
            target="_blank"
            rel="noopener noreferrer"
            className={stylesContact.infoContainer}
          >
            <Image
              src="/img/icons/ic_linkedin.jpg"
              alt="icon-linkedin"
              width={41}
              height={25}
            />
            <p className={stylesContact.text}>/mariana-macias2395</p>
          </a>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
