# Higher Order Component

参数为组件，返回值为组件的函数
对多组件的公共逻辑进行横向抽离
高阶组件一般命名以 with 开头，如 withLog
高阶组件可以嵌套使用

# Ref

当希望组件“记住”某些信息，但不希望该信息触发新的渲染时，可以使用 ref
使用高阶组件时要注意 ref 转发（将 ref 向下传递给子组件）
React.createRef() 和 useRef()的区别：
每次重新渲染都会执行 React.createRef()，创建出新的 ref
useRef 只有第一次渲染的时候会创建新的 ref，每次重新渲染的时候可以拿到之前的 ref，不会重新创建。函数组件推荐使用 useRef()

# Context

context 允许组件从远程父级接收信息，而无需将其作为 props 传递，可以避免中间元素传递 props
嵌套多个 context
![Pasted image 20240831172215](https://github.com/user-attachments/assets/98427996-6a2d-4556-903d-cb9dd9dac114)
useContext 相当于 context.consumer

# render props

render props 一般应用于组件之间功能逻辑完全相同，仅仅是渲染的视图不同，这个时候可以通过 render props 来指定渲染什么视图；
而 HOC 一般是抽离部分公共逻辑，也就是说组件之间有一部分逻辑相同，但也有各自不同的逻辑时，使用 HOC 更合适

# portals

可以将子节点渲染到父组件以外的 DOM 节点

```tsx
createPortal(<div>Modal</div>, document.body)
```

但是传送的元素身上触发的冒泡事件仍会在定义的地方向上冒泡，而不是在传送目的地向上冒泡

# error boundaries

部分 UI 的 JavaScript 错误不应该导致整个应用崩渍，为了解决这个问题，React16 引入了一个
新的概念一错误边界。
错误边界是一种 React 组件，这种组件可以捕获发生在其子组件树任何位置的 JavaScript 错
误，并打印这些错误，同时展示降级 UI，而并不会煊染那些发生崩渍的子组件树。错误边界可
以捕获发生在整个子组件树的渲染期间、生命周期方法以及构造函数中的错误。

如果一个 class 组件中定义了 static getDerivedStateFromError()或
componentDidCatch()这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个
错误边界。当抛出错误后，请使用 static getDerivedStateFromError()渲染备用 UI,
使用 componentDidCatch()打印错误信息。

# 组件渲染性能优化

## shouldComponentUpdate 与 PureComponent

shouldComponentUpdate 会根据返回值来决定是否重新渲染， 默认是 true

React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component
并未实现 shouldComponentUpdate() ，而 React.PureComponent 中以浅层对比 prop 和
state 的方式来实现了该函数。

## React.memo

在相同的 props 下不会重新渲染
实际上 React.memo 源码中就是返回一个 PureComponent，所以 React.memo 对 props 的比较也是浅层比较
可以通过传入第二个参数自定义比较函数，如果比较函数返回 false 则表示 props 不相同，需要重新渲染，为 true 则不需要重新渲染

## useCallback

**useCallback 对函数进行缓存**

```tsx
import { useState } from "react";
import A from "./A";
import B from "./B";

export default function Third() {
  const [counter, setCounter] = useState(1);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);

  const test = () => {
    console.log("test 触发了");
  };

  console.log("父组件渲染了");
  return (
    <div className="bg-pink-100 w-1/2 p-3 h-80 flex flex-col">
      <div>父组件</div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+ 1</button>
        <div>counter: {counter}</div>
      </div>
      <div className="flex justify-between flex-1">
        <A counter={counter1} setCounter={setCounter1} test={test}></A>
        <B counter={counter2} setCounter={setCounter2} test={test}></B>
      </div>
    </div>
  );
}

```

![Pasted image 20240910220644](https://github.com/user-attachments/assets/c95b2352-96e0-4d49-888e-a233b708e452)

A 组件里点击加一使得父组件状态变化重新渲染，父组件里的 test 函数重新创建，传递给 B 组件的 test 更新，使得 B 组件也重新渲染，用了 memo 也没办法阻止
可以使用 useCallback 针对 test 函数做一个缓存

## useMemo

缓存函数的结果
使用 useMemo 来缓存二次计算的值，并设置了依赖项 count,只有在 count 发生改变时，才会重新执行二次计算

## 面试题：useMemo 和 useCallback 的区别及使用场景？

useMemo 和 useCallback 接收的参数都是一样，第一个参数为回调，第二个参数为要依赖的数据。
共同作用：
仅仅依赖数据发生变化，才会重新计算结果，也就是起到缓存的作用。
两者区别：
1,useMemo 计算结果是 return 回来的值，主要用于缓存计算结果的值。应用场景如：需要进行二次计算的状态
2.useCallback 计算结果是函数，主要用于缓存函数，应用场景如：需要缓存的函数，因为函数式组件每次任何一个 state 的变化，整个组件都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。
