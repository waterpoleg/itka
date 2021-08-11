import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import MainMenu from "./components/MainMenu/MainMenu";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <MainMenu/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs store={props.store} state={props.state.dialogsPage} /> } />
                    <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
                                                                   dispatch={props.dispatch} /> } />
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
