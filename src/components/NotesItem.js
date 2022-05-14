import React, {useContext} from "react";
import noteContext from "../context/noteContext";

const NotesItem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note, updateNote } = props;
  return (
    <div className="col-md-6 col-lg-3"> 
      <div className="card border-dark mb-3">
        <div className="card-header">{note.title}</div>
        <div className="card-body text-dark">
          <p className="card-text">
            {note.description}
          </p>
          <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
