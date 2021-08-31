import { useContext } from "react"
import { QueryContext } from "./QueryContext"
import Data from "./Data"
const Movie = (item) => {
return(<>
<h1>{item.item.title}</h1>
</>)
}
const Movies = () => {
    const {data, query} = useContext(QueryContext)
    console.log(data);
    const items = {
        "page": 1,
        "results": [
            {
                "imdbid": "tt13570530",
                "genre": [
                    "Documentary"
                ],
                "released": 2021,
                "title": "Salzburg. Eine Kunstgeschichte.",
                "type": "movie"
            },
            {
                "imdbid": "tt14141184",
                "genre": [
                    "Drama"
                ],
                "released": 2021,
                "title": "Kalira Atita",
                "type": "movie"
            },
            {
                "imdbid": "tt14264308",
                "genre": [
                    "Animation",
                    "Music"
                ],
                "released": 2021,
                "title": "Bang Dream! Film Live 2nd Stage",
                "type": "movie"
            },
            
            
        ]
    }
    return (
        <>
        {query ? <Data/>: "No Results Found"}
        {/* {query ? items["results"].forEach(item => {
            if(item.title.startsWith(query)){
                console.log(item.title);
                return <Movie item={item}/>
   }
        }): ""} */}
        
        </>
    )
}
export default Movies;
