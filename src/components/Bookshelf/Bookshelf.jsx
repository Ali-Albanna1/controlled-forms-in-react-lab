import { useState } from "react";


function Bookshelf () {

    const [books, setBooks] = useState([])

    const [newbooks, setNewBooks] = useState({
        title: '', 
        author: ''
    })

    function handleInputChange (event) {

        newbooks[event.target.name]
        setNewBooks({...newbooks, [event.target.name]: event.target.value})


    }

    function handleSubmit (event) {

        event.preventDefault()

        
        const addBook = {
            title: newbooks.title,
            author: newbooks.author

        }
        setBooks([...books, addBook])

        setNewBooks({

            title: '',
            author: ''

        })
    }


    return(
        <>
  <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
    <form onSubmit={handleSubmit}>

      <label htmlFor="title">Title:</label>
      <input onChange={handleInputChange} type="text" name="title" id="title" />

      <label htmlFor="author">Author:</label>
      <input onChange={handleInputChange} type="text" name="author" id="author" />

      <button>Create</button>

    </form>
  </div>
  <div className="bookCardsDiv">
    {/* Book cards will display here */}
    <h1>ALL BOOKS</h1>
    {books.map((oneBook)=> <div>
       <p>Title: {oneBook.title}</p>
       <p>Author: {oneBook.author}</p>
    </div>)}
    

    </div>
     </div>
        </>
    )
  

}

export default Bookshelf