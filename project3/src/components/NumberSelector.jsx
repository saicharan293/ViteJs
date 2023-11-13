import styled from "styled-components";

const NumberSelector = ({seterror,error,selectedNumber,setselectedNumber}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler=(value)=>{
    setselectedNumber(value)
    seterror("")
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            isSelected={value == selectedNumber}
            onClick={()=>numberSelectorHandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select any number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700px;
  }
  .error{
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
