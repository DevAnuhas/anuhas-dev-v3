"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

type CellPosition = [number, number];

const Cell = ({
	rowIdx,
	colIdx,
	clickedCell,
	setClickedCell,
	cellClassName,
}: {
	rowIdx: number;
	colIdx: number;
	clickedCell: CellPosition | null;
	setClickedCell: (position: CellPosition) => void;
	cellClassName?: string;
}) => {
	const controls = useAnimation();

	useEffect(() => {
		if (clickedCell) {
			const distance = Math.sqrt(
				Math.pow(clickedCell[0] - rowIdx, 2) +
					Math.pow(clickedCell[1] - colIdx, 2)
			);
			controls.start({
				opacity: [0, 1 - distance * 0.1, 0],
				transition: { duration: distance * 0.2 },
			});
		}
	}, [clickedCell, rowIdx, colIdx, controls]);

	return (
		<div
			className={cn(
				"bg-transparent border-l border-b border-neutral-600",
				cellClassName
			)}
			onClick={() => setClickedCell([rowIdx, colIdx])}
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileHover={{ opacity: [0, 1, 0.5] }}
				transition={{ duration: 0.5, ease: "backOut" }}
				animate={controls}
				className="bg-[rgba(255,184,122,0.3)] h-16 w-16 md:h-20 md:w-20"
			></motion.div>
		</div>
	);
};

const Pattern = ({
	className,
	cellClassName,
}: {
	className?: string;
	cellClassName?: string;
}) => {
	const x = new Array(47).fill(0);
	const y = new Array(30).fill(0);
	const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
	const [clickedCell, setClickedCell] = useState<CellPosition | null>(null);

	return (
		<div className={cn("flex flex-row relative z-30", className)}>
			{matrix.map((row, rowIdx) => (
				<div
					key={`matrix-row-${rowIdx}`}
					className="flex flex-col relative z-20 border-b"
				>
					{row.map((_, colIdx) => (
						<Cell
							key={`matrix-col-${colIdx}`}
							rowIdx={rowIdx}
							colIdx={colIdx}
							clickedCell={clickedCell}
							setClickedCell={setClickedCell}
							cellClassName={cellClassName}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export const BackgroundCellCore = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const ref = useRef<HTMLDivElement>(null);

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const rect = ref.current?.getBoundingClientRect();
		if (!rect) return;

		setMousePosition({
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		});
	};

	const size = 100; // Size of the radial highlight

	return (
		<div
			ref={ref}
			onMouseMove={handleMouseMove}
			className="h-full absolute inset-0"
		>
			<div className="absolute inset-y-0 overflow-hidden">
				<div className="absolute h-full w-full pointer-events-none bottom-0 z-40 bg-background [mask-image:linear-gradient(to_bottom,transparent,black)]" />
				<div
					className="absolute inset-0 z-20 bg-transparent"
					style={{
						maskImage: `radial-gradient(
              ${size}px circle at ${mousePosition.x}px ${mousePosition.y}px,
              white, transparent
            )`,
						WebkitMaskImage: `radial-gradient(
              ${size}px circle at ${mousePosition.x}px ${mousePosition.y}px,
              white, transparent
            )`,
						maskPosition: "center",
						WebkitMaskPosition: "center",
						WebkitMaskSize: "100% 100%",
						maskSize: "100% 100%",
						pointerEvents: "none",
						maskRepeat: "no-repeat",
						WebkitMaskRepeat: "no-repeat",
					}}
				>
					<Pattern cellClassName="hidden lg:block border-orange-300 relative z-[100]" />
				</div>
				<Pattern className="opacity-[0.2]" cellClassName="border-neutral-700" />
			</div>
		</div>
	);
};
