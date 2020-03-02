[Live demo](https://langy-gf.herokuapp.com/) 

YouTube [video demo](https://www.youtube.com/watch?v=JIN6EXIwLgg)

#### Back-End Repository
[Langy (Back-End)](https://github.com/grahamflas/langy-backend/tree/master)

Langy is a flashcard app for learning foreign languages built with React, Redux, and Ruby on Rails. 

It allows users to study and quiz themselves on vocabulary words in six languages:   British English (for fun), French, German, Korean, Persian, Spanish. 

Each language has over 100 vocabulary words grouped into 10 thematic flashcard "decks."

The app has three modes: 

(1) STUDY MODE:  In study mode, the user is familiarizing themself with the words in a selected deck.  THe user sees a flashcard front with a word in the target language. When the user hovers over the flashcard, it flips over to reveal the English translation on the back of the card. The user can flip through the entire deck, forwards and backwards, an unlimited amount of times.

(2) DRILL MODE:  In drill mode, the user sees only the front of the flashcard with the vocabulary word in the target language. Below the card are four multiple choice answers. One answer is correct and the other three are sampled from other words in the selected deck to increase the difficulty. After making a selection, the user is either alerted that their choice was correct and taken to the next card or alerted that their choice was incorrect and allowed to make another choice.

(3) QUIZ MODE:  In quiz mode, the user only sees the word in the target language and must supply the English translation in an input field. The user's input is case insensitive and whitespace and punctuation are stripped out. Once the user has made a guess for all words in the deck, the user is given a score. If the user supplied the correct translation for each word, they are taken back to the main flashcard deck page for the current language. If the user didn't answer all words correctly, they are given a chance to try again.
