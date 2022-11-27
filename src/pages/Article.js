import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const Article = () => {
  const [posts, setPosts] = useState([])
  const { articleId } = useParams();

  useEffect(() => {
      axios
          .get('http://localhost:3500')
          .then(res => {
              console.log(res)
          setPosts(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  })

  return (
    <div class="container">
      <ul>
          {
            <div class="square">
                <h1>Article{articleId}</h1>
                <h4 class="content">By {posts[articleId-1]?.name}</h4>
                <br/>
                <div class="content">{posts[articleId-1]?.body}</div>
                <br/>
                <Link to={`/`}>BACK</Link>
                <br/>
                <br/>
            </div>
          }
      </ul>
    </div>
  );
};

export default Article;
