import Link from "next/link";
import { FadeInUp } from "@/components/ui/motion-wrapper";
import { Button } from "@/components/ui/button";

export default function CTASection() {
	return (
		<section className="pt-20 px-8">
			<div className="flex flex-col items-center">
				<FadeInUp className="text-center">
					<h1 className="text-4xl md:text-5xl leading-snug font-bold mb-4 md:max-w-3xl">
						Ready to take <span className="text-primary">your</span> digital
						presence to the next level?
					</h1>
					<p className="text-white-200 md:mt-10 my-5 text-center">
						Reach out to me today and let&apos;s discuss how I can help you
						achieve your goals.
					</p>
					<Link href="/contact">
						<Button className="glossy-button mt-4" size={"lg"}>
							Let&apos;s get in touch
						</Button>
					</Link>
				</FadeInUp>
			</div>
		</section>
	);
}
