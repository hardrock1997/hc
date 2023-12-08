import styles from './AddBook.module.css';
import {useNavigate,Routes, Route,} from 'react-router-dom';
import MainContainer from '../MainContainer/MainContainer';
import { useState } from 'react';
import validate from '../../utils/validation';

function AddBook({toggleView,setToggleView,book,setBook,setBooks,id,setId,setBooksCopy}) {
    const navigate = useNavigate();
    const [error,setError] = useState('')

    function handleBack() {
        navigate('/');
        setToggleView(!toggleView);
    }

    function handleChange(e) {
        setBook(
            {...book,[e.target.name]:e.target.value,id:id}
        )
    }

    function handleAdd() {
       const newAddition = {...book,id:id};
       if(validate(newAddition)) {
            setBooks((prevBooks)=>{
                return [...prevBooks,newAddition]
                })
                setId(prevId=>prevId+1);
                navigate('/');
                setToggleView(!toggleView);
                setBooksCopy((prev)=>{
                    return [...prev,newAddition]
                })
       }
       else {
        setError('Fill all the fields correctly!')
       }
    
    }

    function handleBackToAddingBooks() {
        setError('');
    }

    return (
        <div className={styles.wrapper}>
            <h2>Enter the details to enter book(s) into the Bookshelf</h2>
        <div className={styles.inputWrapper}>
            <input placeholder='Enter the book name' type='text' name='bookName'  onChange={handleChange} />
            <input placeholder='Enter the book,s ISBN number' type='number' name='isbn'  onChange={handleChange} />
            <input placeholder='Enter the book Category' type='text' name='bookCategory'  onChange={handleChange} />
            <input placeholder='Enter the Row number' type='number' name='rowNum'  onChange={handleChange} />
            <input placeholder='Enter the book count' type='number' name='bookCount'  onChange={handleChange} />
        </div>
        {
            error==='' ? (
            <div className={styles.buttonsWrapper}>
            <button onClick={handleBack}>Back To Starting Page</button>
            <button onClick={handleAdd}>Add Book(s)</button>
        </div>) : (<div>
             <h3>{error}</h3>
             <button onClick={handleBackToAddingBooks}>Back to adding book(s)</button>
        </div>)
        }
        <Routes>
                <Route path='/admin' element={<MainContainer/>}/>
        </Routes>

        </div>
    )
}

export default AddBook;