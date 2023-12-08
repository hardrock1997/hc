import { useState } from "react";
import validate from "../../utils/validation";

function Edit({id,books,setBooks,setBooksCopy,b,setEdit}) {
 
    const [book,setBook] = useState({
        bookName:b.bookName,
        isbn:b.isbn,
        bookCategory:b.bookCategory,
        rowNum:b.rowNum,
        bookCount:b.bookCount,
        isEdit:false,
        id:b.id
    })
  
    function handleChange(e) {
        setBook(
            {...book,[e.target.name]:e.target.value}
        )
    }

    function handleAddEditedValues(id) {
        if(validate(book)) {
            const indexOfBookValuesToEdit = books.findIndex(book=>book.id===id)
            const booksAfterEditIsDone = books.map((b,index)=>{
                if(indexOfBookValuesToEdit===index) {
                    book.isEdit=false;
                    return book;
                }
                return b;
            })
            setBooks(booksAfterEditIsDone);
            setBooksCopy(booksAfterEditIsDone);
            setEdit(false);
        }
    }

    return(
        <>
            <td>
                <input onChange={handleChange} name='bookName' type='text' value={book.bookName}/>
            </td>
            <td>
                <input onChange={handleChange} type='number' name='isbn' value={book.isbn}/>
            </td>
            <td>
                <input onChange={handleChange} type='text' name='bookCategory' value={book.bookCategory}/>
            </td>
            <td>
                <input onChange={handleChange} type='number' name='rowNum' value={book.rowNum}/>
            </td>
            <td>
                <input onChange={handleChange} type='number' name='bookCount' value={book.bookCount}/>
            </td>
            <td>
               <button onClick={()=>handleAddEditedValues(id)}>Okay</button>
            </td>

        </>
    )
}

export default Edit;