import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import stylesComponent from "../styles/Component.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const button = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");

    button.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>mmmacias | Web designer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="msticky top-0 z-50">
        <nav
          className="
              my-4
              flex flex-wrap
              items-center
              justify-between
              w-full
              py-4
              
              md:py-0
              text-lg text-gray-700
              
            "
        >
          <div>
            <a href="/" className={styles.brand}>
              mmmacias
            </a>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            className="hidden w-full md:flex md:flex-col md:items-center md:w-auto"
            id="menu"
          >
            <ul
              className="
                  pt-4
                  text-base text-black
                  md:flex
                  md:justify-between 
                  md:pt-0"
            >
              <li className={styles.hoverAnimation}>
                <a
                  className="md:p-4 py-2 block"
                  href="/about"
                  rel="noopener noreferrer"
                >
                  about me
                </a>
              </li>
              <li className={styles.hoverAnimation}>
                <a
                  className="md:p-4 py-2 block"
                  href="/contact"
                  rel="noopener noreferrer"
                >
                  contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.mainText}>
          <h1 className={styles.title}>I'm Mariana</h1>
          <p className={styles.description}>
            Web Designer & aspiring Front-end Developer.
          </p>
          <a href="#work" className={styles.cta}>
            Check my work &#10084;
          </a>
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
        <div className={stylesComponent.cardMini}>
          <Image
            src="/img/autonomous-thumb.jpg"
            alt="component-card"
            width={310}
            height={279}
            className={stylesComponent.cardImg}
          />
          <p className={stylesComponent.cardTitle}>Autonomous Homeschooling</p>
          <p className={stylesComponent.cardTag}>UI/UX</p>
        </div>
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
        <div className={stylesComponent.cardMini}>
          <Image
            src="/img/bakubeach-thumb.jpg"
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
