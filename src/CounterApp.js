
import Header from './features/layout/Header';
import './App.css'
import Counter from './features/counter/Counter';
const CounterApp = () => {
    return (
        <div>
            <main className='container'>
                <Counter />
            </main>
        </div>
    );
}
export default CounterApp;
