import HeroSection from "@/components/HeroSection";
import BentoGridSection from "@/components/BentoGridSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<BentoGridSection />
			<ProjectsSection />
			<TestimonialsSection />
			<ExperienceSection />
			<CertificationsSection />
			<CTASection />
		</>
	);
}
