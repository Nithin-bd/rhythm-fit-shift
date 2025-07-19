import { Card } from '@/components/ui/card';
import { 
  Flame, 
  Clock, 
  Trophy,
  Activity
} from 'lucide-react';

const stats = [
  {
    title: 'Calories Burned',
    value: '1,247',
    unit: 'kcal',
    change: '+12%',
    icon: Flame,
    color: 'text-orange-400'
  },
  {
    title: 'Workout Time',
    value: '45',
    unit: 'min',
    change: '+8%',
    icon: Clock,
    color: 'text-blue-400'
  },
  {
    title: 'Weekly Goals',
    value: '4',
    unit: '/ 5',
    change: '80%',
    icon: Trophy,
    color: 'text-yellow-400'
  },
  {
    title: 'Active Days',
    value: '12',
    unit: 'days',
    change: '+15%',
    icon: Activity,
    color: 'text-green-400'
  }
];

export function StatsOverview() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card 
          key={stat.title}
          className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card group"
        >
          <div className="flex items-center justify-between mb-3">
            <stat.icon className={`h-5 w-5 ${stat.color} group-hover:animate-float`} />
            <span className="text-xs text-green-400 font-medium">
              {stat.change}
            </span>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.unit}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              {stat.title}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}