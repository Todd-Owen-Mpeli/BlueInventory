// Imports
import {FC} from "react";
import {IDashBoardLayout} from "@/types/Dashboard/layout/index";

// Components
import Meta from "../Meta/Meta";
import Navigation from "./Navigation";

// Styling
import styles from "@/styles/pages/Dashboard.module.scss";

const Layout: FC<IDashBoardLayout> = ({children}) => {
	return (
		<>
			<Meta />

			<div className={styles.dashboard}>
				<Navigation />
				<div className="flex flex-col w-full border-[5px] p-4 border-pureBlack rounded-xl bg-lightGrey">
					{children}
				</div>
			</div>
		</>
	);
};

export default Layout;