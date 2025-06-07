"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";
import {
	FadeInUp,
	StaggerContainer,
	StaggerItem,
} from "@/components/ui/motion-wrapper";
import { certifications } from "@/data";

export default function CertificationsSection() {
	return (
		<section className="py-20 px-6">
			<div className="container max-w-4xl mx-auto">
				<FadeInUp className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl leading-snug font-bold mb-4">
						Professional certifications &{" "}
						<span className="text-primary">continuous learning</span>
					</h2>
				</FadeInUp>

				<StaggerContainer className="grid sm:grid-cols-2 gap-8">
					{certifications.map((cert) => (
						<StaggerItem key={cert.id}>
							<div className="glass glass-hover rounded-xl overflow-hidden group">
								<div className="relative">
									<motion.div
										whileHover={{ scale: 1.02 }}
										transition={{ duration: 0.3 }}
									>
										<Image
											src={cert.image || "/placeholder.svg"}
											alt={cert.title}
											width={300}
											height={200}
											className="w-full h-64 md:h-72 object-cover"
										/>
									</motion.div>
									<div className="absolute top-4 right-4">
										<motion.div
											whileHover={{ scale: 1.1, y: -2 }}
											whileTap={{ scale: 0.95 }}
										>
											<Link
												href={cert.url}
												target="_blank"
												rel="noopener noreferrer"
												className="glass-dark glass-hover !bg-background/50 p-2 rounded-full block"
											>
												<LuExternalLink className="w-4 h-4" />
											</Link>
										</motion.div>
									</div>
								</div>

								<div className="p-6 space-y-3">
									<motion.h3
										whileHover={{ color: "primary" }}
										transition={{ duration: 0.2 }}
										className="text-lg font-semibold leading-tight"
									>
										{cert.title}
									</motion.h3>
									<div className="flex items-center justify-between text-sm text-muted-foreground">
										<span>{cert.provider}</span>
										<span>{cert.completedDate}</span>
									</div>
								</div>
							</div>
						</StaggerItem>
					))}
				</StaggerContainer>
			</div>
		</section>
	);
}
