"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInUp } from "@/components/ui/motion-wrapper";
import { education, workExperience } from "@/data";

export default function ExperienceSection() {
	return (
		<section className="py-20 px-8">
			<div className="container max-w-6xl mx-auto">
				<FadeInUp className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl leading-snug font-bold mb-4">
						A journey through
						<br />
						<span className="text-primary">
							academic & professional milestones
						</span>
					</h2>
				</FadeInUp>

				<div className="grid lg:grid-cols-2 gap-24">
					{/* Education Section */}
					<div className="space-y-8">
						<FadeInUp delay={0.2}>
							<div className="flex items-center space-x-3 mb-8">
								<h3 className="text-2xl font-semibold">Academic Journey</h3>
							</div>
						</FadeInUp>

						<div className="timeline">
							{education.map((edu, index) => (
								<motion.div
									key={edu.id}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
									className="timeline-item"
								>
									<div className="glass glass-hover rounded-xl p-6">
										<div className="flex items-start space-x-4">
											<div className="glass-dark rounded-full p-3 flex-shrink-0">
												<Image
													src={edu.logo || "/placeholder.svg"}
													alt={`${edu.institution} logo`}
													width={40}
													height={40}
													className="rounded-full"
												/>
											</div>

											<div className="flex-1 space-y-2">
												<div className="flex flex-col">
													<h4 className="text-lg font-semibold">
														{edu.degree}
													</h4>
													<span className="text-sm text-muted-foreground">
														{edu.duration}
													</span>
												</div>
												<div className="flex items-center space-x-2">
													<p className="text-primary font-medium">
														{edu.institution}
													</p>
												</div>
												<p className="text-muted-foreground text-sm leading-relaxed">
													{edu.description}
												</p>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Work Experience Section */}
					<div className="space-y-8">
						<FadeInUp delay={0.4}>
							<div className="flex items-center space-x-3 mb-8">
								<h3 className="text-2xl font-semibold">Work Experience</h3>
							</div>
						</FadeInUp>

						<div className="timeline">
							{workExperience.map((exp, index) => (
								<motion.div
									key={exp.id}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
									className="timeline-item"
								>
									<div className="glass glass-hover rounded-xl p-6">
										<div className="flex items-start space-x-4">
											<div className="glass-dark rounded-full p-3 flex-shrink-0">
												<Image
													src={exp.logo || "/placeholder.svg"}
													alt={`${exp.company} logo`}
													width={40}
													height={40}
													className="rounded-full"
												/>
											</div>

											<div className="flex-1 space-y-2">
												<div className="flex flex-col">
													<h4 className="text-lg font-semibold">
														{exp.position}
													</h4>
													<span className="text-sm text-muted-foreground">
														{exp.duration}
													</span>
												</div>
												<div className="flex items-center space-x-2">
													<p className="text-primary font-medium">
														{exp.company}
													</p>
												</div>
												<p className="text-muted-foreground text-sm leading-relaxed">
													{exp.description}
												</p>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
