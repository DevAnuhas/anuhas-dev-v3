"use client";

import {
	SiNextdotjs,
	SiTypescript,
	SiNodedotjs,
	SiReact,
	SiExpress,
	SiMongodb,
} from "react-icons/si";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { cn } from "@/lib/utils";
import GridGlobe from "./grid-globe";
import { BackgroundGradientAnimation } from "./gradient-bg";
import { Button } from "./button";
import Image from "next/image";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	id,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	const handleDownload = () => {};

	return (
		<div
			className={cn(
				"row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
				"glass",
				className
			)}
		>
			{/* Image divs */}
			<div className={`${id === 6 && "flex justify-center"} h-full`}>
				<div className="w-full h-full absolute">
					{img && (
						<Image
							src={img}
							alt={img}
							className={cn(imgClassName, "object-cover object-center")}
							width={500}
							height={450}
						/>
					)}
				</div>
				<div
					className={`absolute right-0 -bottom-5 ${
						id === 1 && "w-full opacity-80"
					} `}
				>
					{spareImg && (
						<Image
							src={spareImg}
							alt={spareImg}
							width={220}
							height={220}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div>
				{id === 6 && (
					<BackgroundGradientAnimation>
						<div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
					</BackgroundGradientAnimation>
				)}

				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}
				>
					<div className="font-sans font-extralight md:max-w-64 text-sm lg:text-base text-[#C1C2D3] z-10">
						{description}
					</div>
					<div
						className={`font-sans text-2xl lg:text-3xl max-w-96 font-bold z-10`}
					>
						{title}
					</div>

					{/* 3D Globe */}
					{id === 4 && <GridGlobe />}

					{/* Tech stack list div */}
					{id === 3 && (
						<div className="flex w-fit absolute -right-1 lg:right-0">
							{/* Left column of tech stack icons */}
							<div className="w-full inline-flex flex-nowrap overflow-hidden">
								<div className="[mask-image:linear-gradient(to_bottom,black_0%,transparent_35%,black_50%,transparent_65%)]">
									<ul className="flex flex-col items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll h-auto">
										{/* First set of icons - triple repetition for seamless loop */}
										<li>
											<SiNextdotjs className="text-[#ffffff] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										<li>
											<SiTypescript className="text-[#007ACC] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										<li>
											<SiNodedotjs className="text-[#8CC84B] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										{/* Second repetition */}
										<li>
											<SiNextdotjs className="text-[#ffffff] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										<li>
											<SiTypescript className="text-[#007ACC] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										<li>
											<SiNodedotjs className="text-[#8CC84B] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										{/* Third repetition */}
										<li>
											<SiNextdotjs className="text-[#ffffff] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										<li>
											<SiTypescript className="text-[#007ACC] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										<li>
											<SiNodedotjs className="text-[#8CC84B] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
									</ul>
								</div>
							</div>
							{/* Right column of tech stack icons */}
							<div className="w-full inline-flex flex-nowrap overflow-hidden">
								<div className="[mask-image:linear-gradient(to_bottom,black_0%,transparent_35%,black_50%,transparent_65%)]">
									<ul className="flex flex-col items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll-reverse h-auto">
										{/* First set of icons - triple repetition for seamless loop */}
										<li>
											<SiReact className="text-[#61DAFB] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										<li>
											<SiExpress className="text-[#ffffff] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										<li>
											<SiMongodb className="text-[#4DB33D] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										{/* Second repetition */}
										<li>
											<SiReact className="text-[#61DAFB] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										<li>
											<SiExpress className="text-[#ffffff] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										<li>
											<SiMongodb className="text-[#4DB33D] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										{/* Third repetition */}
										<li>
											<SiReact className="text-[#61DAFB] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										<li>
											<SiExpress className="text-[#ffffff] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
										<li>
											<SiMongodb className="text-[#4DB33D] w-10 h-10 xl:w-12 xl:h-12 my-6" />
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}
					{id === 6 && (
						<div className="mt-5 relative">
							<Button onClick={handleDownload} variant="glossy" size="lg">
								<PiDownloadSimpleBold />
								Downnload CV
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
