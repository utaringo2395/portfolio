import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import stylesComponent from "../styles/Component.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mmmacias | Web designer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mmm.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </Head>
      <header className="msticky top-0 z-50">
        <Navbar></Navbar>
      </header>

      <main className={styles.main}>
        <div className={styles.mainText}>
          <h1 className={styles.title}>I&apos;m Mariana</h1>
          <p className={styles.description}>
            Web Designer & aspiring Front-end Developer.
          </p>
          <Link href="#work">
            <a href="#work" className={styles.cta}>Check my work &#129293;</a>
          </Link>
        </div>
      </main>

      <div className={styles.tools}>
        <Image
          src="/img/tool-html.png"
          alt="img-html-logo"
          width={150}
          height={150}
          className={styles.smallImg}
        />
        <Image
          src="/img/tool-css.png"
          alt="img-css-logo"
          width={150}
          height={150}
          className={styles.smallImg}
        />
        <Image
          src="/img/tool-sass.png"
          alt="img-sass-logo"
          width={150}
          height={150}
          className={styles.smallImg}
        />
        <Image
          src="/img/tool-bootstrap.png"
          alt="img-bootstrap-logo"
          width={150}
          height={150}
          className={styles.smallImg}
        />
        <Image
          src="/img/tool-vscode.png"
          alt="img-vscode-logo"
          width={150}
          height={150}
          className={styles.smallImg}
        />
        <Image
          src="/img/tool-figma.png"
          alt="img-figma-logo"
          width={150}
          height={150}
          className={styles.smallImg}
        />
      </div>

      <div className={styles.work} id="work">
        <Link href="/soundMoods">
          <div className={stylesComponent.card}>
            <Image
              src="/img/soundmoods-thumb.jpg"
              alt="component-card"
              width={688}
              height={279}
              className={stylesComponent.cardImg}
            />
            <p className={stylesComponent.cardTitle}>Sound Moods</p>
            <p className={stylesComponent.cardTag}>UI</p>
          </div>
        </Link>
        <Link href="/baku">
          <div className={stylesComponent.cardMini}>
            <Image
              src="/img/bakubeach-thumb.jpg"
              alt="component-card"
              width={310}
              height={279}
              className={stylesComponent.cardImg}
            />
            <p className={stylesComponent.cardTitle}>Bakú Beachwear</p>
            <p className={stylesComponent.cardTag}>UI/UX</p>
          </div>
        </Link>
        <Link href="/autonomous">
          <div className={stylesComponent.cardMini}>
            <Image
              src="/img/autonomous-thumb.jpg"
              alt="component-card"
              width={310}
              height={279}
              className={stylesComponent.cardImg}
            />
            <p className={stylesComponent.cardTitle}>
              Autonomous Homeschooling
            </p>
            <p className={stylesComponent.cardTag}>UI/UX</p>
          </div>
        </Link>
        <Link href="/cityTransport">
          <div className={stylesComponent.cardMini}>
            <Image
              src="/img/cityapp-thumb.jpg"
              alt="component-card"
              width={310}
              height={279}
              className={stylesComponent.cardImg}
            />
            <p className={stylesComponent.cardTitle}>City Transport App</p>
            <p className={stylesComponent.cardTag}>UI</p>
          </div>
        </Link>
        <div className={stylesComponent.cardMini}>
          <Image
            src="/img/cityapp-thumb.jpg"
            alt="component-card"
            width={310}
            height={279}
            className={stylesComponent.cardImg}
          />
          <p className={stylesComponent.cardTitle}>State Gazette</p>
          <p className={stylesComponent.cardTag}>UI/UX</p>
        </div>

        <div className={stylesComponent.card}>
          <Image
            src="/img/soundmoods-thumb.jpg"
            alt="component-card"
            width={688}
            height={279}
            className={stylesComponent.cardImg}
          />
          <p className={stylesComponent.cardTitle}>Components</p>
          <p className={stylesComponent.cardTag}>UI/Vue.js</p>
        </div>
      </div>

      <footer className={styles.footer}>
        <p className="text-center">©2021 mmmacias</p>
      </footer>
    </div>
  );
}
