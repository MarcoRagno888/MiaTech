import { TodoProvider } from "../Context/TodoContext";
import TodoList from '../TodoList';


const Home = () => {
    return (
        <>
            <TodoProvider>
                <TodoList />
            </TodoProvider>
        </>
    )
}

export default Home;

/**
 * import Card from '../Card';
import ItemList from '../ItemList';
import Counter from '../Counter';
import TextInput from '../TextInput';
import LoginForm from '../LoginForm';
import UncontrolledInput from '../UncontrolledInput'; 
import HelloWorld from '../HelloWorld';
 *
 * <div className="p-4">
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
 */