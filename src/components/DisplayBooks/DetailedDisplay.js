import { useParams } from 'react-router-dom';
import styles from './DetailedDisplay.module.css';
import {useNavigate,Routes, Route} from 'react-router-dom';
import ViewBooks from '../ViewBooks/ViewBooks';

function DetailedDisplay({books,setToggleDetailedView,qrcode}) {
    const navigate = useNavigate();
    const {id} = useParams();

    function bookToRender(id) {
        if(books.length>0) {
            const book=books.filter((b)=>{
                return b.id===(+id)
            });
            return book[0];
        } else {
            return {}
        }  
    }
  
    const book=bookToRender(id);

    function handleNavigateToView() {
        navigate('/showadmin')
        setToggleDetailedView(false)
    }
   
    
    return (
        <>
          {  
          Object.keys(book).length>0 ? (
            <div>
                <h1>DetailedDisplay</h1>
                <h3>Book Name: {book?.bookName}</h3>
                <h3>Book ISBN Number: {book?.isbn}</h3>
                <h3>Book Category: {book?.bookCategory}</h3>
                <h3>Book Row Number: {book?.rowNum}</h3>
                <h3>Book Count: {book?.bookCount}</h3>
                {qrcode}
                <div className={styles.wrapper}>
                    <button  onClick={handleNavigateToView}>Back to View</button>
                </div>
                <Routes>
                    <Route path='/showadmin' element={<ViewBooks/>}/>
                </Routes>          
                </div>
          ) 
          : null
        }
        </>
    )
}

export default DetailedDisplay;