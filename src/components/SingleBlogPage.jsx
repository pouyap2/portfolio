import {Link, useParams,useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {blogDeleted, selectBlogById} from "../reducers/blogSlice";

const SingleBlogPage = () => {
    const {blogId} = useParams();
    const blog = useSelector((state) => selectBlogById(state,blogId));

    const navigate=useNavigate();

    const dispatch=useDispatch();

    if (!blog){
        return (
            <section>
                <h2>پستی که به دنبال هستید وجود ندارد دوست عزیز</h2>
                <Link to={"/"} className={"button muted-button"}>بازگشت به صفحه اصلی</Link>
            </section>
        )
    };


    const handleDelete =()=>{
        if (blog){
            dispatch(blogDeleted({id:blog.id}));
            navigate("/");
        }
    }


    return (
        <section>
            <article className={"blog"}>
                <h2>{blog.title}</h2>
                <p className={"blog-content"}>
                    {blog.content}
                </p>
                <button className={"button"} style={{background:"red"}} onClick={handleDelete}>حذف پست</button>
            </article>
        </section>
    )
}

export default SingleBlogPage;