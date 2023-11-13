import styled from "styled-components"

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="/image/dices.png" alt="dice" />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container= styled.div`
    max-width: 1080px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
        
    }
`

const Button= styled.button`
    padding: 10px 18px;
    margin-left: 10rem;
    height: 44px;
    min-width: 220px;
    border: none;
    background: #000;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: .4s background ease-in;


    &:hover{
        background-color: #fff;
        cursor: pointer;
        border: 1px solid black;
        color: black;
        transition: .3s background ease-in;
    }

    
`
