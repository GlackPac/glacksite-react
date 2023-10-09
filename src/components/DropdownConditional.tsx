import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen((currentIsOpen) => !currentIsOpen);
    };
  
    return (
        <div>
            <Button variant='secondary' onClick={handleClick}>Actions</Button>
            {isOpen && (
                <ul>
                    <li>Edit</li>
                    <li>Remove</li>
                    <li>Archive</li>
                </ul>
            )}
        </div>
    );
}
  
export default DropdownMenu