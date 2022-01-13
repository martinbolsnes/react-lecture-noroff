import styled from 'styled-components';

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: red;

  :hover {
    color: ${(props) => props.customColor};
  }
`;

export default Title;
