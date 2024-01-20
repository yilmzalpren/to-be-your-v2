import './App.css'
import logo from '../logo.svg'
import Header from './Header'

const headerProps = {
    pageTitle : "Login Page",
    logoSrc : logo
}


function App() {
    return (
        <div>
            <Header {...headerProps} /> 
        </div>
    );
};

export default App;