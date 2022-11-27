import React, {useState, useEffect} from "react";
import axios from "axios";

function DataFetching() {
    const [posts, setPosts] = useState([])

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
        <div className="Home">
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h2 class="mid">Here's the data we got back from server</h2>
                <div class="container">
                    <ul>
                        {
                            posts.map(post => <li key={post.id}>
                                <div class="square">
                                    <h1>Article{post.id}</h1>
                                    <h4 class="content">By {post.name}</h4>
                                    <br/>
                                    <div class="content">title: {post.title}</div>
                                    <div class="content">content: {post.body}</div>
                                    <br/>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
                <br />
                {/* <Link to="/Article">next</Link> */}
              </div>
            </div>
          </div>
        </div>
      );
}

export default DataFetching


// <div>
{/* <ul>
    {
        posts.map(post => <li key={post.id}>{post.id}{post.title}</li>)
    }
</ul> */}
// </div>