import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.scss'],
  standalone: false,
})
export class SpeechToTextComponent implements OnInit {
  @Output() convertedText = new EventEmitter<string>();

  recognition: any;
  isListening = false;
  transcript: string = '';
  silenceTimer: any;
  silenceTimeout = 3000;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {}

  toggleListening() {
    if (this.isListening) {
      this.stopListening();
    } else {
      this.startListening();
    }
  }

  startListening() {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support speech recognition. Please use Chrome.');
      return;
    }

    this.recognition = new (window as any).webkitSpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.onstart = () => {
      this.ngZone.run(() => {
        this.isListening = true;
        this.resetSilenceTimer();
      });
    };

    this.recognition.onresult = (event: any) => {
      this.resetSilenceTimer();
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      if (finalTranscript) {
        this.ngZone.run(() => {
          this.convertedText.emit(finalTranscript);
        });
      }
    };

    this.recognition.onerror = (event: any) => {
      this.ngZone.run(() => {
        this.isListening = false;
        this.clearSilenceTimer();
      });
    };

    this.recognition.onend = () => {
      if (this.isListening) {
        this.recognition.start();
      } else {
        this.ngZone.run(() => {
          this.isListening = false;
          this.clearSilenceTimer();
        });
      }
    };

    this.recognition.start();
  }

  stopListening() {
    if (this.recognition) {
      this.isListening = false;
      this.recognition.stop();
      this.clearSilenceTimer();
    }
  }

  resetSilenceTimer() {
    this.clearSilenceTimer();
    this.silenceTimer = setTimeout(() => {
      this.ngZone.run(() => {
        this.stopListening();
      });
    }, this.silenceTimeout);
  }

  clearSilenceTimer() {
    if (this.silenceTimer) {
      clearTimeout(this.silenceTimer);
      this.silenceTimer = null;
    }
  }
}