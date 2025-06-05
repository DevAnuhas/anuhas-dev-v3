"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}) => {
	const wordsArray = words.split(" ");

	const containerVariants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.12,
				delayChildren: 0.04,
			},
		},
	};

	const textVariants = {
		hidden: {
			opacity: 0,
			filter: "blur(10px)",
			y: 20,
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const renderWords = () => {
		return (
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={idx}
							className={`inline-block bg-clip-text text-transparent bg-gradient-to-b ${
								idx > 0
									? "from-white to-neutral-500"
									: "from-primary to-orange-400/50"
							}`}
							variants={textVariants}
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-bold", className)}>
			<div className="my-4">
				<div className="dark:text-white text-black leading-20 tracking-wide">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
