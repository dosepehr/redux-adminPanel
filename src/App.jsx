import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <>
            <Header />
            <div class='container px-0'>
                <main class='main'>
                    <div class='row justify-content-between mx-0'>
                        <Sidebar />
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;

