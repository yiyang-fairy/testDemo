import AriticleType from "./AriticleType";
import AirticleList from "./AirticleList";
export default function HomeAriticle() {
    const airticles = [{
        name: "name",
        url: "url",
        date: '10.09',
        likes: 10,
        title: "title",
        detail: "detail",
        tags: [{
            name: "react"
        }, {
            name: "vue"
        }]
    }]
    return (
        <div>
           <AriticleType></AriticleType>
           <AirticleList airticles={airticles}></AirticleList>
           
        </div>
    )
}