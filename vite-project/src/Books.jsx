import React, { useState } from 'react';
import BookForm from './BookForm';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [initialValues, setInitialValues] = useState({
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  });

  const handleAddBook = (values) => {
    setBooks([...books, values]);
    setEditMode(false);
  };

  const handleEditBook = (index, values) => {
    const updatedBooks = [...books];
    updatedBooks[index] = values;
    setBooks(updatedBooks);
    setEditMode(false);
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  const handleEdit = (index) => {
    setInitialValues(books[index]);
    setEditMode(true);
  };

  return (
    <div className="container">
      <h2>Book Management</h2>
      {!editMode ? (
        <div>
          <button className="btn btn-primary" onClick={() => { setInitialValues({ title: '', author: '', isbn: '', publicationDate: '' }); setEditMode(true); }}>Add Book</button>
          <hr />
        </div>
      ) : (
        <BookForm initialValues={initialValues} onSubmit={handleAddBook} />
      )}
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Publication Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>{book.publicationDate}</td>
              <td>
                <button className="btn btn-info btn-sm" onClick={() => handleEdit(index)}>Edit</button>
                <button className="btn btn-danger btn-sm ms-1" onClick={() => handleDeleteBook(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Books;
