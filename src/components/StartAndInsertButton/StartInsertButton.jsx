import { Btn } from "./styles";

function StartInsertButton({ name, width, action }) {
  return (
    <Btn onClick={() => action()} width={width}>
      {name}
    </Btn>
  );
}

export default StartInsertButton;
