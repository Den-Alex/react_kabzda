import React, { useState } from 'react';
import './App.css';
import {Accordion} from './component/Accordion/Accordion';
import { OnOff } from './component/OnOff/OnOff';
import { Rating, RatingPropsType } from './component/Rating/Rating';


function App() {
    let [ratingValue, setRatingValue] = useState<RatingPropsType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true);
    let [on, setOn] = useState(true);
    return (
        <div className="App">
            {/*<Accordion name='Marina' onClick={() => {setAccordionCollapsed(!accordionCollapsed)}} collapsed={accordionCollapsed} />*/}
            {/*<Accordion name='Karina' />*/}
            {/*Article 1*/}
            {/*<Rating />*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff on={on} onClick={() => {setOn(!on)}}/>*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
        </div>
    );
}

export default App;
