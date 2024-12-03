'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { Button, ContainerModal, ContainerPage, CurrencyResult, Input, Label, Option, Select, TitleModal } from "./style";

export default function Home() {
  const [currencies, setCurrencies] = useState([]);
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [formattedAmount, setFormattedAmount] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    // Buscar todas as moedas disponíveis na AwesomeAPI
    axios.get('https://economia.awesomeapi.com.br/json/available/uniq')
      .then(response => {
        const formattedCurrencies = Object.keys(response.data).map((key) => ({
          code: key,
          description: response.data[key],
        }));
        setCurrencies(formattedCurrencies);
      })
      .catch(error => console.error('Erro ao buscar moedas:', error));
  }, []);

  const handleConvert = () => {
    if (!sourceCurrency || !targetCurrency || !amount) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Realizar a conversão utilizando a AwesomeAPI
    axios.get(`https://economia.awesomeapi.com.br/json/last/${sourceCurrency}-${targetCurrency}`)
      .then(response => {
        const conversionKey = `${sourceCurrency}${targetCurrency}`;
        if (response.data[conversionKey]) {
          const conversionRate = parseFloat(response.data[conversionKey].bid);
          const convertedValue = (conversionRate * parseFloat(amount)).toFixed(2);
          setResult(convertedValue);
        } else {
          alert('Conversão falhou. Tente novamente.');
        }
      })
      .catch(error => console.error('Erro ao realizar conversão:', error));
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.,]/g, ''); // Remover caracteres inválidos
    setAmount(value);

    // Adicionar o símbolo da moeda, caso exista
    if (sourceCurrency) {
      setFormattedAmount(`${sourceCurrency} ${value}`);
    } else {
      setFormattedAmount(value);
    }
  };

  return (
    <ContainerPage>
      <ContainerModal>
        <TitleModal>Global Currency Converter</TitleModal>
        <Label>
          Source Currency
          <Select onChange={(e) => setSourceCurrency(e.target.value)} value={sourceCurrency}>
            <Option value="">Select Currency</Option>
            {currencies.map((currency) => (
              <Option key={currency.code} value={currency.code}>
                {currency.code} - {currency.description}
              </Option>
            ))}
          </Select>
        </Label>
        <Label>
          Target Currency
          <Select onChange={(e) => setTargetCurrency(e.target.value)} value={targetCurrency}>
            <Option value="">Select Currency</Option>
            {currencies.map((currency) => (
              <Option key={currency.code} value={currency.code}>
                {currency.code} - {currency.description}
              </Option>
            ))}
          </Select>
        </Label>
        <Label>
          Amount
          <Input
            type="text"
            placeholder="Enter amount"
            value={formattedAmount}
            onChange={handleAmountChange}
          />
        </Label>
        <Button onClick={handleConvert}>Convert</Button>
        <CurrencyResult
          type="text"
          placeholder="Converted value"
          value={result ? `${targetCurrency} ${result}` : ''}
          readOnly
        />
      </ContainerModal>
    </ContainerPage>
  );
}
