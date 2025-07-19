import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function VoiceControl() {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if speech recognition is supported
    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognition);
  }, []);

  const startListening = async () => {
    if (!isSupported) {
      toast({
        title: "Speech not supported",
        description: "Your browser doesn't support speech recognition. Please use Chrome or Edge.",
        variant: "destructive"
      });
      return;
    }

    try {
      const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        toast({
          title: "Listening...",
          description: "Say a command like 'Start workout' or 'Show progress'"
        });
      };

      recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(command);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        toast({
          title: "Voice command failed",
          description: "Please try again or check your microphone permissions.",
          variant: "destructive"
        });
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (error) {
      console.error('Failed to start speech recognition:', error);
      setIsListening(false);
    }
  };

  const handleVoiceCommand = (command: string) => {
    console.log('Voice command:', command);
    
    // Basic voice command routing (will expand with ElevenLabs integration)
    if (command.includes('workout') || command.includes('exercise')) {
      toast({
        title: "Starting Workout",
        description: "Voice command recognized: " + command
      });
    } else if (command.includes('progress') || command.includes('stats')) {
      toast({
        title: "Showing Progress",
        description: "Voice command recognized: " + command
      });
    } else if (command.includes('timer')) {
      toast({
        title: "Opening Timer",
        description: "Voice command recognized: " + command
      });
    } else {
      toast({
        title: "Command not recognized",
        description: `Try: "Start workout", "Show progress", or "Open timer"`
      });
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="voice"
        size="icon"
        onClick={startListening}
        disabled={isListening}
        className="relative"
      >
        {isListening ? (
          <MicOff className="h-5 w-5 animate-pulse" />
        ) : (
          <Mic className="h-5 w-5" />
        )}
        {isListening && (
          <div className="absolute -inset-1 rounded-full border-2 border-primary animate-ping" />
        )}
      </Button>
      
      <div className="text-sm text-muted-foreground">
        {isListening ? 'Listening...' : 'Tap to speak'}
      </div>
      
      <Volume2 className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}

// Extend Window interface for speech recognition
declare global {
  interface Window {
    speechRecognition: any;
    webkitSpeechRecognition: any;
  }
}