import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import stylesComponent from '../styles/Component.module.css'

export default function Home() {
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
              px-8
              md:py-0
              text-lg text-gray-700
              bg-white
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
                class="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
          
          <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
              <ul
                className="
                  pt-4
                  text-base text-black
                  md:flex
                  md:justify-between 
                  md:pt-0"
              >
                <li className={styles.hoverAnimation}>
                  <a className="md:p-4 py-2 block" href="#"
                    >about me</a
                  >
                </li>
                <li className={styles.hoverAnimation}>
                  <a className="md:p-4 py-2 block" href="#"
                    >contact</a
                  >
                </li>
              </ul>
            </div>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.mainText}>
          <h1 className={styles.title}>I'm Mariana</h1>
          <p className={styles.description}>Web Designer & aspiring Front-end Developer.</p>
          <a href="#work" className={styles.cta}>Check my work &#10084;</a>
        </div>
      </main>

      <div className={styles.tools}>
        <div className={styles.toolImgs}>
          <Image src="/img/tool-html.png" alt="img-html-logo" width={182} height={182} className={styles.smallImg} />
          <Image src="/img/tool-css.png" alt="img-css-logo" width={182} height={182} className={styles.smallImg} />
          <Image src="/img/tool-figma.png" alt="img-figma-logo" width={182} height={182} className={styles.smallImg} />
          <Image src="/img/tool-adobexd.png" alt="img-adobexd-logo" width={182} height={182} className={styles.smallImg} />
        </div>
        <div>  
          <h3 className={styles.toolText}>Design and<br/>dev tools I use</h3>
        </div>
      </div>

      <div className={styles.work} id="work">
        <div className={stylesComponent.card}>
          <Image src="" alt="component-card" />
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
