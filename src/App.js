import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import MainMenu from "./components/MainMenu/MainMenu";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <MainMenu/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <DialogsContainer /> } />
                    <Route path='/profile' render={ () => <Profile /> } />
                    {/*<Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>*/}
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
