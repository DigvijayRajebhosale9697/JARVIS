const btn = document.querySelector('.Talk');
const content = document.querySelector('.Content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if (hr >= 0 && hr < 12) {
        speak("Good Morning Dig-vijay");
    }

    else if (hr > 12 && hr <= 17) {
        speak("Good Afternoon Dig-vijay");
    }

    else if (hr > 17 && hr <= 21) {
        speak("Good Afternoon Dig-vijay");
    }
    else {
        speak("Good Night Dig-vijay");
    }
}

window.addEventListener('load', () => {
    getPasswordAndProceed();
})


function getPasswordAndProceed() {
    const correctPassword = 'JARVIS';
    speak('Please Enter The Password');
    
    while (true) {
        const enteredPassword = prompt("Please Enter The Password:");

        if (enteredPassword === correctPassword) {
            speak("Access granted");
            speak("Allow Me To Introduce Myself");
            speak("I Am Jarvis");
            speak("Dig-vijay's Virtual Personal Assistant");
            speak("and I'm here to assist you with a variety of tasks as best I can, 24 hours a day seven days a week");
            wishMe();
            break;
        } else {
            speak("Incorrect password. Please re-enter the password.");
        }
    }
}
