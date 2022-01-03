import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import stylesProject from "../styles/Project.module.css";
import Navbar from "../components/Navbar";

export default function soundMoods() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sound Moods | mmmacias</title>
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
          <p className={stylesProject.subtext}>Design Team</p>
          <p className={stylesProject.text}>
            José María Armendariz <br />
            Mariana Macías
          </p>
          <p className={stylesProject.description}>UI, UX</p>
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
            Original websites & redesign proposal
          </p>

          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/sm/palette.png"
              alt="soundmoods-color-palette"
              width={920}
              height={383}
            />
          </div>
          <br />
          <p className={stylesProject.description}>Interface design</p>
          <p className={stylesProject.text}>
            The main screen has 3 sections.
            <br />
            <br />
            <b>My Moods</b> has a list with an horizontal scroll, with the
            playlists you&apos;ve created.
            <br />
            <b>New</b> is a selection of the latest releases from your favourite
            artists.
            <br />
            <b>Recently loved</b> puts your whole favorite songs in a list.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/sm/screen1.png"
              alt="soundmoods-screens-one"
              width={920}
              height={725}
            />
          </div>
          <p className={stylesProject.text}>
            Artist section features an intro image with number of
            subscribers/followers, latest release, Most loved songs (as in saved
            by the users), albums and singles with an horizontal scroll.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/sm/screen2.png"
              alt="soundmoods-screens-one"
              width={920}
              height={769}
            />
          </div>
          <p className={stylesProject.text}>
            A component for locked screens shows the image from what&apos;s
            playing at the moment, name of the song, artist, the option to love
            or un-love the song and the usual music controls.
            <br />
            <br />
            In the Playing Now screen, there is the image from the album/single.
            The next row shows at the center song name and artist, at the left
            the queue, and at the right the loved button. The final row, has the
            time bar and the usual music controls (repeat, before, play/pause,
            next and random).
            <br />
            <br />
            In the minimized version, it&apos;ll only show the song image. name
            of the song, artist, time bar and play/pause button.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/sm/screen3.png"
              alt="soundmoods-screens-one"
              width={920}
              height={769}
            />
          </div>
          <hr className={stylesProject.line} />
          <p className={stylesProject.text}>
            And that&apos;s it, I know it lacks some of technical and
            accesibility things, but making aesthethically pleasing projects is
            kind of eye candy for me, and I enjoyed the process :)
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className="text-center">©2021 mmmacias</p>
      </footer>
    </div>
  );
}
