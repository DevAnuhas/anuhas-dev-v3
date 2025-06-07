"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	FadeInUp,
	StaggerContainer,
	StaggerItem,
} from "@/components/ui/motion-wrapper";
import { socialLinks, contactInfo } from "@/data/index";

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-background">
			<div className="pt-32 px-6 pb-20">
				<div className="container max-w-3xl mx-auto">
					<FadeInUp className="text-center mb-16">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							Get In Touch
						</h1>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							Let&apos;s discuss your next project or collaboration opportunity
						</p>
					</FadeInUp>

					<FadeInUp delay={0.2}>
						<motion.div
							whileHover={{ y: -2 }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
							className="glass rounded-xl p-8 md:p-12"
						>
							<div className="grid md:grid-cols-2 gap-8">
								{/* Contact Information */}
								<div className="space-y-6">
									<h3 className="text-xl font-semibold mb-6">
										Contact Information
									</h3>

									<StaggerContainer className="space-y-6">
										{contactInfo.map((info) => (
											<StaggerItem key={info.label}>
												<motion.div
													whileHover={{ x: 5 }}
													transition={{
														type: "spring",
														stiffness: 400,
														damping: 17,
													}}
													className="flex items-center space-x-4"
												>
													<div className="glass-dark p-3 rounded-full">
														<info.icon className="w-5 h-5 text-primary" />
													</div>
													<div className="group">
														<p className="text-sm text-muted-foreground">
															{info.label}
														</p>
														{info.href ? (
															<div className="group-hover:!text-primary">
																<Link href={info.href}>{info.value}</Link>
															</div>
														) : (
															<p className="text-foreground">{info.value}</p>
														)}
													</div>
												</motion.div>
											</StaggerItem>
										))}
									</StaggerContainer>
								</div>

								{/* Social Links */}
								<div className="space-y-6">
									<h3 className="text-xl font-semibold mb-6">
										Connect With Me
									</h3>

									<StaggerContainer className="space-y-4">
										{socialLinks.map((social) => (
											<StaggerItem key={social.label}>
												<motion.div
													whileHover={{ scale: 1.02, x: 5 }}
													whileTap={{ scale: 0.98 }}
													transition={{
														type: "spring",
														stiffness: 400,
														damping: 17,
													}}
												>
													<Link
														href={social.href}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center space-x-4 p-4 glass-dark glass-hover rounded-lg group"
													>
														<motion.div
															whileHover={{ scale: 1.1, rotate: 5 }}
															transition={{
																type: "spring",
																stiffness: 400,
																damping: 17,
															}}
														>
															<social.icon className="w-5 h-5 text-primary" />
														</motion.div>
														<motion.span
															className="group-hover:!text-primary"
															transition={{ duration: 0.2 }}
														>
															{social.label}
														</motion.span>
													</Link>
												</motion.div>
											</StaggerItem>
										))}
									</StaggerContainer>

									<FadeInUp delay={0.6} className="pt-6">
										<p className="text-sm text-muted-foreground leading-relaxed">
											I&apos;m always interested in hearing about new
											opportunities and exciting projects. Feel free to reach
											out if you&apos;d like to collaborate!
										</p>
									</FadeInUp>
								</div>
							</div>
						</motion.div>
					</FadeInUp>
				</div>
			</div>
		</main>
	);
}
