import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {selectAllBlogs} from "../reducers/blogSlice"
import ShowTime from "./ShowTime";

const BlogsList = () => {
    const blogs = useSelector(selectAllBlogs);
    const navigate = useNavigate();

    const renderedBlogs = blogs.map(blog => (
        <article key={blog.id} className={"blog-excerpt"}>
            <h3 style={{marginBottom:10}}>{blog.title}</h3>
            <div>
                <ShowTime timestamp={blog.date} />
            </div>
            <p className={"blog-content"}>{blog.content.substring(0, 100)}</p>
            <Link to={`/blogs/${blog.id}`} className={"button muted-button"} style={{marginLeft: 10}}> ادامه
                مطلب </Link>
            <Link to={`/editBlog/${blog.id}`} className={"button muted-button"}>ویرایش مطلب</Link>
        </article>
    ));

    return (
        <section className={"blogs-list"}>
            <button className={"full-button accent-button"} style={{marginTop: "16px"}}
                    onClick={() => navigate("/blogs/create-blog")}> افزودن پست جدید
            </button>
            <h2>تمامی پست ها</h2>
            {renderedBlogs}
        </section>
    )
}

export default BlogsList;