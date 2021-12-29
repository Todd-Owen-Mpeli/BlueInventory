import Head from "next/head";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Blue Inventory</title>
				<meta name="description" content="Generated by create next app" />
				{/* <!-- Website Icon --> */}
				<link rel="icon" href="/img/mainImages/app.ico" />
				{/* <!-- Bootstrap CSS --> */}
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
					crossOrigin="anonymous"
				/>
				{/* <!-- Bootstrap Icon Link --> */}
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
				/>
			</Head>

			<main className={styles.main}></main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
