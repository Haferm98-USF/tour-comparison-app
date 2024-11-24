// Task 2: Tour List Component

import Reach, { userState, useEffect, useState } from 'react';
import './App.css';

function Gallery() 
{
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

//fetching from API
useEffect(() => 
{
    fetch('https://course-api.com/react-tours-project')

    //Error Handling
    .then(response =>
    {
        if(!response.ok) 
        {
            throw new Error('There was and Error');
        }
        return response.json();
    }
    )
    .then(data => 
    {
        setTours(data);
        setLoading(false);
    }
    )
    .catch(error =>
    {
        setError('Error Fetching Data');
        setLoading(false);
    }
    );
});

//Remove Button
const removeButton = (tourId) =>
{
    const newTours = tours.filter(tour => tour.id !== tourId);
    setTours(newTours);
};

//Toggle Description Button
const toggleButton = (tourId) => 
{
    setTours(tour.map(tour =>
        tour.id === tourId ? { ...tour, showMore: !tour.showMore} : tour
    ));
};

//Loading Message
if (error)
{
    return <div>
        <h1> Tours Available: </h1>
        <ul>
            {tours.map(tour =>
                (
                    <li key={tour.id}>
                        <img src={tour.image}/>
                    <p> {tour.showMor ? tour.info : '${tour.name}...'} </p>
                        <button on onClick={() => toggleButton(tour.id)}></button>
                        <p> ${tour.price}</p>

                        <button onClick={() => removeButton(tour.id)} > Not Interested </button>

                    </li>
                )
            )}
        </ul>
    </div>
}
}

export default Gallery;