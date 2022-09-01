import { useState } from "react"
import "./index.css"
import Film from "../Film"
import Info from "../../api"

const Search = () => {
    const [enterValue, setEnterValue] = useState("")
    const [getValue, setGetValue] = useState("")
    const [allFilms, setAllFilms] = useState(false)

    return (
        <div className="main">
            <div className="search-wrapper">
                <form>
                    <input type="text" onChange={(e) => {
                        setEnterValue(e.target.value)
                        setGetValue("")
                    }
                    }/>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setGetValue(enterValue)
                    }}>Search</button>
                </form>
                <button className="see-all" onClick={(e) => {
                        e.preventDefault()
                        setAllFilms(true)
                    }}>See All Films</button>
            </div>
            {getValue && <Film data = {getValue}/>}
            {allFilms && <Info />}
        </div>
    )
}
export default Search