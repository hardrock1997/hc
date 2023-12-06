import styles from './ActionButtons.module.css';

function ActionButtons({books,setBooks,id,setBooksCopy}) {
   
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
    return (
    <div className={styles.actionButtonsWrapper}>
        <button onClick={()=>handleDelete(id)}>Delete</button>
        <button>Edit</button>
    </div>
    )
}

export default ActionButtons;