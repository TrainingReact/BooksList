import { Obj } from "../../components/MainModalForm/MainModalForm";

type MainModalFormPropsTypes = {
  handleClose: any;
  setCheckModify: React.Dispatch<React.SetStateAction<Boolean>>;
  checkModify: Boolean;
  idBookToModify: number;
  book: Obj;
  setBook: React.Dispatch<React.SetStateAction<Obj>>;
};

export default MainModalFormPropsTypes;
