import Card from "../Card/Card.jsx";
import './CardBox.css';

function CardBox({
                      artOnly = true,
                      random = true
                  }) {
    // TODO Get a bulk data fetch of cards for this to push down
    // TODO Use promise.all to get 4 at a time
    // TODO Push that fetching up even higher, such as into Limbo


    return (
        <div className="CardBox">
            <div className="CardBox-container">
                <div className="CardBox-box">
                    <Card artOnly={artOnly} random={random}/>
                    <Card artOnly={artOnly} random={random}/>
                    <Card artOnly={artOnly} random={random}/>
                    <Card artOnly={artOnly} random={random}/>
                    <Card artOnly={artOnly} random={random}/>
                    <Card artOnly={artOnly} random={random}/>
                    <Card artOnly={artOnly} random={random}/>
                    <Card artOnly={artOnly} random={random}/>
                    <Card artOnly={artOnly} random={random}/>
                </div>
            </div>
        </div>
    );
}

export default CardBox;