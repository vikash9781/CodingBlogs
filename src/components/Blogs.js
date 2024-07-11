import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from './Spinner.js'

function Blogs(){
    const {posts, loading} = useContext(AppContext)
    return(
        <div className="w-11/12 max-w-[450px] py-3 flex flex-col gap-y-7 mt-[40px] mb-[60px] justify-center items-center ">
       
      { 
      loading?
       (<Spinner/>)
       :( posts.length === 0 ?
        
        (<div><p>No Post Available</p></div>)
        
        :(posts.map((post) => (
            <div key={post.id }>
                <p className="font-bold text-xs mt-[5px]">{post.title}</p>
                <p className="text-[10px]">
                    By <span className="italic">{post.author}</span> on <span className="itallic font-bold">{post.category}</span>
                </p>
                <p className="text-[11px]">
                    Posted on {post.date}
                </p>
                <p className="mt-[10px] text-sm ">{post.content}</p>
                <div className="flex gap-x-3">
                    {post.tags.map((tag, index) => {
                        return <span key={index} className="text-[8px] text-blue-600 font-bold underline mt-[5px]">{`#${tag}`}</span>
                    })}
                </div>
            </div>
        )
        
        
    )
  )
)
       
       }
        </div>
    )
}

export default Blogs;