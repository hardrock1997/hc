
export default function validate(book) {
    for(const key in book) {
        if(book[key]===null || book[key]==='') {
            return false;
        }
    }
    return true;
}