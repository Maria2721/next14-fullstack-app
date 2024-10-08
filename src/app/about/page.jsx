import Image from "next/image";
import styles from "./about.module.scss";

const AboutPage = () => {
	return (
		<div>
			AboutPage
			<div className={styles.imgContainer}>
				<Image
					src="/about.png"
					alt="About Image"
					fill
					className={styles.img}
				/>
			</div>
		</div>
	);
};

export default AboutPage;
