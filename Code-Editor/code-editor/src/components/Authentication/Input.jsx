import styled from 'styled-components'

const Input = styled.input`
  background: #ffffff12;
  outline: none;
  padding:0.5rem;
  border-radius: 5px;
  margin-bottom: 5px;
  font-size: 14px;

  &:focus{
    border-bottom: .8px solid #514f4f;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    /* transition: all ease-in 0.2s; */
  }
`
export default Input