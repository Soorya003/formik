import React, { useState } from 'react';
import AuthorForm from './AuthorForm';

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: '',
    birthDate: '',
    biography: '',
  });

  const handleAddAuthor = (values) => {
    setAuthors([...authors, values]);
    setEditMode(false);
  };

  const handleEditAuthor = (index, values) => {
    const updatedAuthors = [...authors];
    updatedAuthors[index] = values;
    setAuthors(updatedAuthors);
    setEditMode(false);
  };

  const handleDeleteAuthor = (index) => {
    const updatedAuthors = authors.filter((_, i) => i !== index);
    setAuthors(updatedAuthors);
  };

  const handleEdit = (index) => {
    setInitialValues(authors[index]);
    setEditMode(true);
  };

  return (
    <div className="container">
      <h2>Author Management</h2>
      {!editMode ? (
        <div>
          <button className="btn btn-primary" onClick={() => { setInitialValues({ name: '', birthDate: '', biography: '' }); setEditMode(true); }}>Add Author</button>
          <hr />
        </div>
      ) : (
        <AuthorForm initialValues={initialValues} onSubmit={handleAddAuthor} />
      )}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Biography</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index}>
              <td>{author.name}</td>
              <td>{author.birthDate}</td>
              <td>{author.biography}</td>
              <td>
                <button className="btn btn-info btn-sm" onClick={() => handleEdit(index)}>Edit</button>
                <button className="btn btn-danger btn-sm ms-1" onClick={() => handleDeleteAuthor(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Authors;
