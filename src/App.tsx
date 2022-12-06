import { Component, createSignal } from "solid-js";
import { component } from "babel-plugin-solid-undestructure";

const Child = component(({ count: c = 100, ...other }: any) => {
  const NestedChild: Component<{ doubleCount: number }> = ({ doubleCount }) => {
    return (
      <div>
        {c} * 2 = {doubleCount}
      </div>
    );
  };

  return (
    <>
      <button onclick={other.increment}>{c}</button>
      <NestedChild doubleCount={c * 2} />
    </>
  );
});

const App: Component = () => {
  const [count, setCount] = createSignal<number | undefined>();
  const increment = () => setCount(count() ? count()! + 1 : 1);

  return <Child count={count()} {...{ increment }} />;
};

export default App;
