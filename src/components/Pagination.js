import { useContext } from "react";
import { AppContext } from "../context/AppContext";


function Pagination(){
    const { page, handlePageChange , totalPages} = useContext(AppContext);
    return(
        <div className="w-full flex justify-center items-center border-2 fixed bg-white bottom-0">
           
           <div className="flex justify-between w-11/12 max-w-[450px] py-2 ">

           <div className="flex gap-x-2">
           { page > 1 &&
            (
            <button onClick={() => handlePageChange(page-1)}
             className=" rounded-md border px-4 py-1">
               Previous
           </button>
           ) }

            { 
            page < totalPages &&
            (
            <button onClick={() => handlePageChange(page+1)}
            className=" rounded-md border px-4 py-1">
                    Next
                </button>
            )
            }
           </div>
            
             
             <p className="text-xs font-bold mt-2">
                Page {page} of {totalPages};
             </p>
           </div>
        </div>
    )
}

export default Pagination;