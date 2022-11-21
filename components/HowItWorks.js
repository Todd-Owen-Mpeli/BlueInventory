import Image from "next/image";
import KUTE from "kute.js";
import styles from "../styles/components/CTAOne.module.scss";

const HowItWorks = (props) => {
	// const tween = KUTE.fromTo(
	// 	"#w11",
	// 	{path: "#w11"},
	// 	{path: "#w21"},
	// 	{path: "#w31"},
	// 	{repeat: 999, duration: 3000, yoyo: true}
	// ).start();

	return (
		<section className={styles.HowItWorks} id="HowItWorks">
			<div className="backgroundSVG relative">
				<img
					src="/svg/backgroundSVG/backgroundWaveOne.svg"
					className="absolute w-full object-cover"
					alt=""
					width="75px"
					height="75px"
				/>
			</div>
			{/* <div className="backgroundSVG relative">
				<svg
					id="visual"
					width="100%"
					height="450"
					viewBox="0 0 900 450"
					className="absolute w-full object-cover"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					version="1.1"
				>
					<g id="waveOne">
						<path
							id="w11"
							d="M0 319L21.5 325.3C43 331.7 86 344.3 128.8 337.2C171.7 330 214.3 303 257.2 296.7C300 290.3 343 304.7 385.8 305.8C428.7 307 471.3 295 514.2 294.5C557 294 600 305 642.8 301.7C685.7 298.3 728.3 280.7 771.2 289.7C814 298.7 857 334.3 878.5 352.2L900 370L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
							fill="#ff6f61"
						></path>
						<path
							id="w12"
							d="M0 185L21.5 193.3C43 201.7 86 218.3 128.8 228.3C171.7 238.3 214.3 241.7 257.2 247.2C300 252.7 343 260.3 385.8 253.2C428.7 246 471.3 224 514.2 210.5C557 197 600 192 642.8 196C685.7 200 728.3 213 771.2 211.7C814 210.3 857 194.7 878.5 186.8L900 179L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
							fill="#f35c62"
						></path>
						<path
							id="w13"
							d="M0 229L21.5 214C43 199 86 169 128.8 157.7C171.7 146.3 214.3 153.7 257.2 166.7C300 179.7 343 198.3 385.8 199.2C428.7 200 471.3 183 514.2 178.8C557 174.7 600 183.3 642.8 194.8C685.7 206.3 728.3 220.7 771.2 222C814 223.3 857 211.7 878.5 205.8L900 200L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
							fill="#e64964"
						></path>
						<path
							id="w14"
							d="M0 138L21.5 138C43 138 86 138 128.8 132.3C171.7 126.7 214.3 115.3 257.2 116.8C300 118.3 343 132.7 385.8 130.7C428.7 128.7 471.3 110.3 514.2 108.5C557 106.7 600 121.3 642.8 126.7C685.7 132 728.3 128 771.2 133.2C814 138.3 857 152.7 878.5 159.8L900 167L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
							fill="#d73666"
						></path>
						<path
							id="w15"
							d="M0 109L21.5 105.5C43 102 86 95 128.8 84.8C171.7 74.7 214.3 61.3 257.2 62.8C300 64.3 343 80.7 385.8 82C428.7 83.3 471.3 69.7 514.2 64.5C557 59.3 600 62.7 642.8 67.8C685.7 73 728.3 80 771.2 84.3C814 88.7 857 90.3 878.5 91.2L900 92L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
							fill="#c62368"
						></path>
					</g>

					<g id="waveTwo">
						<path
							id="w21"
							style="visibility:hidden"
							d="M0 406L12.3 397C24.7 388 49.3 370 74 371.5C98.7 373 123.3 394 148 413.5C172.7 433 197.3 451 221.8 431.2C246.3 411.3 270.7 353.7 295.2 355.5C319.7 357.3 344.3 418.7 369 441C393.7 463.3 418.3 446.7 443 405.7C467.7 364.7 492.3 299.3 517 294.2C541.7 289 566.3 344 591 347.7C615.7 351.3 640.3 303.7 664.8 278.3C689.3 253 713.7 250 738.2 258.3C762.7 266.7 787.3 286.3 812 313.8C836.7 341.3 861.3 376.7 886 397.5C910.7 418.3 935.3 424.7 947.7 427.8L960 431L960 0L947.7 0C935.3 0 910.7 0 886 0C861.3 0 836.7 0 812 0C787.3 0 762.7 0 738.2 0C713.7 0 689.3 0 664.8 0C640.3 0 615.7 0 591 0C566.3 0 541.7 0 517 0C492.3 0 467.7 0 443 0C418.3 0 393.7 0 369 0C344.3 0 319.7 0 295.2 0C270.7 0 246.3 0 221.8 0C197.3 0 172.7 0 148 0C123.3 0 98.7 0 74 0C49.3 0 24.7 0 12.3 0L0 0Z"
							fill="#fa7268"
						></path>
						<path
							id="w22"
							style="visibility:hidden"
							d="M0 357L12.3 341.8C24.7 326.7 49.3 296.3 74 275.8C98.7 255.3 123.3 244.7 148 226.2C172.7 207.7 197.3 181.3 221.8 206.3C246.3 231.3 270.7 307.7 295.2 327.3C319.7 347 344.3 310 369 289.2C393.7 268.3 418.3 263.7 443 248.8C467.7 234 492.3 209 517 198.3C541.7 187.7 566.3 191.3 591 194.8C615.7 198.3 640.3 201.7 664.8 199.3C689.3 197 713.7 189 738.2 215.8C762.7 242.7 787.3 304.3 812 327.3C836.7 350.3 861.3 334.7 886 321C910.7 307.3 935.3 295.7 947.7 289.8L960 284L960 0L947.7 0C935.3 0 910.7 0 886 0C861.3 0 836.7 0 812 0C787.3 0 762.7 0 738.2 0C713.7 0 689.3 0 664.8 0C640.3 0 615.7 0 591 0C566.3 0 541.7 0 517 0C492.3 0 467.7 0 443 0C418.3 0 393.7 0 369 0C344.3 0 319.7 0 295.2 0C270.7 0 246.3 0 221.8 0C197.3 0 172.7 0 148 0C123.3 0 98.7 0 74 0C49.3 0 24.7 0 12.3 0L0 0Z"
							fill="#eb5967"
						></path>
						<path
							id="w23"
							style="visibility:hidden"
							d="M0 257L12.3 230.7C24.7 204.3 49.3 151.7 74 131.8C98.7 112 123.3 125 148 148.3C172.7 171.7 197.3 205.3 221.8 226C246.3 246.7 270.7 254.3 295.2 261.8C319.7 269.3 344.3 276.7 369 272.3C393.7 268 418.3 252 443 219.7C467.7 187.3 492.3 138.7 517 124.5C541.7 110.3 566.3 130.7 591 133.3C615.7 136 640.3 121 664.8 141.3C689.3 161.7 713.7 217.3 738.2 216.3C762.7 215.3 787.3 157.7 812 160.5C836.7 163.3 861.3 226.7 886 225.3C910.7 224 935.3 158 947.7 125L960 92L960 0L947.7 0C935.3 0 910.7 0 886 0C861.3 0 836.7 0 812 0C787.3 0 762.7 0 738.2 0C713.7 0 689.3 0 664.8 0C640.3 0 615.7 0 591 0C566.3 0 541.7 0 517 0C492.3 0 467.7 0 443 0C418.3 0 393.7 0 369 0C344.3 0 319.7 0 295.2 0C270.7 0 246.3 0 221.8 0C197.3 0 172.7 0 148 0C123.3 0 98.7 0 74 0C49.3 0 24.7 0 12.3 0L0 0Z"
							fill="#da3f67"
						></path>
						<path
							id="w24"
							style="visibility:hidden"
							d="M0 136L12.3 113.3C24.7 90.7 49.3 45.3 74 33.8C98.7 22.3 123.3 44.7 148 71.8C172.7 99 197.3 131 221.8 129.8C246.3 128.7 270.7 94.3 295.2 69.8C319.7 45.3 344.3 30.7 369 35.8C393.7 41 418.3 66 443 65C467.7 64 492.3 37 517 47.7C541.7 58.3 566.3 106.7 591 105.7C615.7 104.7 640.3 54.3 664.8 44.3C689.3 34.3 713.7 64.7 738.2 66.2C762.7 67.7 787.3 40.3 812 51.5C836.7 62.7 861.3 112.3 886 132.5C910.7 152.7 935.3 143.3 947.7 138.7L960 134L960 0L947.7 0C935.3 0 910.7 0 886 0C861.3 0 836.7 0 812 0C787.3 0 762.7 0 738.2 0C713.7 0 689.3 0 664.8 0C640.3 0 615.7 0 591 0C566.3 0 541.7 0 517 0C492.3 0 467.7 0 443 0C418.3 0 393.7 0 369 0C344.3 0 319.7 0 295.2 0C270.7 0 246.3 0 221.8 0C197.3 0 172.7 0 148 0C123.3 0 98.7 0 74 0C49.3 0 24.7 0 12.3 0L0 0Z"
							fill="#c62368"
						></path>
					</g>

					<g id="waveThree">
						<path
							id="w31"
							style="visibility:hidden"
							d="M0 280L26.7 294.7C53.3 309.3 106.7 338.7 160 368.3C213.3 398 266.7 428 320 440.5C373.3 453 426.7 448 480 428.3C533.3 408.7 586.7 374.3 640 347.3C693.3 320.3 746.7 300.7 800 291C853.3 281.3 906.7 281.7 933.3 281.8L960 282L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z"
							fill="#fa7268"
						></path>
						<path
							id="w32"
							style="visibility:hidden"
							d="M0 385L26.7 369.3C53.3 353.7 106.7 322.3 160 296.3C213.3 270.3 266.7 249.7 320 253C373.3 256.3 426.7 283.7 480 274.7C533.3 265.7 586.7 220.3 640 201.2C693.3 182 746.7 189 800 204C853.3 219 906.7 242 933.3 253.5L960 265L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z"
							fill="#eb5967"
						></path>
						<path
							id="w33"
							style="visibility:hidden"
							d="M0 113L26.7 135.8C53.3 158.7 106.7 204.3 160 201.3C213.3 198.3 266.7 146.7 320 134.2C373.3 121.7 426.7 148.3 480 171.5C533.3 194.7 586.7 214.3 640 228.2C693.3 242 746.7 250 800 226.8C853.3 203.7 906.7 149.3 933.3 122.2L960 95L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z"
							fill="#da3f67"
						></path>
						<path
							id="w34"
							style="visibility:hidden"
							d="M0 87L26.7 86.8C53.3 86.7 106.7 86.3 160 102.5C213.3 118.7 266.7 151.3 320 153.5C373.3 155.7 426.7 127.3 480 106.5C533.3 85.7 586.7 72.3 640 71.7C693.3 71 746.7 83 800 74.3C853.3 65.7 906.7 36.3 933.3 21.7L960 7L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z"
							fill="#c62368"
						></path>
					</g>
				</svg>
			</div> */}
			<div className="container mx-auto px-0 z-50 relative">
				<div className={styles.content}>
					<div className="py-12 md:py-28 xl:py-28 px-6 md:px-10 xl:px-12">
						<div className="mb-16 text-center mx-auto">
							<span className="text-white text-xl font-bold">
								{props.title.title}
							</span>
							<h2 className="mb-6 mt-8 text-4xl md:text-6xl text-center text-white md:text-black lg:text-white font-bold font-heading tracking-px-n leading-none md:max-w-5xl mx-auto">
								{props.title.subtitle}
							</h2>
						</div>
						<div className="flex flex-col gap-10 lg:gap-20 xl:gap-36 mt-10 lg:mt-36">
							<div className="flex flex-col md:flex-row justify-between items-center gap-20">
								<div className="w-full lg:w-1/2 mb-5 lg:mb-0">
									<span className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center bg-flatPinkRed rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/analysis.png"
											className="object-contain"
											alt=""
											width="75px"
											height="75px"
										/>
									</span>
									<h5 className="mb-4 text-base uppercase font-bold text-center lg:text-left font-heading text-lightBlue">
										{props.data.subtitleOne}
									</h5>
									<h3 className="mb-4 text-3xl font-bold font-heading text-center lg:text-left text-black">
										{props.data.titleOne}
									</h3>
									<p className="text-black text-base text-center lg:text-left leading-relaxed">
										{props.data.textAreaOne}
									</p>
								</div>
								<div className="w-full lg:w-1/2">
									<Image
										src={props.data.imageOne}
										className="w-full h-full object-cover rounded-[15px]"
										alt="Image One"
										width="100"
										height="100"
										layout="responsive"
									/>
								</div>
							</div>
							<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-20">
								<div className="w-full lg:w-1/2">
									<Image
										src={props.data.imageTwo}
										className="w-full h-full object-cover rounded-[15px]"
										alt="Image One"
										width="100"
										height="100"
										layout="responsive"
									/>
								</div>
								<div className="w-full lg:w-1/2 mb-5 lg:mb-0">
									<span className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center bg-lightBlue rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/bar-graph.png"
											className="object-contain"
											alt=""
											width="75px"
											height="75px"
										/>
									</span>
									<h5 className="mb-4 text-base uppercase font-bold font-heading text-center lg:text-left text-lightBlue">
										{props.data.subtitleTwo}
									</h5>
									<h3 className="mb-4 text-3xl font-bold font-heading text-center lg:text-left text-black">
										{props.data.titleTwo}
									</h3>
									<p className="text-black text-base text-center lg:text-left leading-relaxed">
										{props.data.textAreaTwo}
									</p>
								</div>
							</div>
							<div className="flex flex-col md:flex-row justify-between items-center gap-20">
								<div className="w-full lg:w-1/2 mb-5 lg:mb-0">
									<span className="mx-auto lg:mx-0 mb-6 lg:mb-10 flex w-[7rem] h-[7rem] items-center justify-center bg-limeGreen rounded-full text-white text-2xl">
										<Image
											src="/img/Icons/graph.png"
											className="object-contain"
											alt=""
											width="75px"
											height="75px"
										/>
									</span>
									<h5 className="mb-4 text-base uppercase font-bold font-heading text-center lg:text-left text-lightBlue">
										{props.data.subtitleThree}
									</h5>
									<h3 className="mb-4 text-3xl font-bold font-heading text-center lg:text-left text-black">
										{props.data.titleThree}
									</h3>
									<p className="text-black text-base text-center lg:text-left leading-relaxed">
										{props.data.textAreaThree}
									</p>
								</div>
								<div className="w-full lg:w-1/2 px-0">
									<Image
										src={props.data.imageThree}
										className="w-full h-full object-cover rounded-[15px]"
										alt="Image One"
										width="100"
										height="100"
										layout="responsive"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
