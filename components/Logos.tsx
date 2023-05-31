// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {initial, initialTwo, fadeIn, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import LogoCard from "../components/Cards/LogoCard";

interface IProps {
	title: string;
	paragraph: string;
	logoGrid: [
		{
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
}

const logos: FC<IProps> = ({title, paragraph, logoGrid}) => {
	return (
		<section className="px-4 py-10 bg-white lg:px-0">
			<div className="container px-0 mx-auto">
				<motion.h2
					initial={initialTwo}
					viewport={{once: true}}
					whileInView={fadeIn}
					className="mb-10 text-center tracking-wider leading-[2.75rem] text-3xl md:text-4xl"
				>
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling="my-5 w-full lg:max-w-3xl mx-auto text-left"
				/>
				<div className="max-w-6xl mx-auto mt-20">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="grid items-center justify-center grid-cols-2 gap-4 lg:grid-cols-4 lg:justify-between"
					>
						{logoGrid?.length > 0 ? (
							logoGrid.map((item, keys) => (
								<LogoCard key={keys} image={item?.image} />
							))
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default logos;
