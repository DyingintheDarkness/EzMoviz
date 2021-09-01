import {useContext} from "react";
import {key} from "./Config"
import { QueryContext } from "./QueryContext";
const Data = () => {
const {query, setData} = useContext(QueryContext)
fetch(`https://advanced-movie-search.p.rapidapi.com/search/movie?query=${query}&page=1`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
		"x-rapidapi-key": "b42a0adebcmsh82db0392d7b036bp14e405jsn6e4516dfc3f5"
	}
})
.then(response => {
	response.json().then(data => {setData(data)
	})
})
.catch(err => {
	console.error(err);
});
return<>
Hello
</>
}
export default Data;