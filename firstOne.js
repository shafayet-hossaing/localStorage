const db = {} // Declaring an object


// This function is for adding to database
const addToDb = item => {
    const db = getDb() // Storing an object into db 

    if(item in db){ // Checking if the item in db (if yes)
        db[item] = db[item] + 1 // then 1 will be added with the previous [item] property's value
    }else{ // Checking if the item in db (if not)
        db[item] = 1 // Then as default 1 will be added as the value of [item] property
    }
    
    // console.log(db[item]); // Here consol logging to watch the value of [item]
    console.log(db); // Here consol logging to watch the whole object
}



// This function is for removing from database
const removeDb = item => {
    const db = getDb() // Storing an object into db
    delete db[item] // Here deleting the item from data base
}



const getDb = () => {
    return db // Returning an object
}