import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Dumbbell, 
  Target, 
  Timer, 
  TrendingUp, 
  Play,
  BarChart3
} from 'lucide-react';

const quickActions = [
  {
    title: 'Start Workout',
    description: 'Begin your training session',
    icon: Play,
    color: 'bg-gradient-primary',
    voice: 'start workout'
  },
  {
    title: 'Exercise Library',
    description: 'Browse exercises & techniques',
    icon: Dumbbell,
    color: 'bg-gradient-secondary',
    voice: 'show exercises'
  },
  {
    title: 'View Progress',
    description: 'Track your fitness journey',
    icon: TrendingUp,
    color: 'bg-gradient-accent',
    voice: 'show progress'
  },
  {
    title: 'Set Goals',
    description: 'Define your targets',
    icon: Target,
    color: 'bg-gradient-hero',
    voice: 'set goals'
  },
  {
    title: 'Workout Timer',
    description: 'Time your rest & exercises',
    icon: Timer,
    color: 'bg-gradient-primary',
    voice: 'open timer'
  },
  {
    title: 'Statistics',
    description: 'Detailed analytics',
    icon: BarChart3,
    color: 'bg-gradient-secondary',
    voice: 'show stats'
  }
];

export function QuickActions() {
  const handleActionClick = (action: any) => {
    // Will integrate with actual navigation later
    console.log('Action clicked:', action.title);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {quickActions.map((action, index) => (
        <Card 
          key={action.title}
          className="relative group cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:scale-105"
          onClick={() => handleActionClick(action)}
        >
          <div className="p-6 space-y-4">
            <div className={`w-16 h-16 rounded-xl ${action.color} flex items-center justify-center shadow-glow group-hover:animate-scale-pulse`}>
              <action.icon className="h-8 w-8 text-white" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {action.title}
              </h3>
              <p className="text-muted-foreground">
                {action.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                Say "{action.voice}"
              </span>
              <Button 
                variant="ghost" 
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Try →
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}