 
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
	function HOC() {
		return (
			<div
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={`md:padding max-w-7xl mx-auto relative z-0`}
			>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>

				<Component />
			</div>
		);
	};

export default SectionWrapper;
