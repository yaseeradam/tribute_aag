import { achievements } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function AchievementsPage() {
  return (
    <div className="animate-in fade-in duration-500 bg-secondary/30">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-headline text-primary">
            A Legacy of Excellence
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Honoring the significant milestones, prestigious awards, and transformative contributions of Professor Gwarzo.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" aria-hidden="true"></div>
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className="md:grid md:grid-cols-2 md:gap-x-12 relative">
                <div className={cn("flex items-center", index % 2 === 0 ? "justify-end" : "justify-start col-start-2")}>
                  <TimelineContent achievement={achievement} index={index} />
                </div>

                <div className="hidden md:flex justify-center items-center">
                   <div className="h-6 w-6 rounded-full bg-accent border-4 border-background z-10"></div>
                </div>

                <div className={cn("flex items-center", index % 2 !== 0 ? "justify-start" : "justify-end col-start-1 row-start-1")}>
                  {index % 2 !== 0 && (
                    <div className="md:hidden">
                       <TimelineContent achievement={achievement} index={index} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineContent({ achievement, index }: { achievement: (typeof achievements)[0], index: number }) {
  const Icon = achievement.icon;
  const alignment = index % 2 === 0 ? 'md:text-right' : 'md:text-left';
  const cardAlignment = index % 2 === 0 ? 'md:items-end' : 'md:items-start';

  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className={cn("flex flex-col", cardAlignment)}>
        <div className="flex items-center gap-4" dir={index % 2 === 0 ? 'rtl' : 'ltr'}>
          <div className="bg-primary text-primary-foreground p-3 rounded-full">
            <Icon className="h-6 w-6" />
          </div>
          <time className={cn("font-bold text-accent text-lg", alignment)}>{achievement.year}</time>
        </div>
        <CardTitle className={cn("font-headline text-2xl mt-2", alignment)}>{achievement.title}</CardTitle>
      </CardHeader>
      <CardContent className={cn(alignment)}>
        <p className="text-muted-foreground">{achievement.description}</p>
      </CardContent>
    </Card>
  );
}
