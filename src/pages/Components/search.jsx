import React, { useEffect, useState } from "react";
import axios from "axios";



function Search() {
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/blog')
        .then(res => {
            console.log(res)
            setArticles(res.data)
        })
    }, [])
    return(
        <div className="Search-Section">
        <div className="Search">
           <input type="text" placeholder="Search ..." onChange={event => {setSearch(event.target.value)}} />
        </div>
        <div>
            <ul>
                {articles.filter((article)=> {
                    if (search == "") {
                        return article
                    } else if (article.title.toLowerCase().includes(search.toLowerCase())){
                        return article
                    }
                }
                ).map(article => (
                    <li key={article.id}><a href={article.title}>{article.title}</a></li>
                ))}
            </ul>
        </div>
        </div>
    )
}



export default Search

