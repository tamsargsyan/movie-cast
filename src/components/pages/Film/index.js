import { useState, useEffect } from "react"
import "./index.css"
import Info from "../../api"
import axios from "axios"

const Film = (props) => {
    const [movieBanner, setMovieBanner] = useState("")
    const [movieTitle, setMovieTitle] = useState("")
    const [originalTitle, setOriginalTitle] = useState("")
    const [description, setDescription] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    
    useEffect(() => {
        axios.get("https://ghibliapi.herokuapp.com/films").then(resp => {
            console.log(resp.data)
            for(let i = 0; i < resp.data.length; i++) {
                if(props.data.toLowerCase() === resp.data[i].title.toLowerCase()) {
                    setMovieBanner(resp.data[i].movie_banner)
                    setMovieTitle(resp.data[i].title)
                    setOriginalTitle(resp.data[i].original_title)
                    setDescription(resp.data[i].description)
                    setReleaseDate(resp.data[i].release_date)
                }
            }
        })
    }, [])
    return (
        <div className="movie-wrapper">
            <div className="movie-banner">
                <img src={movieBanner}/>
            </div>
            <div className="info">
                <h1>{movieTitle} ({releaseDate})</h1>
                <h3>{originalTitle}</h3>
                <h4>{description}</h4>
            </div>
        </div>
    )
}
export default Film