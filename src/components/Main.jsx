import { useState } from "react"
import ShowCard from "./ShowCard";


export default function Main () {
    const [cartoons, setCartoons] = useState();

        fetch(`https://netflix-api-al.web.app/shows`)
            .then(res => res.json())
            .then(setCartoons)
            .catch(err => console.error(err))




    return(
        <article>

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

