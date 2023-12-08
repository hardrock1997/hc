import styles from './ViewBooks.module.css';
import {useNavigate,Routes, Route,} from 'react-router-dom';
import MainContainer from '../MainContainer/MainContainer';
import Search from '../Search/Search';
import DetailedDisplay from '../DisplayBooks/DetailedDisplay';
import AddBook from '../AddBook/AddBook';
import ActionButtons from '../ActionButtons/ActionButtons';
import { useState } from 'react';
import Edit from '../Edit/Edit';

function ViewBooks({toggleView,setToggleView,books,setBooks,booksCopy,setBooksCopy,book,setBook}) {
const navigate = useNavigate();
const [edit,setEdit] = useState(false)

function handleBack() {
    navigate('/');
    setToggleView(!toggleView);
}
// function handleNavigationToDetailedDisplay(id) {
//     navigate(`/showbook/${id}`);
// }
function handleAddBooks() {
    navigate('/admin')
}

return (
    <div className={styles.wrapper}>
      
        {
            books.length>0 ? (
        <>
        <div className={styles.search}>
            <Search setBooks={setBooks} booksCopy={booksCopy}/>
        </div>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Book ISBN number</th>
                    <th>Category</th>
                    <th>Row number</th>
                    <th>Count</th>
                    <th>Action buttons</th>
                </tr>
            </thead>
            <tbody>
            {
                books.map((book)=>{
                    return (
                        <tr 
                            key={book.id}
                        //  onClick={()=>handleNavigationToDetailedDisplay(book.id)
                            // }
                        >
                            {
                              book.isEdit===false ? 
                                (
                                       
                                    <>
                                        <td>{book.bookName}</td>
                                        <td>{book.isbn}</td>
                                        <td>{book.bookCategory}</td>
                                        <td>{book.rowNum}</td>
                                        <td>{book.bookCount}</td>
                                        </>
                                    
                                    ) 
                                    : <Edit
                                        id={book.id}
                                        books={books}
                                        setBooks={setBooks}
                                        setBooksCopy={setBooksCopy}
                                        b={book}
                                        setEdit={setEdit}
                                        />
                                }
                                   <td key={book.id}>
                                    <ActionButtons 
                                        books={books} 
                                        setBooks={setBooks} 
                                        id={book.id} 
                                        setBooksCopy={setBooksCopy}
                            
                                        edit={edit}
                                        setEdit={setEdit}
                                    />
                                    </td>
                            </tr>
                        )
                    })
                }
            </tbody> 
        </table>
        <div>
            <button onClick={handleBack}>Back To Starting Page</button>
        </div>
        </>
            ) : (
                <div>
                    <h2>Enter atleast a book to view!</h2>
                    <button onClick={handleAddBooks}>Add Book(s)</button>
                </div>
            )
        }
      
        <Routes>
            <Route path='/admin' element={<MainContainer/>}/>
            <Route path='/showbook/:id' element={<DetailedDisplay />}/>
            <Route path='/admin' element={<AddBook/>}/>
        </Routes>
        </div>
    )
}

export default ViewBooks;
