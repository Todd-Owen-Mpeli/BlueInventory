// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {getAuth, signOut} from "firebase/auth";
import {useContentContext} from "@/context/context";
import {IMobileNavbar} from "@/types/components/public";
import styles from "@/styles/components/Hero.module.scss";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import NavbarMenuLinks from "@/components/Frontend/Elements/NavbarMenuLinks";

const mobileNavbar: FC<IMobileNavbar> = ({
	user,
	signedInUser,
	revealMobileMenu,
}) => {
	const auth = getAuth();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const context = useContentContext();

	// Handles User Logout
	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log("User Sign out Successful");
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
				throw new Error("User Sign out failed. Please try again.");
			});
	};

	return (
		<div
			className={
				revealMobileMenu
					? `${styles.navReveal} ${styles.nav}`
					: `hidden ${styles.nav}`
			}
		>
			<div className="fixed inset-0 opacity-60 bg-darkBlue" />
			<nav className="relative flex flex-col justify-between w-full h-full px-6 py-6 overflow-x-hidden overflow-y-auto bg-darkBlue">
				<div>
					<div className="flex flex-col items-baseline justify-center mb-16">
						{signedInUser ? (
							<motion.div
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="relative"
							>
								<button className="relative">
									<Image
										width={500}
										height={500}
										id="avatarButton"
										data-dropdown-toggle="userDropdown"
										data-dropdown-placement="bottom-start"
										className="object-cover object-top w-10 h-10 transition-all duration-200 ease-in-out rounded-full cursor-pointer ring-4 ring-lightBlue hover:ring-goldPrime"
										src={
											user?.photoURL
												? user?.photoURL
												: `/img/Logos/BlueInventory favicon Two.png`
										}
										alt={`${user?.displayName} profile image`}
									/>
									<span className="bottom-[-6px] left-7 absolute w-3.5 h-3.5 bg-brightGreenDash border-2 border-white rounded-full " />
								</button>
							</motion.div>
						) : (
							<motion.div
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="relative"
							>
								<Link href="/">
									<Image
										height={500}
										width={500}
										alt="Blue Inventory Company Logo Racing"
										src="/img/Logos/BlueInventory favicon Two.png"
										className="object-contain object-center w-full h-12"
									/>
								</Link>
							</motion.div>
						)}
					</div>
					<div className="mt-20 lg:mt-0">
						<motion.ul
							initial={initial}
							viewport={{once: true}}
							whileInView={stagger}
						>
							<motion.li
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="mb-1 border-b-[1px] border-goldPrime border-opacity-50"
							>
								<Link
									className="block py-4 text-base text-white hover:text-goldPrime"
									href={`/`}
								>
									Home
								</Link>
							</motion.li>
							{context.navbarMenuLinks.navbarMenuLinks?.length > 0 ? (
								context.navbarMenuLinks.navbarMenuLinks?.map((item, keys) => (
									<motion.li
										key={keys}
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="mb-1 border-b-[1px] border-goldPrime border-opacity-50"
									>
										<NavbarMenuLinks
											url={item?.node?.url}
											label={item?.node?.label}
											tailwindStyling="block py-4 text-base text-white hover:text-goldPrime"
										/>
									</motion.li>
								))
							) : (
								<></>
							)}
						</motion.ul>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-4 mt-20">
					<div className="flex flex-col justify-center gap-2">
						<motion.div
							initial={initial}
							viewport={{once: true}}
							whileInView={stagger}
							className="flex flex-col justify-center gap-2 py-6"
						>
							<motion.span
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="flex items-center gap-2 text-white"
							>
								Tel:
								<Link
									className="leading-none text-white transition-all duration-500 ease-in-out text-tiny hover:text-goldPrime"
									href={`tel:${context.themesOptionsContent.phoneNumber}`}
								>
									{context.themesOptionsContent.phoneNumber}
								</Link>
							</motion.span>
							<motion.span
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="flex items-center gap-2 text-white"
							>
								Email:
								<Link
									className="leading-none text-white transition-all duration-500 ease-in-out text-tiny hover:text-goldPrime"
									href={`mailto:${context.themesOptionsContent.email}`}
								>
									{context.themesOptionsContent.email}
								</Link>
							</motion.span>
						</motion.div>
						<motion.ul
							initial={initial}
							viewport={{once: true}}
							whileInView={stagger}
							className="flex items-center justify-start gap-4 mb-4 text-center"
						>
							<motion.li
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="inline-block px-1"
							>
								<Link href={context.themesOptionsContent.facebookLink}>
									<svg
										height="100%"
										className="w-5 h-5"
										style={{
											fill: "#dfc695",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										width="100%"
									>
										<path
											d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
							</motion.li>
							<motion.li
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="inline-block px-1"
							>
								<Link href={context.themesOptionsContent.twitterLink}>
									<svg
										height="100%"
										className="w-5 h-5"
										style={{
											fill: "#dfc695",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										width="100%"
									>
										<path
											d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
							</motion.li>
							<motion.li
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="inline-block px-1"
							>
								<Link href={context.themesOptionsContent.linkedinLink}>
									<svg
										height="100%"
										style={{
											fill: "#dfc695",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										className="w-5 h-5"
										width="100%"
									>
										<path
											d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
							</motion.li>
						</motion.ul>
					</div>
					<div className="flex flex-col justify-end gap-4 mb-4">
						<div>
							{signedInUser ? (
								<div className="flex flex-col items-baseline justify-between gap-x-4 gap-y-8">
									<motion.div
										initial={initial}
										viewport={{once: true}}
										whileInView={stagger}
										className="flex flex-col items-baseline justify-center gap-4 sm:items-center sm:justify-between sm:flex-row"
									>
										<motion.div
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="py-2 bg-center bg-no-repeat bg-cover rounded-sm"
											style={{
												backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-darkblue.svg")`,
											}}
										>
											<Link
												className="w-full px-8 py-3 text-base text-center text-white bg-transparent rounded-sm hover:bg-blue focus:ring-none focus:ring-blue"
												href={`/dashboard`}
											>
												Dashboard
											</Link>
										</motion.div>
										<motion.div
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="bg-center bg-no-repeat bg-cover rounded-sm"
											style={{
												backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-pinkRed.svg")`,
											}}
										>
											<button
												type="button"
												onClick={handleLogout}
												aria-label="Mobile User Sign out button"
												className="w-full px-8 py-2 text-base text-center text-white bg-transparent rounded-sm hover:bg-pinkRed focus:ring-none focus:ring-red"
											>
												Sign out
											</button>
										</motion.div>
									</motion.div>
								</div>
							) : (
								<motion.div
									initial={initial}
									viewport={{once: true}}
									whileInView={stagger}
									className="flex flex-wrap gap-2 -m-2"
								>
									<motion.div
										initial={initial}
										viewport={{once: true}}
										whileInView={fadeInUp}
										className="py-2 bg-center bg-no-repeat bg-cover rounded-sm"
										style={{
											backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow.svg")`,
										}}
									>
										<Link
											className="w-full px-8 py-3 text-sm tracking-widest text-center text-white uppercase bg-transparent hover:bg-goldPrime focus:ring-none focus:ring-blue"
											href={`/sign-in`}
										>
											Sign In
										</Link>
									</motion.div>
									<motion.div
										initial={initial}
										viewport={{once: true}}
										whileInView={fadeInUp}
										className="py-2 bg-center bg-no-repeat bg-cover rounded-sm"
										style={{
											backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-pink-red-yellow.svg")`,
										}}
									>
										<Link
											className="w-full px-8 py-3 text-sm tracking-widest text-center text-white uppercase bg-transparent rounded-sm hover:bg-blue focus:ring-none focus:ring-blue"
											href={`/sign-up`}
										>
											Get Started
										</Link>
									</motion.div>
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default mobileNavbar;