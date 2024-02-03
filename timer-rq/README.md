# Overview

This repo shows my build of a timer project from the [React Quickly book](https://reactquickly.dev/). It uses `Vite` for building the scaffolding with Typescript and Babel options. This repo doesn't use Typescript yet however....

The purpose of this repo is to store my earliest "major" project using React on my own with minimal direction (the linked book has an example solution but it's quite different, the hints were more "story board" ideas rather than in depth technical direction).

This repo is not a great example of my React skills or how to build using React in general, nor is it meant to be.

## Learning and Takeaways

From this project, I applied using the stateful hooks `useState` and `useReducer`, using side effects with `useEffect` and the React notions of moving state up and passing props. Some notes on these:

- I did an ok job componentizing the timer class - breaking it into a Manager, Timer, Buttons, Number and Display. I did not do this for the Timer Form and that is an area of improvement. **takeaway:** it's easier to work with components that are broken down
- I set this project using Vite with Typescript support but didn't utilize Typescript **takeaway:** this gets annoying and I get many (appropriate) eslint issues.
- Typescript with React is supported but different than JS with React so I didn't want to use it for v1 of this project. **takeaway:** pick the support I will use and use it throughout
- Timer State is all over the place. Reducer helps consolidate in the manager, but state is still heavily used in the Timer component. This made implementing Restart and adding multiple timers harder than it needed to be. **takeaway:** consolidate state into more logical units. Timer could just be state in Timer Manager and just pass it down/use dispatch as needed.
- (modern/non classes) React is really functional style. It's like I'm back in fundies 1 at Northeastern. Specifying the data shape of state, declaring it separately and then passing and using it immutably into various functions **takeaway:** It'll be helpful to stick to the design recipe that Northeastern taught more strongly. Purpose, signature, examples/tests and then write code. It's explicitly functional, so I should go back to that mindset.
- This project abstracted some basics like what to build, how it should look, the CSS styling and functionality. I think for other fully independent projects, I should use wireframe mockups and get the design parts. **takeaway:** This is still a really basic project with the hard parts stripped away and the code still came out messy spaghetti style. This is fine as this was to get me used to writing more than just a component in React, but for more real things, I need to keep design in mind.

## Potential future improvements

- Actually use typescript
- componentize form
- get rid of state in Timer, move to Time Manager and expand reducer for resetting timers.
- use better names. Timer* is not necessary in this and names like TimeNumber, TimerForm isn't great. Also I think I'm not using the conventional naming of handle*, use*, onChange* appropriately. Double check these.
