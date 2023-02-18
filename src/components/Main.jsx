import { useState, useEffect } from "react"
import ShowCard from "./ShowCard";


export default function Main () {
    const [cartoons, setCartoons] = useState();
    const [dimension, setDimension] = useState('cartoons2D')


    useEffect(() => {
        fetch(`https://netflix-api-al.web.app/shows`)
            .then(res => res.json())
            .then(setCartoons)
            .catch(err => console.error(err))
    }, [dimension])


    return(
        <article>
            <div>
                <nav>
                    <button onClick={() => setDimension('cartoons3D')}>3D</button>
                    <button onClick={() => setDimension('cartoons2D')}>2D</button>
                </nav>
            </div>
            {!cartoons
            ? (<h2>Click here</h2>)
            : (<section id="section">
                {cartoons.map((element) => {
                    return <ShowCard key={element.id} cartoon={element} />
                })}
            </section>)
            }

        </article>

    )
}

