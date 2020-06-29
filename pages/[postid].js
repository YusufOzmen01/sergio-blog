import React from "react";
import Head from "next/head";
import Link from "next/link"
import fetch from "isomorphic-fetch"
import ReactMarkdown from "react-markdown"

const BlogPost = ({ post }) =>  {
  return (
    <div className="container">
      <Head>
        <title>Sergio Blog</title>
      </Head>

      <div className="hero">
        <h2 className="hero-title">Yusuf "Sergio" Özmen</h2>
        <div className="hero-social-links">
          <Link className="hero-social-link" href="/twitter"><a>Twitter</a></Link><a> - </a>
          <Link className="hero-social-link"   href="/instagram"><a>Instagram</a></Link>
        </div>
      </div>
      <div className="post">
        <h2 className="blog-title-link"><a>{post.title}</a></h2>
        <div className="blog-post">
        <ReactMarkdown source={post.details}/>
        </div>
        <div className="blog-post-date"><h5>{post.date}</h5></div>
      </div>

    <style jsx>{`
    
    .container {
      max-width: 640px;
      width: 100%;
      margin: 0 auto;
    }
    
    .hero {
      text-align: center;
      margin: 64px 0;
    }
  
    .hero-title {
      font-size: 30px;
    }
  
    a {
      color: #0012af;
      text-decoration: none;
    }
  
    .blog-title-link {
      margin: 16px 16px;
    }
  
    .blog-post-date {
      color: #606060;
      text-align: right;
    }

    `}</style>

    </div>
  )
  
}

BlogPost.getInitialProps = async ({req, query}) => {
  const res = await fetch(`http://localhost:3000/api/post/${query.postid}`)
  const json = await res.json()
  return { post: json.post }
}

export default BlogPost



