import { achievements } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            MILESTONES & HONORS
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A journey of excellence, innovation, and transformative impact in education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={achievement.title} className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-bold px-3 py-1">
                      {achievement.year}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {achievement.description}
                  </p>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Building the future of education, one milestone at a time</span>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}