import React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number; 
  }
// ? indicates an optional value

function Hello({ name, enthusiasmLevel = 1}: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error ("Be a little more enthusiastic please.");
    }

    return (
        <div className="hello">
          <div className="greeting">
            Hello {name + getExclamationMarks(enthusiasmLevel)}
          </div>
        </div>
      );
}

export default Hello;

// helper function

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join("!");
}