import styles from './ActionButtons.module.css';

function ActionButtons({books,setBooks,id,setBooksCopy,edit,setEdit}) {

    function handleDelete(id) {
        const afterDeletionBooks = books.filter((book)=>{
            return book.id!==id
        })
        if(afterDeletionBooks.length>0) {
            setBooks(afterDeletionBooks)
            setBooksCopy(afterDeletionBooks)
        } else {
            setBooks([]);
            setBooksCopy([]);
        }
      
    }

    function handleEdit(id) {
        const indexOfBookValuesToEdit = books.findIndex(book=>book.id===id)
        const booksAfterEditStarted = books.map((b,index)=>{
            if(index === indexOfBookValuesToEdit) {
                b.isEdit=true;
                return b;
            }
            return b;
        })
        setBooks(booksAfterEditStarted);
        setEdit(true)
    }

    function handleCancel(id) {
        const indexOfBookValuesToEdit = books.findIndex(book=>book.id===id)
        const booksAfterEditStarted = books.map((b,index)=>{
            if(index === indexOfBookValuesToEdit) {
                b.isEdit=false;
                return b;
            }
            return b;
        })
        setBooks(booksAfterEditStarted);
        setEdit(false);
    }

    return (
    <div className={styles.actionButtonsWrapper}>
        {
            !edit ? (
        <>
        <button onClick={()=>handleDelete(id)}>Delete</button>
        <button onClick={()=>handleEdit(id)}>Edit</button>
        </>
            )
            : (
                <>
                <button onClick={()=>handleCancel(id)}>Cancel</button>
                </>
                
            )
        }       
    </div>
    )
}

export default ActionButtons;