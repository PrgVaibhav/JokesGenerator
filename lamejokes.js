const lameJokes = [
    "What do we call a crying sister? A crisis.",
    "What do you call the security outside of a Samsung Store? Guardians of the Galaxy.",
    "I have a lot of good jokes about unemployed people... But none of them work.",
    "What is blue and not heavy? Light blue.",
    "What do you call a bee that was born is the United States? A USB.",
    "What should you do, if you get locked out of your house? Talk to the lock, because communication is key.",
    "What kind of music is a balloon scared of? Pop music.",
    "Why was the stadium so cold? Because there were a lot of fans.",
    "Why are math books always sad? Because they are filled with problems.",
    "What are the strongest days of the week? Saturday and Sunday the rest are week days.",
    "Why can't a bike stand up on it's own? Because it's two tired.",
    "Why do shoemakers go to heaven? Because they have good soles.",
    "Why couldn't the keyboard sleep? Because it has 2 shifts.",
    "When do jokes become dad jokes? When they become apparent.",
    "Why do plants hate math? It gives them square roots.",
    "Where do animals go when their tails fall off? The retail store.",
    "The man was hit in the head with a can of Sprite. He's okay, it was a soft drink.",
    "What did the baby corn say to the mamma corn? Where's popcorn?",
    "Why didn't the bullet get a job? Because he kept getting fired!",
    "I was going to tell you a joke about an injured deer... but it would have been lame."
]

function randomLameJokes(){
    var randomNumber = Math.floor(Math.random() * (lameJokes.length));
    document.getElementById("displayLameJokes").innerHTML = lameJokes[randomNumber];
}