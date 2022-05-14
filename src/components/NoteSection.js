import React , {useContext, useEffect, useRef, useState} from 'react'
import { useNavigate } from "react-router-dom";
import noteContext from "../context/noteContext";
import NotesItem from './NotesItem';
import AddNote from "./AddNote";

const NoteSection = () => {
    const context = useContext(noteContext);
    const {notes, getNotes, editNote} = context;
    let navigate = useNavigate();

    useEffect(() => {
      if(localStorage.getItem('token')){
        getNotes()
      }
      else{
        navigate("/login")
      }
      // eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", editTitle: "", editDescription: ""})
    
    const updateNote = (currentNote) =>{
      ref.current.click();
      setNote({id: currentNote._id, editTitle: currentNote.title, editDescription: currentNote.description})
    }

    const handleNote = (e) => {
        e.preventDefault();
        editNote(note.id, note.editTitle, note.editDescription);
        refClose.current.click()
    };

    const onChange = (e) => {
      setNote({...note, [e.target.name]: e.target.value})
    };


  return (
    <>
    <AddNote />

        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="card border-primary my-2">
                    <div className="card-body">
                      <h5 className="card-title">
                        <input
                          type="text"
                          className="form-control-plaintext px-2"
                          id="editTitle"
                          name="editTitle"
                          value={note.editTitle}
                          onChange={onChange}
                        />
                      </h5>
                      <p className="card-text">
                        <textarea
                          className="form-control-plaintext px-2"
                          id="editDescription"
                          name="editDescription"
                          rows="2"
                          value={note.editDescription}
                          onChange={onChange}
                        ></textarea>
                      </p>
                    </div>
                  </div>
              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="editNotebtn-close btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                <button disabled={note.editTitle.length < 3 || note.editDescription.length < 5} onClick={handleNote} type="button" className="editNotebtn btn btn-dark">Save note</button>
              </div>
            </div>
          </div>
        </div>

    <div className='container'>
      <h5 className="Notes-header p-1 px-2 rounded"> Notes </h5>
      <h6 className="Empty-Notes p-1 px-2 rounded">
        {notes.length===0 && "Add some Notes 🎏"}
      </h6>
      <div className="row">
          {notes.map((note)=>{
            return <NotesItem updateNote={updateNote} key={note._id} note={note}/>
          })}
    </div>
    </div>
    </>
  )
}

export default NoteSection;