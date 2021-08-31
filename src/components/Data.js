import {useContext} from "react";
import {key} from "./Config"
import { QueryContext } from "./QueryContext";
const Data = () => {
const {query, setData} = useContext(QueryContext)
fetch(`https://filmaffinity-unofficial.p.rapidapi.com/movie/search/?query=${query}&lang=en`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "filmaffinity-unofficial.p.rapidapi.com",
		"x-rapidapi-key": key
	}
})
.then(response => {
response.json().then(data => setData(data))
})
.catch(err => {
	// console.error(err);
});
return<>
Hello
</>
}
export default Data;