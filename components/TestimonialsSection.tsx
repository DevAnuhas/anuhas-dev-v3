"use client";

import {
	FadeInUp,
	StaggerContainer,
	StaggerItem,
} from "@/components/ui/motion-wrapper";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";

export default function TestimonialsSection() {
	return (
		<section className="py-20">
			<FadeInUp className="text-center mb-16">
				<h2 className="text-4xl md:text-5xl font-bold mb-4">
					Kind words from{" "}
					<span className="text-primary">satisfied clients</span>
				</h2>
			</FadeInUp>

			<StaggerContainer className="flex flex-col items-center">
				<StaggerItem className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
					<InfiniteMovingCards
						items={testimonials}
						direction="left"
						speed="slow"
					/>
				</StaggerItem>
			</StaggerContainer>
		</section>
	);
}
