import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function BentoGridSection() {
	return (
		<section className="px-8 relative flex justify-center items-center">
			<BentoGrid className="container w-full pb-20">
				{gridItems.map((item, i) => (
					<BentoGridItem
						id={item.id}
						key={i}
						title={item.title}
						description={item.description}
						className={item.className}
						img={item.img}
						imgClassName={item.imgClassName}
						titleClassName={item.titleClassName}
						spareImg={item.spareImg}
					/>
				))}
			</BentoGrid>
		</section>
	);
}
