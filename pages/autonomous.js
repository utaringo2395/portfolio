import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import stylesProject from "../styles/Project.module.css";
import Navbar from "../components/Navbar";

export default function autonomous() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Autonomous Homeschooling | mmmacias</title>
        <meta name="description" content="Mariana M. | Web Designer" />
        <link rel="icon" href="/mmm.ico" />
      </Head>
      <header className="msticky top-0 z-50">
        <Navbar></Navbar>
      </header>

      <main className={stylesProject.main}>
        <div className={stylesProject.headerAuto}>
          <h1 className={stylesProject.titleAuto}>Autonomous Homeschooling</h1>
        </div>

        <div className={stylesProject.body}>
          <p className={stylesProject.description}>UI, UX</p>

          <p className={stylesProject.text}>
            Project made in{" "}
            <i>DESEM Desarrollo de Emprendedores, A. C. Mexico</i>
            <br />
            <br />
            <b>Design Team</b>
            <br />
            José Arturo Dávalos <br />
            Laura Jeanette Castillo <br />
            Mariana Macías
          </p>
          <p className={stylesProject.text}>
            The main purpose of Autonomous is to give parents certainty about
            the level of knowledge their children have, supporting them with a
            diagnostic test, organization tools for subjects, educational
            references and community events for the homeschooler community.
            <br />
            They found that just like in the United States, in Mexico there are
            parents educating their children from home.
            <br />
            <br />
            This project is envisioned to have a growth in the future, and to
            support parent homeschoolers across the country.
          </p>
          <hr className={stylesProject.line} />
          <p className={stylesProject.description}>Research</p>
          <p className={stylesProject.text}>
            The main research tool to use was the focus group. We made the
            invitation to many of the parents interested in the project, and
            they talked, letting us know the concerns, difficulties and benefits
            of educating their kids at home. <br />
            The main questions asked as researchers were:
          </p>
          <ol>
            <li className={stylesProject.list}>
              1. Why teaching your kids at home?
            </li>
            <li className={stylesProject.list}>
              2. Which are the motivators to keep the homeschooling method?
            </li>
            <li className={stylesProject.list}>
              3. Which are the difficulties?
            </li>
          </ol>
          <br />
          <p className={stylesProject.description}>Competition Comparison</p>
          <p className={stylesProject.text}>
            Home-based education isn&apos;t a regular thing in Mexico, so it was kind
            of troublesome finding competition for a national comparison. Some
            of the most similar sites, would be more like a blog, or offer a set
            package of resources for a determined age range, limiting it to 5 or
            6 years old as the most grown kids.
            <br />
            <br />
            The next steps would be finding any global sites with this same
            purpose, and compare the content and features of each one of them,
            and match it with the needs expressed by the parents at the focus
            group.
          </p>
          <br />
          <p className={stylesProject.description}>Branding</p>
          <p className={stylesProject.text}>
            The branding would be an important element for the project, as it
            should work for the kids, but also with the parents, because they
            would be the main user. Setting a color palette would five the
            freedom to make various combinations for the elements of the site.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/auto/logo.png"
              alt="autonomous-logo"
              width={1418}
              height={421}
            />
          </div>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/auto/contrast.png"
              alt="autonomous-logo-contrast"
              width={1420}
              height={377}
            />
          </div>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/auto/shapes.png"
              alt="autonomous-shapes"
              width={1419}
              height={937}
            />
          </div>
          <p className={stylesProject.imgDesc}>
            Inspired in Gio Ponti&apos;s mosaics, to create a set of shapes
            interacting with each other
          </p>
          <br />
          <p className={stylesProject.description}>Setting goals</p>
          <p className={stylesProject.text}>
            Setting the goals for the project would based on the needs of our
            user would ease the process of making decisions for the site
            content.
          </p>
          <p className={stylesProject.subtext}>
            Trustworthy educational content for parents
          </p>
          <p className={stylesProject.text}>
            The content for the page would be provided with a strategic alliance
            with a private elementary and junior high school, were the teachers
            would write the material, orientated and adapted to a home-based
            education.
          </p>
          <p className={stylesProject.subtext}>Organization tools</p>
          <p className={stylesProject.text}>
            The advantages of homeschooling are the disposition of time that the
            parents have, and that they have the freedom to select their
            schedules for each assignment; but was also a worry, since they
            sometimes have to keep track of the education, of three kids with
            different ages. <br />
            This would get into 2 main features:
          </p>
          <ol>
            <li>1. Creation of individual profiles for each of the kids</li>
            <li>
              2. Selection of how many assignments you want to keep in a
              specific period of time
            </li>
          </ol>
          <p className={stylesProject.subtext}>Knowledge diagnosis</p>
          <p className={stylesProject.text}>
            The platform would offer a diagnosis test, doing this will set the
            list of assignments suitable for the age and current knowledge of
            the kid.
          </p>
          <p className={stylesProject.subtext}>Group activities</p>
          <p className={stylesProject.text}>
            Home-based education can have it&apos;s limitations on infrastructure,
            and equipment with science and sports activities. Having an alliance
            with a school gave us the possibility of considering having live
            activities, promoted through the site.
          </p>
          <br />
          <p className={stylesProject.description}>Wireframing</p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/auto/wireframe.png"
              alt="autonomous-wireframes"
              width={1420}
              height={1481}
            />
          </div>
          <br />
          <p className={stylesProject.description}>Screens</p>
          <p className={stylesProject.text}>
            Integrating the branding, wireframes and user flows.
          </p>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/auto/screen1.png"
              alt="autonomous-interface-design"
              width={1420}
              height={1622}
            />
          </div>
          <div className={stylesProject.imgContainer}>
            <Image
              src="/img/auto/screen2.png"
              alt="autonomous-interface-design"
              width={1420}
              height={864}
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
