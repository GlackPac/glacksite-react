import React from 'react';
import { Button, Form} from 'react-bootstrap';

function ExampleFormTwo() {
    const [department, setDepartment] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [agreedToTerms, setAgreedToTerms] = React.useState(false);

    function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log('submitting', { department, message, agreedToTerms });
    }
  
    return (
      <Form 
        className="my-2" 
        onSubmit={handleSubmit} 
        style={{ width: '18rem', outline:'1px solid #5a5a5a', outlineOffset:'5px'}}
      >
        <Form.Select
          required
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="hr">Human Resources</option>
          <option value="pr">Public Relations</option>
          <option value="support">Support</option>
        </Form.Select>
          <Form.Control
            required
            className='my-2'
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
            as="textarea" 
            placeholder='Enter description'
          />
        <Form.Check
          required
          type="checkbox"
          name="agreedToTerms"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          label="I agree to the terms and conditions."
        />
        <Button 
          type="submit" 
          className='m-1' 
          variant='secondary'
          disabled={!department|| !message || !agreedToTerms }
        >
        Send
        </Button>
      </Form>
    );
  }

export default ExampleFormTwo;