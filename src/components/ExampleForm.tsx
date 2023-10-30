import React from 'react';
import { Button, Form } from 'react-bootstrap';

function ExampleForm() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const fileInput = React.useRef(null);

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(fileInput.current);
      console.log(username, password);
      if (!fileInput) return;
    };
  
    return (
      <Form onSubmit={handleSubmit} className="my-2" style={{ width: '18rem'}}>
        <Form.Label>Username</Form.Label>
        <Form.Control
            type="text"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
        <Form.Label>File Input</Form.Label>
        <Form.Control
          type="file"
          ref={fileInput}
        >
        </Form.Control>
        <Button 
          variant='secondary' 
          className='my-2' 
          type="submit"
          disabled={!username || !password}
        >
        Sign In
        </Button>
      </Form>
    );
  }
  
export default ExampleForm