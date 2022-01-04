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
        <meta name="description" content="Mariana M. | Web Designer" />
        <link rel="icon" href="/mmm.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
            <a href="#work" className={styles.cta}>
              Check my work &#129293;
            </a>
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
        <div className={stylesComponent.card}>
          <Image
            src="/img/soundmoods-thumb.jpg"
            alt="component-card"
            width={688}
            height={279}
            className={stylesComponent.cardImg}
          />
          <p className={stylesComponent.cardTag}>UI · MOBILE · MUSIC</p>
          <Link href="/soundMoods">
            <a className={stylesComponent.cardTitle}>Sound Moods &#8594;</a>
          </Link>
        </div>
        <Link href="/baku">
          <div className={stylesComponent.cardMini}>
            <Image
              src="/img/bakubeach-thumb.jpg"
              alt="component-card"
              width={310}
              height={279}
              className={stylesComponent.cardImg}
            />
            <p className={stylesComponent.cardTag}>UI · UX · ECOMMERCE</p>
            <Link href="/baku">
              <a className={stylesComponent.cardTitle}>
                Bakú Beachwear &#8594;
              </a>
            </Link>
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
            <p className={stylesComponent.cardTag}>UI · UX · EDUCATION</p>
            <Link href="/autonomous">
              <a className={stylesComponent.cardTitle}>Autonomous &#8594;</a>
            </Link>
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
            <p className={stylesComponent.cardTag}>UI · TRANSPORT</p>
            <Link href="/cityTransport">
              <a className={stylesComponent.cardTitle}>
                City Transport &#8594;
              </a>
            </Link>
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
          <p className={stylesComponent.cardTag}>UI · UX</p>
          <Link href="/gazette">
            <a className={stylesComponent.cardTitle}>State Gazette &#8594;</a>
          </Link>
        </div>

        <div className={stylesComponent.card}>
          <Image
            src="/img/soundmoods-thumb.jpg"
            alt="component-card"
            width={688}
            height={279}
            className={stylesComponent.cardImg}
          />
          <p className={stylesComponent.cardTag}>UI · Vue.js</p>
          <Link href="/cityTransport">
            <a className={stylesComponent.cardTitle}>Components &#8594;</a>
          </Link>
        </div>
      </div>

      <footer className={styles.footer}>
        <p className="text-center">©2021 mmmacias</p>
      </footer>
    </div>
  );
}
