import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';

function ExampleForm() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(username, password);
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Label>Username</Form.Label>
        <Form.Control
            style={{ width: '18rem' }}
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
            style={{ width: '18rem' }}
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant='secondary' className='my-2' type="submit">Sign In</Button>
      </Form>
    );
  }
  
export default ExampleForm