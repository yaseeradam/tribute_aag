import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BookOpen, Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
	{
		icon: <BookOpen className="h-8 w-8 text-accent" />,
		title: "About the Professor",
		description: "Discover the life, values, and vision of a true inspiration.",
		href: "/about",
	},
	{
		icon: <Star className="h-8 w-8 text-accent" />,
		title: "Legacy of Achievements",
		description: "Explore the milestones and awards that mark a distinguished career.",
		href: "/achievements",
	},
	{
		icon: <Users className="h-8 w-8 text-accent" />,
		title: "Community &amp; Projects",
		description: "Learn about the institutions and initiatives he has built and influenced.",
		href: "/institutions",
	},
];

export default function Home() {
	const heroImage = PlaceHolderImages.find((img) => img.id === "hero-portrait");

	return (
		<div className="flex flex-col animate-in fade-in duration-500">
			<section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
				{heroImage && (
					<Image
						src={heroImage.imageUrl}
						alt={heroImage.description}
						fill
						className="object-cover"
						priority
						data-ai-hint={heroImage.imageHint}
					/>
				)}
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
				<div className="relative z-10 p-4">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-accent drop-shadow-lg">
						Prof. Adamu Abubakar Gwarzo
					</h1>
					<p className="mt-4 text-lg md:text-2xl font-body max-w-3xl mx-auto drop-shadow-md text-gray-200">
						Celebrating a Visionary Leader and Educationist
					</p>
					<Button asChild className="mt-8" size="lg">
						<Link href="/about">
							Discover His Story <ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</Button>
				</div>
			</section>

			<section className="bg-background py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<Card
								key={feature.title}
								className="text-center border-t-4 border-accent shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in"
								style={{ animationDelay: `${index * 0.2}s` }}
							>
								<CardHeader>
									<div className="mx-auto bg-primary-foreground rounded-full p-4 w-fit mb-4">
										{feature.icon}
									</div>
									<CardTitle className="font-headline text-2xl text-primary">
										{feature.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground mb-4">
										{feature.description}
									</p>
									<Button
										variant="link"
										asChild
										className="text-accent font-semibold"
									>
										<Link href={feature.href}>
											Learn More{" "}
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="bg-secondary py-16 md:py-24">
				<div className="container mx-auto px-4 text-center max-w-4xl">
					<h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">
						A Lasting Impact
					</h2>
					<p className="text-lg text-muted-foreground mb-8">
						Explore the profound legacy of a leader dedicated to advancing education
						and empowering communities across Africa and beyond. His work continues to
						inspire new generations of thinkers, innovators, and leaders.
					</p>
					<div className="flex justify-center gap-4">
						<Button asChild size="lg" variant="outline">
							<Link href="/legacy">His Legacy &amp; Vision</Link>
						</Button>
						<Button asChild size="lg" className="bg-tertiary hover:bg-tertiary/90">
							<Link href="/guestbook">Leave a Message</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
