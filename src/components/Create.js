import {useState} from "react";
import {useHistory} from "react-router-dom";
import '../css/Create.css';
const Create = () => {
    const history= useHistory();
    const [isPending, setIsPending]= useState (false);
    const handleSubmit = (e) => {
        setIsPending(true);
        e.preventDefault();
        const blog = {title, body, author};
        //now we need to send a post request to the json server
        fetch('',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New Blog Added');
            setIsPending(false);
            history.push('/');
        })
    }
    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const [author, setAuthor]=useState('Amit');
    return (
        <div className='form-container'>
            <div className="create">
                <h2>Create a New Group!</h2>
                <form onSubmit={handleSubmit}>
                    <label>Group Name</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) =>{
                            setTitle(e.target.value)
                        }}
                    />
                    <label>Description:</label>
                    <textarea
                        value={body}
                        onChange={(e) =>{
                            setBody(e.target.value)
                        }}
                    >
                        required
                    </textarea>
                    {/*<label>Blog Author</label>*/}
                    {/*<select*/}
                    {/*    value={author}*/}
                    {/*    onChange={(e) =>{*/}
                    {/*        setAuthor(e.target.value)*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <option value="Amit">Amit</option>*/}
                    {/*    <option value="Keshav">Keshav</option>*/}
                    {/*</select>*/}
                    {!isPending && <button>Add Group</button>}
                    {/*<p>{title}</p><p>{body}</p><p>{author}</p>*/}
                </form>
            </div>
        </div>
    )
}
export default Create;