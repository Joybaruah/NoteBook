import React, {useContext} from "react";
import noteContext from "../context/noteContext";

const NotesItem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note, updateNote } = props;
  return (
    <div className="col-md-6 col-lg-3"> 
      <div className="card border-dark mb-3">
        <div className="d-flex justify-content-between card-header">{note.title}
        <div>
          <i className="fa-solid fa-trash-can mx-2" style={{color: "hsl(0, 87%, 45%)"}} onClick={()=>{deleteNote(note._id)}}></i>
          <i className="fa-solid fa-pen-to-square mx-2" style={{color: "hsl(219, 87%, 45%)"}} onClick={()=>{updateNote(note)}}></i>
        </div>
        </div>
        <div className="card-body text-dark">
          <p className="card-text">
            {note.description}
          </p>
          <p class="card-text"><small class="text-secondary">{new Date(note.date).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</small></p>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
