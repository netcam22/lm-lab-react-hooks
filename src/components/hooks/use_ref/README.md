# useRef

`useRef` is a React Hook that lets you reference a value that’s not needed for rendering.

👉 Make yourself familiar with the files in this `hooks/useRef` folder.

## Mission 1

In the `count_renders.tsx` file there is an input field which updates some state. Every time a user types in the input field, the entire component is re-rendered.

Hmm, so how could we count how many times, for example, the component itself gets rendered...?

Theoretically, you could could make a `useEffect` fire on every render (by not giving it a dependency array). When the `useEffect` fires, you could then update some state to keep track of each render. However, the state changing would cause another render... which would fire the `useEffect` again... which would update the state... which would cause another re-render... which would update the state... You'd get stuck in an infinite loop! Ahhhhhhhhhhhhh. 🔁 😱

Your mission is to count how many times the `countRenders` component renders, WITHOUT getting stuck in an infinite loop!

Use the `useRef` hook and (React documentation)[https://react.dev/reference/react/useRef] to help you!

## Mission 2

In `focus.tsx` there is an input field and a button. When a user clicks on the button, the input field should become focussed. 
Use the input elements special "ref" attribute to make the code work.

Hint: the ref should reference your useRef variable.

## Have I solved Mission 1 correctly?

If you have implemented `useRef` correctly, you should:

-   See the number of renders displayed on the screen ✅

-   The count should go up every time you type a character in the input field ✅

⚠️ NOTE: Your components will render _twice_ due to development mode / `<StrictMode>` (so don't worry if this happens, its supposed to!)

You can read more about Strict Mode here: https://react.dev/reference/react/StrictMode

If you get stuck, see `useRef/hints.md`
## Have I solved Mission 2 correctly?

- When the button is clicked on the input field should become focussed

If you get stuck, see `useRef/hints.md`

## Food For Thought

-   What things can `useRef` be used for, aside from counting the renders of a component?

-   How is `useRef` different to `useState`? 🤔

-   How do we know whether to use `useRef` or `useState`?

Use the React documentation to help you: https://react.dev/reference/react/useRef
