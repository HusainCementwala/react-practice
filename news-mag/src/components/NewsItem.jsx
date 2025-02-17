import image from '../assets/photo.jpg'


const NewsItem = ({title,description,src,url}) => {
  return (
   

    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src? src:image} style={{height:"200px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{truncateText(title, 50)}</h5>
    <p className="card-text">
    {description
            ? truncateText(description, 90)
            : "Please refer to complete article by clicking on the button below"}
      </p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>


  )
}


function truncateText(text, maxLength) {
  if (!text || text.length <= maxLength) return text;

  // Slice text up to maxLength
  let truncated = text.slice(0, maxLength);

  // If the next character is not a space and there's a space in our slice,
  // find the last space and cut off there to avoid cutting a word
  if (text[maxLength] !== ' ') {
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    if (lastSpaceIndex > 0) {
      truncated = truncated.slice(0, lastSpaceIndex);
    }
  }

  return truncated + '...';
}


export default NewsItem
