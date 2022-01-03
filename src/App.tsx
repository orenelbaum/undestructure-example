import { Component, createSignal } from 'solid-js';
import { component } from 'babel-plugin-solid-undestructure'

const Child = component(({ count: c = 100, ...other }: any) => {
  return (
    <button onclick={other.increment}>{c}</button>
  );
});


const App: Component = () => {
  const [count, setCount] = createSignal()
  const increment = () => setCount(count() ? count() + 1 : 1);

  return (
    <Child count={count()} {...{increment}}/>
  );
};

export default App