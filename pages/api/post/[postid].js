import { getPosts } from "../../../src/blog-posts"

const posts = getPosts();

export default (req, res) => { 
    Promise.resolve(posts).then(post => {
        var a;
        var b = 0;
        while (b < post.length){
            if (post[b].slug === req.query.postid){
                a = post[b]
            }
            b++;
        }
        if (a === undefined){
            res.json({ post: {
                title: "NOT FOUND",
                slug: "NOT FOUND",
                details: "NOT FOUND",
                date: "NOT FOUND"
            }})
        }
        else {
            res.json({ 
                post: a
            })
        }
    })
    
}