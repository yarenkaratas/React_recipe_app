import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FromStyled onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
      </div>
    </FromStyled>
  );
}

const FromStyled = styled.form`
  margin: 0rem 2rem;
  position: relative;

  div {
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 0.5rem 3rem;
    border-radius: 1rem;
    ouline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
