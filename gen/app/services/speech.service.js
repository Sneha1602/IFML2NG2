"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SpeechService = (function () {
    function SpeechService(input) {
        if ('speechSynthesis' in window) {
            console.log('Your browser supports speech synthesis.');
        }
        else {
            alert('Sorry your browser does not support speech synthesis. Try this in <a href="https://www.google.com/chrome/browser/desktop/index.html">Google Chrome</a>.');
        }
        var SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;
        var SpeechSynthesis = window.SpeechSynthesis;
        // Create a new instance of SpeechSynthesisUtterance.
        var msg = new SpeechSynthesisUtterance();
        // Set the text.
        msg.text = input;
        // Set the attributes.
        msg.lang = 'en-US';
        // msg.voice = 'native'; msg.voice = 'Google US English'; //  'Google UK English Female' 
        msg.voice = 'Google US English';
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 1;
        //  msg.onend = function(event) { console.log('Speech complete'); }
        // Queue this utterance.
        var talk = new SpeechSynthesis();
        window.talk.speak(msg);
    }
    SpeechService.prototype.speaking = function (msg1) {
        var SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;
        var SpeechSynthesis = window.SpeechSynthesis;
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
        window.talk.speak(msg);
    };
    SpeechService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [String])
    ], SpeechService);
    return SpeechService;
}());
exports.SpeechService = SpeechService;
//# sourceMappingURL=speech.service.js.map