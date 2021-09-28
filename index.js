
// This function is for adding to database
const addToDb = item => {
    const db = getDb() // Storing an object into db 

    if(item in db){ // Checking if the item in db (if yes)
        db[item] = db[item] + 1 // then 1 will be added with the previous [item] property's value
    }else{ // Checking if the item in db (if not)
        db[item] = 1 // Then as default 1 will be added as the value of [item] property
    }
    
    // console.log(db[item]); // Here consol logging to watch the value of [item]
    // console.log(db); // Here consol logging to watch the whole object

    // This function is for saving the object into localStorage and it's taking an object as its parameter named (db)
    saveToDb(db)
}



// This function is for removing from database
const removeDb = item => {
    const db = getDb() // Storing an object into db
    delete db[item] // Here deleting the item from data base

    // Here we're updating localStorage after removing data form localStorage
    saveToDb(db)
}


// Browser Database
// Setting in localStorage
const saveToDb = db => {
    const JSONdb = JSON.stringify(db) // Here the object is being stringified to get set into localStorage
    localStorage.setItem("Shopping-Cart", JSONdb) // Finally by this line we're setting the data into localStorage calling builtin func.
}

// Removing from localStorage




// This function is getting the data from the localStorage
const getDb = () => {
    const newObj = {}
    let savedDb = localStorage.getItem("Shopping-Cart") // Reading data from the localStorage

    if(!savedDb){
        return newObj
    }else{
        savedDb = JSON.parse(savedDb) // Converting the data into javascript object
        return savedDb // Returning an object
    }

    // Same condition using ternary operator
    // const hell = savedDb === null ? newObj : savedDb = JSON.parse(savedDb)
    // return hell
}
export { addToDb, removeDb, getDb }

