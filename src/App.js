import './App.css';
import Home from "./components/Home"
import Search from "./components/Search"
import { useState } from 'react';

import { QueryContext} from './components/QueryContext';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState({
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
            "genre_ids": [
                28,
                12,
                14
            ],
            "id": 399566,
            "original_language": "en",
            "original_title": "Godzilla vs. Kong",
            "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
            "popularity": 588.449,
            "poster_path": "https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
            "release_date": "2021-03-24",
            "title": "Godzilla vs. Kong",
            "video": false,
            "vote_average": 7.9,
            "vote_count": 6819
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/nVodCGKYLpqNC8YwQAbivKlWCgZ.jpg",
            "id": 293167,
            "original_language": "en",
            "original_title": "Kong: Skull Island",
            "overview": "Explore the mysterious and dangerous home of the king of the apes as a team of explorers ventures deep inside the treacherous, primordial island.",
            "popularity": 58.342,
            "poster_path": "https://image.tmdb.org/t/p/original/r2517Vz9EhDhj88qwbDVj8DCRZN.jpg",
            "release_date": "2017-03-08",
            "title": "Kong: Skull Island",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 8419
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/mRM2NB0i3wv4HqxXvwIjEVi4Qqq.jpg",
            "genre_ids": [
                12,
                18,
                28
            ],
            "id": 254,
            "original_language": "en",
            "original_title": "King Kong",
            "overview": "In 1933 New York, an overly ambitious movie producer coerces his cast and hired ship crew to travel to mysterious Skull Island, where they encounter Kong, a giant ape who is immediately smitten with the leading lady.",
            "popularity": 39.314,
            "poster_path": "https://image.tmdb.org/t/p/original/lBtlVlECMW98tz3a3O1C2s1vric.jpg",
            "release_date": "2005-12-12",
            "title": "King Kong",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 6158
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/originalnull",
            "genre_ids": [],
            "id": 856355,
            "original_language": "en",
            "original_title": "Shen Kong",
            "overview": "",
            "popularity": 25.882,
            "poster_path": "https://image.tmdb.org/t/p/originalnull",
            "release_date": "2021-09-01",
            "title": "Shen Kong",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/mgUh0FmaJ0hgDgmWaVKsaMy9r7P.jpg",
            "genre_ids": [
                12,
                18,
                27
            ],
            "id": 10730,
            "original_language": "en",
            "original_title": "King Kong",
            "overview": "In this remake of the 1933 classic, an oil company expedition disturbs the peace of a giant ape and brings him back to New York to exploit him.",
            "popularity": 17.53,
            "poster_path": "https://image.tmdb.org/t/p/original/paYKhEwUaxKA05vmOfU7FlleTln.jpg",
            "release_date": "1976-09-08",
            "title": "King Kong",
            "video": false,
            "vote_average": 6.2,
            "vote_count": 573
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/lYfHa1AtkUMtplrKx7SRLHpwonW.jpg",
            "genre_ids": [
                12,
                27,
                878
            ],
            "id": 244,
            "original_language": "en",
            "original_title": "King Kong",
            "overview": "Adventurous filmmaker, Carl Denham, sets out to produce a motion picture unlike anything the world has seen before. Alongside his leading lady Ann Darrow and his first mate Jack Driscoll, they arrive on an island and discover a legendary creature said to be neither beast nor man. Denham captures the monster to displayed on Broadway as Kong, the eighth wonder of the world.",
            "popularity": 13.33,
            "poster_path": "https://image.tmdb.org/t/p/original/lHlnxKL5GbgRibyRFI7n1Ey850i.jpg",
            "release_date": "1933-03-15",
            "title": "King Kong",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 978
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/5nAYjMYxC8bHc7sKCFhfd6y3eMa.jpg",
            "genre_ids": [
                28,
                12,
                878
            ],
            "id": 686487,
            "original_language": "en",
            "original_title": "King Kong vs. Godzilla",
            "overview": "US version. The re-edited John Beck version of the film: released outside of Japan and restructured with new footage of American actors centering around a news report plot not present in the original. Eric Carter of United Nation News is joined by Dr. Arnold Johnson as a prehistoric monster emerges from hibernation while a pharmaceutical company seeks publicity with their own monster.",
            "popularity": 12.379,
            "poster_path": "https://image.tmdb.org/t/p/original/akcfxp3tXJYfuro1XTgEFny9yzC.jpg",
            "release_date": "1963-06-26",
            "title": "King Kong vs. Godzilla",
            "video": false,
            "vote_average": 7,
            "vote_count": 157
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/naYXUQJ3I9FUVL2as8QToEeMO8e.jpg",
            "genre_ids": [
                14,
                28,
                12
            ],
            "id": 31947,
            "original_language": "en",
            "original_title": "King Kong Lives",
            "overview": "After falling from the Twin Towers, Kong lies in a coma for ten years. When his heart begins to fail, scientists engineer an artificial heart, and a giant female ape is captured to serve as a source for a blood transfusion. When Kong awakens following his heart transplant, he senses the nearby presence of the female ape and the two escape to wreak havoc together.",
            "popularity": 10.94,
            "poster_path": "https://image.tmdb.org/t/p/original/gI37vg2otF348OHxsx97hWCVvNI.jpg",
            "release_date": "1986-12-19",
            "title": "King Kong Lives",
            "video": false,
            "vote_average": 5.3,
            "vote_count": 128
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/2GK6KVgIAKrqjqg9VPAm5qdOly.jpg",
            "genre_ids": [
                28,
                35,
                53,
                18
            ],
            "id": 11053,
            "original_language": "it",
            "original_title": "Piedone a Hong Kong",
            "overview": "Inspector Rizzo is accused of drug trafficking. In order to clear his name he has to find out who is the person, from a Mafia ring, who has infiltrated his police department.",
            "popularity": 6.854,
            "poster_path": "https://image.tmdb.org/t/p/original/pQuv3NrVxFFAtkVrcoHtNM8qHSt.jpg",
            "release_date": "1975-06-26",
            "title": "Flatfoot in Hong Kong",
            "video": false,
            "vote_average": 6.1,
            "vote_count": 92
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/r8Ao60h2qk7R95QoTcV4ClyUfB0.jpg",
            "genre_ids": [
                12,
                35,
                28
            ],
            "id": 43149,
            "original_language": "en",
            "original_title": "The Son of Kong",
            "overview": "Beleaguered adventurer Carl Denham returns to the island where he found King Kong.",
            "popularity": 7.565,
            "poster_path": "https://image.tmdb.org/t/p/original/eJ2Qe3tesoKUtWNJRDpHKz1xCJc.jpg",
            "release_date": "1933-12-22",
            "title": "The Son of Kong",
            "video": false,
            "vote_average": 5.3,
            "vote_count": 73
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/xGaloya0EgeP0BGbxm2lTEX82Zo.jpg",
            "genre_ids": [
                35,
                10749
            ],
            "id": 2984,
            "original_language": "en",
            "original_title": "A Countess From Hong Kong",
            "overview": "A Russian countess stows away in the stateroom of a married U.S. diplomat bound for New York.",
            "popularity": 9.849,
            "poster_path": "https://image.tmdb.org/t/p/original/tig8FxhKYfP7yWtrl0Ivcf90f6q.jpg",
            "release_date": "1967-01-05",
            "title": "A Countess From Hong Kong",
            "video": false,
            "vote_average": 6.1,
            "vote_count": 115
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/cw8rlL3gwdLnuBT8CdHBaTT61Sc.jpg",
            "genre_ids": [
                10749
            ],
            "id": 339148,
            "original_language": "en",
            "original_title": "Already Tomorrow in Hong Kong",
            "overview": "In this sparkling romance, Ruby, a Chinese American toy designer from LA, visits Hong Kong for the first time on business. Finding herself stranded, she meets Josh, an American expat who shows her the city.",
            "popularity": 8.212,
            "poster_path": "https://image.tmdb.org/t/p/original/t29XqPXlN5LBtzBoRo2pDsljrou.jpg",
            "release_date": "2016-02-12",
            "title": "Already Tomorrow in Hong Kong",
            "video": false,
            "vote_average": 6.1,
            "vote_count": 90
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/xSC3PiNopaTnTbJWgcJOhzDzQE0.jpg",
            "genre_ids": [
                35
            ],
            "id": 75227,
            "original_language": "no",
            "original_title": "Kong Curling",
            "overview": "Once a great curling star, Truls Paulsen is diagnosed with obsessive-compulsive disorder and banned from competition. But when he learns that his old friend and coach Gordon is on his deathbed, Truls, heavily-medicated decides to compete again, in the hopes of winning money for Gordon to have an operation in the US. Truls stops taking the meds and tries to convince his old team mates that he is mentally stable enough to lead them to victory in the Norwegian Curling Championship. But, is it a good sign that he obsessively insists his teammates pull their zippers all the way up before they can play?",
            "popularity": 2.777,
            "poster_path": "https://image.tmdb.org/t/p/original/6jud1vtsG2J6BLMhX4LpH7JJE3B.jpg",
            "release_date": "2011-09-23",
            "title": "Curling King",
            "video": false,
            "vote_average": 5.7,
            "vote_count": 19
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/cXN62FQwOoBcKlIJ9uE3Cn5wHAc.jpg",
            "genre_ids": [
                99
            ],
            "id": 13958,
            "original_language": "en",
            "original_title": "The King of Kong: A Fistful of Quarters",
            "overview": "In this hilarious arcade showdown, a humble novice goes head-to-head against the reigning Donkey Kong champ in a confrontation that rocks the gaming world to its processors! For over 20 years, Billy Mitchell has owned the throne of the Donkey Kong world. No one could beat his top score until now. Newcomer Steve Wiebe claims to have beaten the unbeatable, but Mitchell isn't ready to relinquish his crown without a fight. Go behind the barrels as the two battle it out in a vicious war to earn the title of the true King of Kong.",
            "popularity": 7.791,
            "poster_path": "https://image.tmdb.org/t/p/original/wACtXGiO08EBbJhqsD2nUzPsrKe.jpg",
            "release_date": "2007-03-25",
            "title": "The King of Kong: A Fistful of Quarters",
            "video": false,
            "vote_average": 7.9,
            "vote_count": 326
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/originalnull",
            "genre_ids": [
                35
            ],
            "id": 49757,
            "original_language": "en",
            "original_title": "Kinky Kong",
            "overview": "In Manhattan, Seymour is a fast-talking, flatulent, frustrated director of titillation flicks, in search of fame and fortune. With a crudely drawn map, he sets sail for Bone Island, his crew including Fanny, his latest discovery. The island is home to the legendary Kinky Kong, a massive gorilla. The crew overcomes the ape and takes him back to New York to exhibit - but chains break, and the ape is on the loose. Liberty is in danger.",
            "popularity": 2.274,
            "poster_path": "https://image.tmdb.org/t/p/original/gZObuxKXXTFHCnl32jNWJlUe0ek.jpg",
            "release_date": "2006-09-05",
            "title": "Kinky Kong",
            "video": false,
            "vote_average": 5.3,
            "vote_count": 6
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/originalnull",
            "genre_ids": [
                80,
                18,
                10749
            ],
            "id": 460802,
            "original_language": "fr",
            "original_title": "Joy à Hong Kong",
            "overview": "For the need of sitting with a well know photographer, Joy fly to Hong-Kong, where she meet her best friend Alain. With him, they go to visit the hottest districts of the city. She is kidnapped and prisonnered in a brothel and has to pay a high proce for her freedom. Fortunately, a rich client accept to help Alain to find her and to save her from the female's dealer.",
            "popularity": 2.314,
            "poster_path": "https://image.tmdb.org/t/p/original/byl9FrcAnq9puQAosBDkukXySFR.jpg",
            "release_date": "1992-06-06",
            "title": "Joy in Hong Kong",
            "video": false,
            "vote_average": 4.3,
            "vote_count": 3
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/vsDa5SvlBJRRkF9KmqagyARTAGH.jpg",
            "genre_ids": [
                35,
                12
            ],
            "id": 56140,
            "original_language": "en",
            "original_title": "Queen Kong",
            "overview": "A female film crew journeys to Africa where a giant ape, Queen Kong, falls in love with the crew's male star.",
            "popularity": 1.696,
            "poster_path": "https://image.tmdb.org/t/p/original/9RgT8W8pzsG8MF7RhKBVMcKoBHB.jpg",
            "release_date": "1976-12-10",
            "title": "Queen Kong",
            "video": false,
            "vote_average": 4,
            "vote_count": 12
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/originalnull",
            "genre_ids": [
                10751,
                16,
                12
            ],
            "id": 100065,
            "original_language": "en",
            "original_title": "Kong: King of Atlantis",
            "overview": "Gigantic Kong, who has reborn from the original King Kong DNA and the DNA from his human  'brother' Jason, is the king of the island where it lives.  But now, according to an ancient prophecy, the ancient civilization of Atlantis has resurfaced from the seabed and its evil queen wants him to govern with him to become again Kong: King of Atlantis.  But Jason and his brave friends try to prevent the plans of the queen facing soldiers, enormous animals, many obstacles, puzzles and enemies.  In the midst of exciting action-packed adventures, Jason will have to use his special powers of cyber-union so that he and Kong will become a single hero. Only together can save Kong Island ...",
            "popularity": 2.722,
            "poster_path": "https://image.tmdb.org/t/p/original/nSAo3NzaeuX7u1WkFjeCKR5fLek.jpg",
            "release_date": "2005-11-22",
            "title": "Kong: King of Atlantis",
            "video": false,
            "vote_average": 5,
            "vote_count": 4
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/original/y1MJJPzf3FUOQgdNv037BLMjioM.jpg",
            "genre_ids": [
                28,
                80
            ],
            "id": 21990,
            "original_language": "en",
            "original_title": "The Man from Hong Kong",
            "overview": "Australian authorities arrest a man believed to be connected to the Sydney criminal underworld and send for Inspector Fang Sing Leng (Jimmy Wang Yu) from Hong Kong to question him. After the alleged criminal is assassinated, Inspector Leng and the Sydney police try to hunt down those responsible and hope to solve their case along the way.",
            "popularity": 3.194,
            "poster_path": "https://image.tmdb.org/t/p/original/qbX44sKg2WLXElArS4YVSc2E0EA.jpg",
            "release_date": "1975-07-31",
            "title": "The Man from Hong Kong",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 30
        },
        {
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/originalnull",
            "genre_ids": [
                99
            ],
            "id": 374699,
            "original_language": "en",
            "original_title": "Jackie Chan's Hong Kong Tour",
            "overview": "",
            "popularity": 2.612,
            "poster_path": "https://image.tmdb.org/t/p/original/hlv18qCZqteB3JvZPhl02Dc9OBQ.jpg",
            "release_date": "2001-01-01",
            "title": "Jackie Chan's Hong Kong Tour",
            "video": true,
            "vote_average": 0,
            "vote_count": 0
        }
    ],
    "total_pages": 32,
    "total_results": 636
})
  return (
    <div className="App">
      <Router>
<Switch>   
  <QueryContext.Provider value={{query, setQuery, data, setData}}>
  <Route exact path="/">   
     <Home />
  </Route>
  <Route exact path="/search">   
     <Search/>
  </Route>
  </QueryContext.Provider>
  </Switch>
      </Router>
    </div>
  );
}

export default App;
