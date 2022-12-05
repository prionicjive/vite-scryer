import {useEffect, useState} from "react";
import './Card.css';

export default ({artOnly = false, imageType = "large"}) => {
    const [cardData, setCardData] = useState({
        name: ``,
        image_uris: {}
    });

    const resolveImageToUse = (cardData, imageType = "large") => {
        const uris = cardData ? cardData.image_uris : {};
        return artOnly ? uris['art_crop'] : uris[imageType];
    }

    useEffect(() => {
        const fetchData = async () => {
            let data = {
                name: ``,
                image_uris: {}
            };

            try {
                const response = await fetch("https://api.scryfall.com/cards/random");
                data = await response.json();
            } catch (e) {
                console.log(e); // TODO Handle error properly
            }

            console.log(JSON.stringify(data, null, 4));
            setCardData(data);
        };

        fetchData();
    }, []);

    return (
        <div className="Card">
            <div className="Card-container">
                <img
                    className="Card-image"
                    alt={cardData?.name}
                    src={resolveImageToUse(cardData)}
                />
            </div>
        </div>
    );
};
