# Web Development Project 2 - General Facts Flashcards

Submitted by: Harshita Bhardwaj

This web app tests assesses the the user's general knowlege of basic elementary level facts. The web app with generate a random card on each reload and give the users an option to cycle through a set of cards in a random order. If the user cycles through all the cards then the deck is shuffled again.

Time spent: 6 hours spent in total

## Required Features

The following **required** functionality is completed:

- [✅] **The user can enter their guess in a box before seeing the flipside of the card**
- [✅] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
  - I do this by incrementing the current streak if they get the right answer, and the current streak is set to 0 if the wrong answer is given.
- [✅] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [✅] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [ ] A shuffle button is used to randomize the order of the cards
  - In my web app the cards are automatically shuffled on each reload
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [✅] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:
- A random card is generated from the list of avaliable cards
* One thing that I added to my flashcards web app was making it so if the user clicks on the back button then the next button they are taken back to the card they were viewing to make the flashcards more practical. Once the use makes it to the last new card they saw a new random card will be drawn

## Issues I ran into
- Making an object attribute increment. For some reason I was unable to make an object attribute increment, but if I attempted to increment a different atrribute it would do so without any issues.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXFyczIzaTliaGI5dHJzYXVwbndzN256YzJsOTZrdXQwbWJ2NjQxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/weWWFkMNEwYlv9EtuT/giphy.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif

## Notes

## License

    Copyright 2024 Harshita Bhardwaj

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.