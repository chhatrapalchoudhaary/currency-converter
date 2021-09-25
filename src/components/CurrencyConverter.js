import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyConverter = (props) => {
    const [initialState, setState] = useState({
      currencies: ["USD", "SGD", "PHP", "EUR", "INR", "NZD", "AED"],
      base: "USD",
      amount: "",
      convertTo: "INR",
      result: "",
      date: "",
    });

const { currencies, base, amount, convertTo, result, date } = initialState;


useEffect(() => {
    if (amount === isNaN) {
      return;
    } else {
      const getCurrencyconvertor = async () => {
        const response = await axios.get(
          `https://api.exchangerate.host/latest?base=${base}`
        );
        // console.log("response==>", response);
        const date = response.data.date;
        const result = (response.data.rates[convertTo] * amount).toFixed(3);
        setState({
          ...initialState,
          result,
          date,
        });
      };
      getCurrencyconvertor();
    }
  }, [amount, base, convertTo]);

  const onChangeInput = (e) => {
    setState({
      ...initialState,
      amount: e.target.value,
      result: null,
      date: null,
    });
  };
  const handleSelect = (e) => {
    setState({
      ...initialState,
      [e.target.name]: e.target.value,
      result: null,
    });
  };

  const handleSwap = (e) => {
    e.preventDefault();
    setState({
      ...initialState,
      convertTo: base,
      base: convertTo,
      result: null,
    });
  };
    return(
        <Container>
            <Wrapper>
                <Title>Currency Converter</Title>
                
                <Card>
                    <Row>
                    <SubHeading>
                    {amount} {base} is equivalent to  {" "} 
                    </SubHeading>
                    <SubHeadingDark>
                    {amount === ""
                        ? "0"
                        : result === null
                        ? "Calculating ..."
                        : result}
                    {convertTo}
                    </SubHeadingDark>
                    <Date>as of {amount === "" ? "" : date === null ? "" : date}</Date>
                    </Row>
                    
                <Content> 
                <Form >
                  <Input
                    type="number"
                    value={amount}
                    onChange={onChangeInput}
                  />
                  <Select
                    name="base"
                    value={base}
                    onChange={handleSelect}
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </Select>
                </Form>
                <SubHeadingDark onClick={handleSwap}>
                  &#8595;&#8593;
                </SubHeadingDark>
                <Form>
                  <Input
                    disabled={true}
                    value={
                      amount === ""
                        ? "0"
                        : result === null
                        ? "Calculating..."
                        : result
                    }
                  />
                  <Select
                    name="convertTo"
                    value={convertTo}
                    onChange={handleSelect}
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </Select>
                </Form>
                </Content>
                
                </Card>
            </Wrapper>
        </Container>
    )
}

const Container = styled.main`

position: relative;
min-height: calc(100vh-250px);
overflow-x: hidden;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
top: 102px;
padding: 0 calc(3.5vw + 15px);


&:after{
    background-color: #f5f5f5;
    content: ' ';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index:-1;
}
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  border-radius: 8px;
  width: 90%;
  box-shadow: -1px 1px 3px 0px rgba(0,0,0,0.75);
  margin:10px;
`;
const Card = styled.div``;
const Title = styled.h1`
    font-size: 40px;
    color: #2e418f;
    font-family: Poppins;
    line-height: 0px;
`;
const SubHeading = styled.p`
    font-size: 22px;
    color: #86aedd;
    font-family: Poppins;
    line-height: 0px;
    letter-spacing: 1px;
`;

const SubHeadingDark = styled.p`
    font-size: 22px;
    color: #2ed06e;
    font-family: Poppins;
    line-height: 0px;
    letter-spacing: 1px;
`;

const Date = styled.div`
background-color: #2e418f;
border-radius: 4px;
color: white;
padding:5px;
margin-bottom: 10px;
text-align: center;
`;
const Row = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;`;

const Form = styled.form`
 margin: 30px 40px;

`;

const Input = styled.input`
padding:15px;
width: 240px;
height: 60px;
font-size: 18px;
outline: none;
border-color: #2e418f;
border-radius: 2px;
border:1px solid #2e418f;

`;

const Select = styled.select`padding:15px;
height: 60px;
font-size: 18px;
margin-left: 10px;
outline: none;
border-color: #2e418f;
border-radius: 2px;
border:1px solid #2e418f;

&:active{
    border-color: #5e438f;
}
`;




export default CurrencyConverter