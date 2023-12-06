import styles from './DetailedDisplay.module.css';
import { useParams } from 'react-router-dom';

function DetailedDisplay() {

    const params = useParams();
   
        const {id} = params;
    
    return (
        <div>
            <h1>DetailedDisplay for id: {id}</h1>
        </div>
    )
}

export default DetailedDisplay;