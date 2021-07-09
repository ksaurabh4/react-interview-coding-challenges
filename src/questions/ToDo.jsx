import './App.css';
import React from 'react';

class ToDo extends React.Component{
    state={books:[],currentBook:''}

    addBook=()=>{let newBook={id:Date.now(),name:this.state.currentBook}
let bookList = this.state.books;
bookList.push(newBook)
this.setState({books:bookList,currentBook:''})

}
    deleteBook=(book)=>{let bookList = this.state.books;
    // let newBookList = bookList.filter(e=>book!==e)
    bookList.splice(bookList.indexOf(book),1)
    this.setState({books:bookList})
    }

    render(){return <><input type='text' value={this.state.currentBook} onChange={e=>this.setState({currentBook:e.target.value})}/>
    <button onClick={this.addBook}>Add</button>
    {this.state.books.map(book=><div key={book.id}><p>{book.name}</p> <p>{book.id}</p>
    <button onClick={()=>this.deleteBook(book)}>Delete</button></div>)}</>}
}

export default ToDo;
