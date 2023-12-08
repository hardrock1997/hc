import styles from './MainContainer.module.css';
import {useNavigate,Routes, Route} from 'react-router-dom';
import AddBook from '../AddBook/AddBook';
import ViewBooks from '../ViewBooks/ViewBooks';
import { useState} from 'react';

function MainContainer() {
    const navigate = useNavigate();
    const [toggleView,setToggleView] = useState(true);
    const [id,setId] = useState(1);
    const [book,setBook] = useState ({
        bookName:'',
        isbn:null,
        bookCategory:'',
        rowNum:null,
        bookCount:null,
        isEdit:false
    })
    const [books,setBooks] = useState('');
    const [booksCopy,setBooksCopy] = useState('');

    function navigateToAddBook() {
        navigate('/admin/*');
        setToggleView(!toggleView);
    }

    function navigateToViewBooks() {
        navigate('/showadmin/*');
        setToggleView(!toggleView);
    }

    return (
    <div className={styles.textWrapper}>
        {toggleView ? <h1>Welcome to the Bookshelf</h1>: <></>}
        {
            toggleView ? (
        <div className={styles.buttonsWrapper}>
            <button onClick={navigateToAddBook}>Add a Book</button>
            <button onClick={navigateToViewBooks}>View Books</button>
        </div>
            ) : <></>
        }
        <Routes>
                <Route 
                    path='/admin/*' 
                    element={<AddBook 
                    toggleView={toggleView} 
                    setToggleView={setToggleView} 
                    book={book} 
                    setBook={setBook}
                    setBooks={setBooks}
                    id={id}
                    setId={setId}
                    setBooksCopy={setBooksCopy}
                />}
                />
                <Route 
                    path='/showadmin/*' 
                    element={<ViewBooks 
                    toggleView={toggleView} 
                    setToggleView={setToggleView}
                    books={books}
                    setBooks={setBooks}
                    booksCopy={booksCopy}
                    setBooksCopy={setBooksCopy}
                    book={book}
                    setBook={setBook}
                />}
                />
        </Routes>
        
    </div>
    )
}

export default MainContainer;