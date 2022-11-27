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
            <p>Here's the data we got back from server.</p>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h1 className="card-title">Article1</h1>
                <ul>
                    {
                        posts.map(post => <li key={post.id}>
                            {post.id}
                            <br/>
                                name: {post.name}
                            <br/>
                                title: {post.title}
                            <br/>
                                content: {post.body}

                            <br/>
                            <br/>
                        </li>)
                    }
                </ul>
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