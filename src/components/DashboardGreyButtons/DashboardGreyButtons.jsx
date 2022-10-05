import { Btn } from "./styes";


function DGBtns({ name, action }) {
  return <Btn onClick={() => action()}>{name}</Btn>;
}

export default DGBtns;