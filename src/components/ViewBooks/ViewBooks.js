import styles from './ViewBooks.module.css';
import {useNavigate,Routes, Route} from 'react-router-dom';
import Search from '../Search/Search';
import DetailedDisplay from '../DisplayBooks/DetailedDisplay';
import ActionButtons from '../ActionButtons/ActionButtons';
import { useState } from 'react';
import Edit from '../Edit/Edit';
import {QRCodeSVG} from 'qrcode.react';

function ViewBooks({toggleView,setToggleView,books,setBooks,booksCopy,setBooksCopy,book,setBook}) {
const navigate = useNavigate();
const [edit,setEdit] = useState(false)
const [toggleDetailedView, setToggleDetailedView] = useState(false);

function handleBack() {
    navigate('/');
    setToggleView(!toggleView);
}

function handleAddBooks() {
    navigate('/admin')
}

function handleNavigateToDetailedPage(id) {
    navigate(`showbook/${id}/*`)
    setToggleDetailedView(true)
}

return (
    <>
    {
        !toggleDetailedView ? (
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
                        <th>Qr Code</th>
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
                            >
                                {
                                book.isEdit===false ? 
                                    (
                                        
                                        <>
                                            <td 
                                            onClick={()=>handleNavigateToDetailedPage(book.id)}
                                            className={styles.bookName}
                                            >
                                            {book.bookName}
                                            </td>
                                            <td>
                                                <QRCodeSVG
                                                    size={40}
                                                    value={`${window.location.origin}/showbook/${book.id}/*`}
                                                />
                                            </td>
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
        </div>
        ) : ( <Routes>
                <Route 
                    path='showbook/:id/*' 
                    element={
                    <DetailedDisplay 
                        books={books} 
                        setToggleDetailedView={setToggleDetailedView}
                        qrcode={<QRCodeSVG
                            size={100}
                            value={`${window.location.origin}/showbook/${book.id}/*`}
                        />}
                        />
                        }/>
                </Routes>)
    }
    </>
    )
}

export default ViewBooks;
