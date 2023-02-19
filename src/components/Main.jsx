import { useState, useEffect } from "react"
import ShowCard from "./ShowCard";


export default function Main () {
    const [cartoons, setCartoons] = useState();
    const [dimension, setDimension] = useState()


    useEffect(() => {
        fetch(`https://netflix-api-al.web.app/shows`)
            .then(res => res.json())
            .then(setCartoons)
            .catch(err => console.error(err))
    }, [dimension])


    return(
        <article>

            {!cartoons
            ? (<h2>Loading...</h2>)
            : (<section id="section">
                {cartoons.map((element) => {
                    return <ShowCard key={element.id} cartoon={element} />
                })}
            </section>)
            }

        </article>

    )
}

