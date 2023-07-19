import React from 'react';
import contactAVA from '../Images/contactAVA.png'
const ContactCard = (props) => {
  const RemoveCard=()=>{
    props.remove(props.id);
  }

  return (

    <div className="card mb-3" style={{ maxWidth: "500px" }}>
      <div className="row g-0 mb-2">
        <div className="col-md-2 d-flex justify-content-center">
          <img src={contactAVA} className="img-fluid rounded-start my-3 smaller-image" alt="user" style={{ width: "300px" }} />
        </div>
        <div className="col-md-8">
          <div className="card-body my-3 mx-2">
            <p className="card-text fw-bold">Name: {props.name}</p>
            <p className="card-text fw-bold"><small className="text-body-secondary">Email:  {props.email} </small></p>
          </div>
        </div>
        <div className="col-md-2 d-flex justify-content-center" >
          <i className="fa-solid fa-trash-can m-5" style={{ color: "#e20808", fontSize: "35px", cursor:"pointer"}} onClick={RemoveCard}></i>
      </div>
    </div>
</div>
  
  )
}

export default ContactCard
