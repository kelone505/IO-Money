import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { createRegister } from '../firebase/CRUD';
import { Modal, Form, InputGroup } from 'react-bootstrap';
import { CashCoin, CalendarWeek, Tags, CardText } from 'react-bootstrap-icons';
import { dateKeyValue } from '../common/utilities';

const IOModal = forwardRef((props, ref) => {
  const { ptype } = props;
  let date = new Date();
  const [input, setInput] = useState({
    concept: '',
    date: date.toISOString().slice(0, 10),
    amount: 0,
    description: '',
    type: ptype,
    test: '',
  });

  useImperativeHandle(ref, () => ({
    updateState() {
      setInput({ ...input, type: ptype });
    },
  }));
  const OUT = ['Food', 'Rent', 'Transports', 'Market', 'Others'];
  const IN = ['Salary', 'Gift', 'Bank interest'];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
      createRegister(input);
    
    console.log(input);
    setInput({
      concept: '',
      date: date.toISOString().slice(0, 10),
      amount: '',
      description: '',
      type: '',
    });
  };

  const onChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {ptype + ' Formulary'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => onSubmitHandler(e)}>
          <Form.Group>
            <InputGroup className="mt-2">
              <InputGroup.Text id="inputGroupPrepend">
                <Tags />
              </InputGroup.Text>

              <Form.Select
                value={input.concept}
                placeholder="concept"
                name="concept"
                onChange={(e) => {
                  onChangeHandler(e);
                  document.getElementById('amount').focus();
                }}
              >
                <option value=""></option>
                {ptype === 'IN'
                  ? React.Children.toArray(
                      IN.map((i) => <option value={i}>{i}</option>)
                    )
                  : React.Children.toArray(
                      OUT.map((i) => <option value={i}>{i}</option>)
                    )}
              </Form.Select>
            </InputGroup>
            <InputGroup className="mt-2">
              <InputGroup.Text id="inputGroupPrepend">
                <CalendarWeek />
              </InputGroup.Text>

              <Form.Control
                type="date"
                value={input.date}
                name="date"
                onChange={(e) => onChangeHandler(e)}
              />
            </InputGroup>
            <InputGroup className="mt-2">
              <InputGroup.Text id="inputGroupPrepend">
                <CashCoin />
              </InputGroup.Text>
              <Form.Control
                id="amount"
                type="number"
                name="amount"
                placeholder="$ 0.00"
                value={input.amount}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
              />
            </InputGroup>
            <InputGroup className="mt-2">
              <InputGroup.Text id="inputGroupPrepend">
                <CardText />
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                value={input.description}
                name="description"
                placeholder="Description"
                onChange={(e) => {
                  onChangeHandler(e);
                }}
              />
            </InputGroup>
            <Form.Group className="mt-2">
              <Form.Control
                className="btn btn-primary"
                type="submit"
                value="Save"
              />
            </Form.Group>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
});

export default IOModal;
