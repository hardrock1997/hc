import styles from './Search.module.css';
import { useState } from 'react';
function Search({setBooks,booksCopy}) {
    const [searchResult,setSearchResult] = useState(true);

    function handleSearch(e) {
        const typedValue = e.target.value;
        const foundBooks = []
        for(let i=0;i<booksCopy.length;++i) {
            if(booksCopy[i].bookName.toLowerCase().includes(typedValue) || booksCopy[i].isbn.toLowerCase().includes(typedValue)) {
                foundBooks.push(booksCopy[i]);
            }
        }
        if(foundBooks.length>0) {
            setBooks(foundBooks);
            setSearchResult(true)
        }
        else {
            setBooks(booksCopy);
            setSearchResult(false);
        }
    }

    return (
        <div className={styles.wrapper}>
            <input 
                type='search' 
                className={styles.input}
                placeholder='Enter a book name or its ISBN number to search'
                onChange={handleSearch}
            />
            
                {!searchResult ? "Cannot find your book!":'Found your books!'}
            
        </div>
    )
}

export default Search;