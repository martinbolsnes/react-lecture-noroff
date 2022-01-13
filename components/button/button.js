import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  height: 50px;
  width: 150px;
  color: white;
  appearance: none;
  border: none;
  border-radius: 5px;

  :hover {
    background-color: white;
    color: blue;
    border: solid 2px blue;
  }
`;

export default Button;
