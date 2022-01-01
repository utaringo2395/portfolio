import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import stylesProject from "../styles/Project.module.css";
import Navbar from "../components/Navbar";

export default function baku() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bakú Beachwear | mmmacias</title>
        <meta name="description" content="Mariana M. | Web Designer" />
        <link rel="icon" href="/mmm.ico" />
      </Head>
      <header className="msticky top-0 z-50">
        <Navbar></Navbar>
      </header>

      <main className={stylesProject.main}>
        <div className={stylesProject.headerBaku}>
          <h1 className={stylesProject.title}>Bakú Beachwear</h1>
        </div>

        <div className={stylesProject.body}>
          <p className={stylesProject.description}>UI, UX</p>

          <p className={stylesProject.text}>
            Project made in{" "}
            <i>DESEM Desarrollo de Emprendedores, A. C. Mexico</i>
          </p>
          <p className={stylesProject.subtext}>Design Team</p>
          <p className={stylesProject.text}>
            José Arturo Dávalos <br />
            Mariana Macías
          </p>
          <p className={stylesProject.text}>
            Beachwear boutique in Aguascalientes, Mexico. <i>Bakú</i> has a
            traditional business model, but also make sales through platforms
            like Instagram and Facebook. The project has the potential to grow
            in a digital environment, and increase sales being in a national
            market.
            <br />
            <br />
            Our client had budget limitations, but we were able to make the best
            decisions with the developing team to keep the original budget.
          </p>
          <hr className={stylesProject.line} />
          <br />
          <p className={stylesProject.description}>
            Research, Competiton Camparasion
          </p>
          <p className={stylesProject.text}>
            Comparing similar businesses, and checking the features of each page
            to match with the common user flows, and the features we wanted to
            include.
            <br />
            <br />A coupon or discount for the newsletter subscription was one
            of the things that were considered to add and boost the site sales,
            without affecting business finances.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/baku/comparacion.png"
              alt="baku-competition-comparasion"
              width={1095}
              height={843}
            />
          </div>
          <br />
          <p className={stylesProject.description}>Wireframing</p>
          <p className={stylesProject.text}>
            The wireframing was based in a simple user navigation, something
            that would display easily the products and the important information
            about them. In the early stages of the project, we would make a
            diagram with the main screens and a description of each section to
            show the flow to the client.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/baku/diagrama-01.png"
              alt="baku-wireframes"
              width={1400}
              height={731}
            />
          </div>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/baku/wireframes.png"
              alt="baku-wireframes"
              width={1095}
              height={722}
            />
          </div>
          <p className={stylesProject.description}>Interface design</p>
          <p className={stylesProject.text}>
            We also created the visuals for the website, having as a guideline
            of style their social media and their target clients.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/baku/banner1.jpg"
              alt="baku-banner-design"
              width={1000}
              height={366}
            />
          </div>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/baku/banner2.jpg"
              alt="baku-banner-design"
              width={1000}
              height={365}
            />
          </div>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/baku/banner3.jpg"
              alt="baku-banner-design"
              width={1000}
              height={364}
            />
          </div>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/baku/screens1.png"
              alt="baku-website"
              width={1400}
              height={1008}
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className="text-center">©2021 mmmacias</p>
      </footer>
    </div>
  );
}
