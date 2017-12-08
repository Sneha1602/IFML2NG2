import { Injectable } from '@angular/core';

export interface IWindow extends Window{
        SpeechSynthesisUtterance: any;
        SpeechSynthesis: any;
    }

    @Injectable()
     export class SpeechService{
         constructor(input:String){
                 if ('speechSynthesis' in window) {
                    console.log('Your browser supports speech synthesis.');
                // speak('hi');
                } else {
                    alert('Sorry your browser does not support speech synthesis. Try this in <a href="https://www.google.com/chrome/browser/desktop/index.html">Google Chrome</a>.');
                }
        const {SpeechSynthesisUtterance}: IWindow = <IWindow>window;
        const {SpeechSynthesis}: IWindow = <IWindow>window;

       // Create a new instance of SpeechSynthesisUtterance.
        var msg = new SpeechSynthesisUtterance();
        // Set the text.
        msg.text = input;
       // Set the attributes.
        msg.lang = 'en-US';
       // msg.voice = 'native'; msg.voice = 'Google US English'; //  'Google UK English Female' 
        msg.voice = 'Google US English' 
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 1;
       //  msg.onend = function(event) { console.log('Speech complete'); }
        // Queue this utterance.
        var talk = new SpeechSynthesis();
       (window as any).talk.speak(msg);
        }

        public speaking(msg1:string){
            const {SpeechSynthesisUtterance}: IWindow = <IWindow>window;
            const {SpeechSynthesis}: IWindow = <IWindow>window;
            
            var msg = new SpeechSynthesisUtterance();
            // Set the text.
            msg.text = msg1;
           // Set the attributes.
            msg.lang = 'en-US';
           // msg.voice = 'native'; msg.voice = 'Google US English'; //  'Google UK English Female' 
            //msg.voice = 'Google US English' 
            msg.volume = 1;
            msg.rate = 1;
            msg.pitch = 1;
           //  msg.onend = function(event) { console.log('Speech complete'); }
            // Queue this utterance.
            var talk = new SpeechSynthesis();
           (window as any).talk.speak(msg);
          }
     }
