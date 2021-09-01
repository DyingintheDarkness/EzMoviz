import { useContext } from "react"
import { QueryContext } from "./QueryContext"
import Data from "./Data"
const Movie = ({item}) => {
    const {title, overview, poster_path} = item
return(<>
<div>
    <img src={poster_path} alt="" srcset="" />
    <h1>{title}</h1>
    <p>{overview}</p>
</div>
</>)
}
const Movies = () => {
    const {data, query} = useContext(QueryContext)
    localStorage.setItem("data", JSON.stringify(data))
    return (
        <>
        {/* {query ? <Data/>: "No Results Found"} */}
        {query ? data["results"].map(item => {
            if(item.title.startsWith(query)){
                return <Movie item={item} key={item.id}/>
   }
        }
        ): ""}

        </>
    )
}

const LocalMovies = () => {
    const {query, setData, data} = useContext(QueryContext)
    const newData = JSON.parse(localStorage.getItem("data"))
    if(newData){
        setData(newData)
     } 
     return (
        <>
        {query ? data["results"].map(item => {
            if(item.title.startsWith(query)){
                return <Movie item={item} key={item.id}/>
            }
        }
        ): ""}

        </>
    )
}

export{
    Movies,
    LocalMovies
}


