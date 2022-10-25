import TinderCard from "react-tinder-card";
import {useEffect, useState} from "react";
import database from "./firebase.js";
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {

    const unsubscribe = database.collection('people').onSnapshot(snapshot => (
      setPeople(snapshot.docs.map(doc => doc.data()))
    ));

    return () => {
      //cleanup
      unsubscribe();
    }
  }, []);

  return (
    //BEM
    <div>
      <h1>Tinder Cards</h1>

      <div className="tinderCards_cardContainer">
        {people.map(person => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up','down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})`}}
              className="card">
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
