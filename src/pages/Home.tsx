import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VoiceControl } from '@/components/VoiceControl';
import { QuickActions } from '@/components/QuickActions';
import { StatsOverview } from '@/components/StatsOverview';
import { 
  User, 
  Settings, 
  Bell,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import fitnessHero from '@/assets/fitness-hero.jpg';

export default function Home() {
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? 'Good Morning' : currentTime < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">FitVoice</h1>
                <p className="text-sm text-muted-foreground">AI Fitness Assistant</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <VoiceControl />
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0">
            <img 
              src={fitnessHero} 
              alt="Fitness motivation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          </div>
          
          <div className="relative p-8 lg:p-12">
            <div className="max-w-2xl space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  {greeting}, Alex!
                </h2>
                <p className="text-xl text-muted-foreground">
                  Ready to crush your fitness goals with voice-powered workouts?
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  Start Voice Workout
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Today's Plan
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                💡 <strong>Voice Tip:</strong> Say "Start workout" or tap the mic to begin
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">Today's Progress</h3>
            <Button variant="ghost" size="sm">
              View All <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <StatsOverview />
        </section>

        {/* Quick Actions */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-foreground">What would you like to do?</h3>
            <p className="text-muted-foreground">Tap any card or use voice commands to get started</p>
          </div>
          <QuickActions />
        </section>

        {/* Voice Instructions */}
        <section className="mt-12">
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Voice Commands</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">"Start workout"</strong> - Begin training session
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">"Show progress"</strong> - View your stats
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">"Open timer"</strong> - Launch workout timer
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">"Show exercises"</strong> - Browse library
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">"Set goals"</strong> - Define targets
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">"Show stats"</strong> - Detailed analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}