import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

  const [articles,setArticle] = useState([]);
  
  useEffect(()=>{

    let url= `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url).then(response => response.json()).then(data=> setArticle(data.articles));
  },[category]) //runs every time the dependency changes ie the category selected changes






  return (
    <div>
      
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
     {articles.map((news,index)=>{

      return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
     })}

    </div>
  )
}

export default NewsBoard
