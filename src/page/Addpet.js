import React, { Component } from "react";
import { Button, Modal , Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ImportPhoto from "../image/import.png";
import { Link } from "react-router-dom";
import "../App.css";

class Addpet extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  handlemodal() {
    this.setState({ show: !this.state.show });
   
  }
  
  

  render() {
    return (
<div>
<Button variant="success" block onClick={() => {
                this.handlemodal();
              }}>
                      Add Pet
</Button>

<Modal show={this.state.show} className="warp-modal-pet " >
              <Modal.Header ><h2  className="header-modal">Premium</h2></Modal.Header>

              <Modal.Body >
                <Form>
                  <Form.Group className="premium" >
                    <h5>Upgrade breeder mu dan nikmati <br/> fitur - fitur PRO </h5>
                

                  
                    <h5>Breeder : 0899988871 </h5> 
                  
                    </Form.Group>

                  <Form.Group >
                  <Form.Control type="email" placeholder="No.Rek Kamu" column sm="2"/>
                 
                    <img src={ImportPhoto} style={{"opacity":"0.5"}}></img>
                  </Form.Group>

                
                  
               
                
                </Form>
              </Modal.Body>
             
              <Modal.Footer>
              
              <Button variant="success"  block  >
                  Submit
                </Button>
                

                <Button variant="outline-success"  block 
                  onClick={() => {
                    this.handlemodal();
                  }}
                >
                  CLOSE
                </Button>
              </Modal.Footer>
            </Modal>
</div>

);
}
}

export default Addpet;