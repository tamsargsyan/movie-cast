import { useEffect, useState } from "react"
import axios from "axios"
import "./index.css"

const Info = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://ghibliapi.herokuapp.com/films").then(resp => {
            console.log(resp.data)
            setData(resp.data)
        })
    }, [])
    return (
        <div className="all-movies">
            {
                data.map((data, i) => (
                    <h3 key={i} className="movie"><span>{i+1}. </span>{data.title}</h3>
              ))
            }
        </div>

    )
}
export default Info