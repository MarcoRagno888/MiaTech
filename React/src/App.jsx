import HelloWorld from './HelloWorld';

const Counter = () => {
  return (
    <div className='p-4'>Counter: 0</div>
  )
}

const App = () => {

  return (
    <>
      <div class="p-4">
        <HelloWorld />
      </div>

      <div className="divider"></div>

      <Counter />
      
    </>
  )
}

export default App;
