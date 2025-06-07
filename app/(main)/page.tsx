import BentoGridSection from "@/components/BentoGridSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<BentoGridSection />
			<ProjectsSection />
			<TestimonialsSection />
		</>
	);
}
