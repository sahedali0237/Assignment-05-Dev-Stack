## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make it easier to create and understand the UI of a component.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. **State** is data that belongs to a component and can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store and update data. I used it to manage the changing data in the project, such as the stack/items and other user interactions.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code when a component renders or when its dependencies change. I used it to load the JSON data when the component first loaded.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React efficiently update, add, or remove items when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. For example, I showed an empty stack message only when the stack had no items:

```jsx
{stack.length === 0 && <p>Your stack is empty.</p>}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**:

```jsx
<Child data={data} />
```

A child can send something back by calling a function that the parent passes as a prop:

```jsx
<Child onAction={handleAction} />
```

The child then calls `onAction()` when it needs to send information to the parent.
