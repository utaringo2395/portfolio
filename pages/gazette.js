import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import stylesProject from "../styles/Project.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function soundMoods() {
  return (
    <div className={styles.container}>
      <Head>
        <title>State Gazette | mmmacias</title>
        <meta name="description" content="Mariana M. | Web Designer" />
        <link rel="icon" href="/mmm.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <header className="msticky top-0 z-50">
        <Navbar></Navbar>
      </header>
      <main className={stylesProject.main}>
        <div className={stylesProject.headerGazette}>
          <h1 className={stylesProject.title}>State Gazette</h1>
        </div>

        <div className={stylesProject.body}>
          <p className={stylesProject.description}>UI, UX</p>
          <p className={stylesProject.subtext}>Design Team</p>
          <p className={stylesProject.text}>
            José María Armendariz <br />
            Mariana Macías
          </p>
          <p className={stylesProject.text}>
            The Official State Gazette and State Norms Library is a website made
            for the public consultation of the rules and statutes of the state
            of Aguascalientes.
            <br />
            Talking with the legal area in charge of updating this library, they
            wanted to make it a mobile app for consultation.
            <br />
            As a first option we made a proposal to redesign the website
            according to the new design guidelines made by the State, keeping
            the same functionality and make the right configurations in the
            structure to be responsive.
          </p>
          <hr className={stylesProject.line} />
          <p className={stylesProject.description}>
            Official State Gazette, original website & redesign proposal
          </p>
          <p className={stylesProject.text}>
            Main page from Official State Gazette. The whole site uses Bootstrap
            3 framework, recently they&apos;ve been working on a redesign for
            the entire site, using frameworks like Vue.js and Bootstrap 5.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/gazette/mainPeriodico.png"
              alt="main-page-state-gazette-original"
              width={1440}
              height={1191}
            />
          </div>
          <p className={stylesProject.text}>
            The page works on desktop sizes higher than 992px wide. Some of the
            search options overlap in lower size screens. So, we also had to
            think about the redesign with a mobile perspective and
            functionality.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/gazette/overlap.png"
              alt="main-page-state-gazette-overlap-elements"
              width={1440}
              height={1232}
            />
          </div>
          <p className={stylesProject.imgDesc}>Screen at 991px wide.</p>
          <br />
          <p className={stylesProject.imgDesc}>
            Main Official State Gazette redesign proposal.
          </p>
          <p className={stylesProject.text}>
            The first redesign proposal was based on the new design guidelines,
            such as fonts and colors.
            <br />
            The page would be divided in three sections. Header, search tools
            and information about the Official State Gazette and it&apos;s
            procedures for new norms.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/gazette/redesign1.png"
              alt="main-page-state-gazette-redesign-proposal"
              width={1440}
              height={2222}
            />
          </div>
          
          <p className={stylesProject.text}>
            For the search tools, we made a tabed section, so we could have
            multiple types of search without having the problem of overlapping
            with each other, also making it functional for a mobile screen.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/gazette/responsive.png"
              alt="state-gazette-search-types"
              width={1440}
              height={3326}
            />
          </div>
          
          <br />
          <p className={stylesProject.text}>
            After presenting the redesign proposal, we were told that the
            project would change to make an app, since they wanted to offer a
            tool for a certain niche of users.
          </p>

          <hr className={stylesProject.line} />

          <p className={stylesProject.description}>App Design</p>
          <p className={stylesProject.text}>
            Fortunately, most of the architecture was solved in the website
            redesign, so we just had to figure out which Android and iOS
            components would be convenient to use, and also talk with the
            developers to get the services that manage all the information displayed in the State Gazette.
            
            
          </p>
          <p className={stylesProject.description}>Mini Design System: Setting the styles.</p>
          <p className={stylesProject.text}>
            Based on Android&apos;s Material Design and iOS Apple Design
            Resources, we selected the components to set the search tools and sections that would be needed inside the app. 
            <br/>
            We made a mini design system, creating new components, but also reusing the ones that where set in the general Aguascalientes State Design System.
          </p>

          <div className={stylesProject.figmaEmbed}>
          <iframe width="1000" height="750" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Frj91tnJt0AwRoUHGSIeLtq%2FApp-Peri%25C3%25B3dico%252FNormateca%3Fnode-id%3D112%253A3092" allowFullScreen></iframe>
          </div>

          <p className={stylesProject.text}>
            Just as in the proposal of the responsive design, we would use tabs
            to organize sections, a main screen to describe the use of the tools, the POE tool, Normateca tool, and contact tab of the agencies in charge of managing the State
            Gazette information.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/gazette/mainscreens.png"
              alt="state-gazette-app-main-screens"
              width={1440}
              height={785}
            />
          </div>
          <p className={stylesProject.text}>
            The search tools would be gathered in a secondary tab menu.
            <br />
            The results of each search are displayed under the tool as an
            infinite scroll list. Each list item would open a PDF file, and
            sometimes a file is linked to multiple results but direct to a
            certain page.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/gazette/searchResults.png"
              alt="state-gazette-app-search-results"
              width={1440}
              height={1965}
            />
          </div>
          <br />
          <br />
          <p className={stylesProject.text}>
            The project is up at the {" "}
            <Link
              href="https://apps.apple.com/mx/app/poe-normateca/id1607342121"
              rel="noopener noreferrer"
            >
              <a className={stylesProject.workLink}>App Store</a>
              
            </Link> and {" "}
            <Link
              href="https://play.google.com/store/apps/details?id=mx.gob.aguascalientes.normateca&hl=es_MX&gl=US"
              rel="noopener noreferrer"
            >
              <a className={stylesProject.workLink}>Google Play Store</a>
            </Link>
          </p>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
