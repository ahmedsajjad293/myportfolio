import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Ahmed Sajjad | Portfolio</title>
        <meta
          name="description"
          content=" Hey there! 👋 I'm Ahmed Sajjad, your friendly neighborhood web developer on a mission to craft remarkable digital experiences. With a passion for technology and an eye for design, I specialize in creating sleek, user-friendly websites that not only look fantastic but also function flawlessly.
          "
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Ahmed Sajjad" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
