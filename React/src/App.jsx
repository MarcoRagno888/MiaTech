import { TodoProvider } from './Context/TodoContext';
import HelloWorld from './Components/HelloWorld';
import TodoList from './Components/TodoList';
import Card from './Components/Card';
import ItemList from './Components/ItemList';
import Counter from './Components/Counter';
import TextInput from './Components/TextInput';
import LoginForm from './Components/LoginForm';
import UncontrolledInput from './Components/UncontrolledInput';

const App = () => {

  return (
    <TodoProvider>

      <div className="p-4">
        <HelloWorld />
      </div>

      <div className="divider"></div>

      <Counter />

      <div className="divider"></div>

      <TextInput />

      <div className="divider"></div>

      <LoginForm />

      <div className="divider"></div>

      <UncontrolledInput />

      <div className="divider"></div>

      <ItemList list={["Link 1", "Link 2", "Link 3"]} />

      <div className="divider"></div>

      <Card>
        <h1>Titolo</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>

      <div className="divider"></div>

      <TodoList />

    </TodoProvider>
  )
}

export default App;
