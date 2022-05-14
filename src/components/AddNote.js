import React, { useContext, useState } from "react";
import noteContext from "../context/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({id: "", title: "", description: ""})

  const handleNote = (e) => {
      e.preventDefault();
      addNote(note.title, note.description);
      setNote({id: "", title: "", description: ""})
  };

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  };
  return (
    <div className="container addnote">
      <div className="card border-dark my-2" key={note.id} >
        <div className="card-body">
          <h5 className="card-title" >
            <input
              type="text"
              className="form-control-plaintext px-2"
              id="title"
              name="title"
              placeholder="Title"
              value={note.title}
              onChange={onChange}
            />
          </h5>
          <p className="card-text">
            <textarea
              className="form-control-plaintext px-2"
              id="description"
              name="description"
              rows="2"
              placeholder="Note"
              value={note.description}
              onChange={onChange}
            ></textarea>
          </p>
          <button
            disabled={note.title.length < 3 || note.description.length < 5}
            href="/"
            className="note-btn btn btn-dark"
            onClick={handleNote}
          >
            Add a note +
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
