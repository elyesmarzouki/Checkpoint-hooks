import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddMovie({ getNewMovie }) {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [newMovie, setNewMovie] = useState({});

const handleSubmit = () => {
    getNewMovie(newMovie);
    handleClose();
};
return (
    <>
    <Button id="add" variant="primary" onClick={handleShow}>
        Add Movie
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="inputArea">
        <Form.Text>Title:</Form.Text>
        <Form.Control
            type="text"
            placeholder="Enter the title"
            onChange={(e) =>
            setNewMovie({ ...newMovie, title: e.target.value })
            }
        />
        <Form.Text>Description:</Form.Text>
        <Form.Control
            type="text"
            placeholder="Enter the description"
            onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
            }
        />
        <Form.Text>PosterUrl:</Form.Text>
        <Form.Control
            type="text"
            placeholder="Enter the poster Url"
            onChange={(e) =>
            setNewMovie({ ...newMovie, posterUrl: e.target.value })
            }
        />
        <Form.Text>Rating:</Form.Text>
        <Form.Control
            type="text"
            placeholder="Enter the rate"
            onChange={(e) => setNewMovie({ ...newMovie, rate: e.target.value })}
        />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
            Add Movie
        </Button>
        </Modal.Footer>
    </Modal>
    </>
);
}

export default AddMovie;