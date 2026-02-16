---
title: "Setting up React 18"
date: 2023-09-15
excerpt: "React 18 introduces concurrent rendering, a foundational update that allows React to interrupt rendering to handle urgent user interactions. This guide walks through the migration steps, highlighting the new createRoot API and how to leverage automatic batching for better performance."
---

React 18 introduces concurrent rendering, a foundational update that allows React to interrupt rendering to handle urgent user interactions. This guide walks through the migration steps, highlighting the new createRoot API and how to leverage automatic batching for better performance.

## The New createRoot API

The most visible change in React 18 is the new root API. Previously, you would mount your app like this:

```js
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));
```

Now, you use `createRoot`:

```js
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

This new API is what enables concurrent features. Without it, React 18 will behave essentially like React 17.

## Automatic Batching

In React 17, state updates inside event handlers were batched, but updates inside promises, timeouts, or native event handlers were not. React 18 batches all updates by default, regardless of where they originate.

This means fewer re-renders and better performance out of the box — no code changes required.
