import styled from 'styled-components';

const Button = styled.button`
  background-color: darkgreen;
  height: 50px;
  width: 150px;
  color: white;
  appearance: none;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;

  :hover {
    background-color: white;
    color: darkgreen;
    border: solid 2px darkgreen;
  }

  :disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export default Button;
