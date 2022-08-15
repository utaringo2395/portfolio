import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import stylesProject from "../styles/Project.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function geaSystem() {
    return (
        <div className={styles.container}>
            <Head>
                <title>GEA Design System | mmmacias</title>
                <meta name="description" content="Mariana M. | Web Designer" />
                <link rel="icon" href="/mmm.ico" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            </Head>
            <header className="msticky top-0 z-50">
                <Navbar/>
            </header>
            <main className={stylesProject.main}>
                <div className={stylesProject.headerGeaSystem}>
                    <h1 className={stylesProject.title}>GEA Design System</h1>
                </div>

                <div className={stylesProject.body}>
                    <p className={stylesProject.description}>UI, Design System</p>
                    <p className={stylesProject.subtext}>Design Team</p>
                    <p className={stylesProject.text}>
                        José María Armendariz <br />
                        Aída López<br/>
                        Mariana Macías
                    </p>
                    <p className={stylesProject.text}>
                        In 2020, Aguascalientes State government, through one of it&apos;s agencies and design team, decided to make a change in the design of the whole official website. <br/>
                        The redesign would rely on the decisions like what type of framework we were going to work with, taking in consideration that the government has at least 50 agencies and institutions, where they have a person in site reponsible of updating their website. This would also consume some time to make training sessions, to show how the framework, components and structure of the pages should be. 
                    </p>
                    <hr className={stylesProject.line} />
                    <p className={stylesProject.description}>
                        Choosing Frameworks
                    </p>
                    <p className={stylesProject.text}>
                        The old version of the website, used Bootstrap 3 as it&apos;s main framework, so most of the teams inside the agencies are familiar with the syntax of Bootstrap. 
                        <br/>
                        As the mayority of the agencies websites are structured the same way, and have basic sections to display public information as a requirement, we needed a framework to be able to create components. The development team made several suggestions, and ended up choosing Vue.js as the main framework, combined with Bootstrap (started planning with Bootstrap 4, but by May 2021, we updated to Bootstrap 5).
                    </p>
                    <div className={stylesProject.imgContainer}>
                        <Image
                        src="/img/geasystem/frameworks.png"
                        alt="vue.js and bootstrap frameworks"
                        width={800}
                        height={448}
                        />
                    </div>
                    <hr className={stylesProject.line} />
                    <p className={stylesProject.description}>
                        Design System
                    </p>
                    <p className={stylesProject.text}>
                        Before getting into any developing, there has to be a base for the whole redesign. A design system is the most common and necessary in these kind of projects, since you can document the whole process, and make the handoff to developers easier. In our case, there are some other departments that develop inner systems that interact with the normal citizen, and others for internal use of the government agencies. 
                        <br/>
                        Having Bootstrap 5 as a base framework, it&apos;s easier to set the initial layout. The composition of the types of section would be defined through columns.
                    </p>
                    <div className={stylesProject.figmaEmbed}>
                        <iframe width="1000" height="750" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMjB0sBF6yGl794MBu4jQWr%2FSistema-de-Dise%25C3%25B1o-SAE%3Fnode-id%3D1%253A627" allowFullScreen></iframe>
                    </div>
                    <div className={stylesProject.imgContainer}>
                        <Image
                        src="/img/geasystem/layouts.png"
                        alt="web color palette"
                        width={1440}
                        height={1051}
                        />
                    </div>
                    <p className={stylesProject.imgDesc}>General Layout</p>
                    <br/>
                    <p className={stylesProject.description}>
                        Color
                    </p>
                    <p className={stylesProject.text}>
                        The color palette is defined by the official communication department. We set these colors to the color palette, and also made adjustments to make a secondary and complementary palette and the variations of each one. When working with color and typography, you would also expect to do some adjustments to meet the minimum accesibility guidelines (WCAG, Level AA).
                    </p>
                    <div className={stylesProject.imgContainer}>
                        <Image
                        src="/img/geasystem/officialcolors.png"
                        alt="official color palette"
                        width={1388}
                        height={471}
                        />
                    </div>
                    <p className={stylesProject.imgDesc}>Aguascalientes State Government official color palette</p>
                    <div className={stylesProject.imgContainer}>
                        <Image
                        src="/img/geasystem/webpalette.png"
                        alt="web color palette"
                        width={1000}
                        height={582}
                        />
                    </div>
                    <p className={stylesProject.imgDesc}>Adjusted color palette for web.</p>
                    <p className={stylesProject.text}>
                        <br/>
                        As the colors are used as background in many elements, we would also do some complementary gradients. 
                    </p>
                    <div className={stylesProject.imgContainer}>
                        <Image
                        src="/img/geasystem/gradients.png"
                        alt="gradients color palette"
                        width={1091}
                        height={627}
                        />
                    </div>
                    <p className={stylesProject.imgDesc}>Gradient color palette.</p>
                    <br/>
                    <p className={stylesProject.description}>
                        Accesibility: Color Contrast
                    </p>
                    <p className={stylesProject.text}>
                        As I mentioned before, we wanted to meet the minimum requirements in accesibility from the Web Content Accesibility Guidelines (Level AA). So we made a color contrast check with the font we were going to use. 
                        <br/>
                        Figma has many plugins that helped us with this task, so we could make the correct adjustments and see which were the right font weight to use.
                    </p>
                    <div className={stylesProject.figmaEmbed}>
                        <iframe width="1000" height="750" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMjB0sBF6yGl794MBu4jQWr%2FSistema-de-Dise%25C3%25B1o-SAE%3Fnode-id%3D79%253A2" allowFullScreen></iframe>
                    </div>
                    <br/>
                    <p className={stylesProject.description}>
                        UI Kit
                    </p>
                    <p className={stylesProject.text}>
                        Since the beginning of the project, there was always the intention of making components. This would ease the handoff to the developers. As well as the designers to concentrate into solving problems, rather than spending time making the elements from zero.
                        <br/>
                        Buttons, cards, navbars, headers, inputs, are many of the components made. Some are set with variants, and others for their nature, just the structure of how they should be displayed (with Figma Auto layout). 
                    </p>
                    <div className={stylesProject.figmaEmbed}>
                        <iframe  width="1000" height="750" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMjB0sBF6yGl794MBu4jQWr%2FSistema-de-Dise%25C3%25B1o-SAE%3Fnode-id%3D716%253A2" allowFullScreen></iframe>
                    </div>
                    <hr className={stylesProject.line} />
                    <p className={stylesProject.text}>
                        We started working in this design system in september 2020. We continue improving it, researching the best practices for it&apos;s use.
                        <br/>
                        You can check the new design implementation in the 
                        <Link
                            href="https://aguascalientes.gob.mx/"
                            rel="noopener noreferrer"
                            >
                            <a className={stylesProject.workLink}> Aguascalientes State Government official site.</a>
                        </Link>
                        <br/>
                        If you want to see the design system in Figma, you can check it
                        <Link
                            href="https://www.figma.com/file/MjB0sBF6yGl794MBu4jQWr/Sistema-de-Dise%C3%B1o-SAE?node-id=0%3A1"
                            rel="noopener noreferrer"
                            >
                            <a className={stylesProject.workLink}> here.</a> 
                        </Link>
                        {" "}Or the web documentation, 
                        <Link
                            href="https://desarrolloweb.aguascalientes.gob.mx/geads/"
                            rel="noopener noreferrer"
                            >
                            <a className={stylesProject.workLink}> here.</a> 
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}