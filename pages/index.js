/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "../styles/Home.module.scss";
import LogoSlider from "../components/LogoSlider";

export default function Home() {
	return (
		<>
			<Head>
				<title>BlueInventory</title>
				<meta name="description" content="Generated by create next app" />
				{/* <!-- Website Icon --> */}
				<link rel="icon" href="/img/mainImages/B.png" />
			</Head>

			<main className={styles.main}>
				<div className="container mx-auto">
					{/*Time Limit */}
					<LogoSlider />
				</div>
			</main>
		</>
	);
}
