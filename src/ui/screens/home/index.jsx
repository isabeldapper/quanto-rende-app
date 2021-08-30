import React, { useState } from "react";
import {
  Input,
  RadioButton,
  Button,
  Header,
  CardResults,
} from "../../components";
import { PROFITABILITIES } from "../../../constants/index";
import "./style.css";

export function Home() {
  const [initialValue, setInitialValue] = useState(0);
  const [monthlyValue, setMonthlyValue] = useState(0);
  const [monthsNumber, setMonthsNumber] = useState(0);
  const [profitabilitySelected, setProfitabilitySelected] = useState(0);
  const [results, setResults] = useState(0);

  function printValues() {
    console.log(
      initialValue,
      monthlyValue,
      monthsNumber,
      profitabilitySelected
    );
  }

  return (
    <>
      <Header />
      <div className='calculator container'>
        <CardResults results={results} />
        <div className='calculator-box'>
          <Input
            label='Valor Inicial'
            name={initialValue}
            value={initialValue}
            type='number'
            onChange={setInitialValue}
          />

          <Input
            label='Valor mensal'
            name={monthlyValue}
            value={monthlyValue}
            type='number'
            onChange={setMonthlyValue}
          />

          <Input
            label='Quantidade de meses'
            name={monthsNumber}
            value={monthsNumber}
            type='number'
            onChange={setMonthsNumber}
          />

          <ul>
            {PROFITABILITIES.map((profitability) => (
              <>
                <li key={profitability.title}>
                  <RadioButton
                    label={profitability.title}
                    name={profitabilitySelected.value}
                    value={profitabilitySelected.value}
                    type='radio'
                    onChange={setProfitabilitySelected}
                  />
                </li>
              </>
            ))}
          </ul>

          <Button
            onClick={() => printValues()}
            children='Calcular'
            type='submit'
          />
        </div>
      </div>
    </>
  );
}
