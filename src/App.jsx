import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import SchoolGuide from './components/SchoolGuide';
import FloorGuide from './components/FloorGuide';
import RoomGuide from './components/RoomGuide';
import Footer from './components/Footer';

class App extends React.Component {
    render() {
        return (
            <div class="container">
                <Header />
                <main>
                    <BrowserRouter>
                        <Route exact path='/cidmap' component={SchoolGuide}/>
                        <Route exact path='/cidmap/floor:numFloor' component={FloorGuide}/>
                        <Route exact path='/cidmap/floor:numFloor/room:numRoom' component={RoomGuide}/>
                    </BrowserRouter>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;