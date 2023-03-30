import {useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {blogUpdated, selectBlogById} from "../reducers/blogSlice";

const EditBlogForm = () => {
    const {blogId}=useParams();

    const blog=useSelector((state) => selectBlogById(state,blogId));

    const [title,setTitle]=useState(blog.title);
    const [content,setContent]=useState(blog.content);

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const handleSubmitForm = () => {
        if (title && content){
            dispatch( blogUpdated({id:blog.id, title, content}));
            navigate(`/blogs/${blogId}`);
        }
    }

    if (!blog){
        return (
            <section>
                <h2>پستی که به دنبال هستید وجود ندارد دوست عزیز</h2>
                <Link to={"/"} className={"button muted-button"}>بازگشت به صفحه اصلی</Link>
            </section>
        )
    }

    return (
        <section>
            <h2>ویرایش پست </h2>
            <form autoComplete={"off"}>
                <label htmlFor={"blogTitle"}>عنوان پست :</label>
                <input type={"text"} id={"blogTitle"} name={"blogTitle"} value={title} onChange={onTitleChange}/>
                <label htmlFor={"blogTitle"}>محتوای اصلی :</label>
                <textarea id={"blogContent"} name={"blogContent"} value={content} onChange={onContentChange}/>
                <button type={"button"} className={"button"} onClick={handleSubmitForm}>ویرایش پست</button>
            </form>
        </section>
    )
}

export default EditBlogForm;