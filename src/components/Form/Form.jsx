import StartInsertButton from "../StartAndInsertButton/StartInsertButton";
import { useState } from "react";
import { FormStyled } from "./styles";

function Form({ setTransactions }) {
  
  const [description, setDescription] = useState("");

  const [value, setValue] = useState("");
  
  const [type, setType] = useState("Entrada");

  function handleSubmit() {
    value.length > 0 && description.length > 0 &&
    setTransactions((preveiusTransactions) => [
      ...preveiusTransactions,
      { description, value, type },
    ]);
    setValue("");
    setDescription("");
  }

  return (
    <>
      <FormStyled onSubmit={(event) => event.preventDefault()}>
        <div className="description--div">
          <h2 className="description--label">Descrição</h2>
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="description--text"
            type="text"
            placeholder="Digite aqui sua descrição"
            required
          />
          <h2 className="description--example">Ex: Compra de roupas</h2>
        </div>
        <div className="container--value">
          <div className="value--div">
            <h2 className="value--label">Valor</h2>
            <input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="value--value"
              type="text"
              pattern="\d*"
              placeholder="R$"
              required
            />
          </div>
          <div className="type--div">
            <h2 className="type--label">Tipo de valor</h2>
            <select
              onChange={(event) => setType(event.target.value)}
              className="value--value"
              name=""
              id=""
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <StartInsertButton
          type="submit"
          action={handleSubmit}
          name="Inserir Valor"
          width={315}
        />
      </FormStyled>
    </>
  );
}

export default Form;
