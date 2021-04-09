import getKeys from "../utils/getKeysFunc";
import { objKeys } from "../types/objKeysTypes/objKeysType";
import { Obj } from "../components/MainModalForm/MainModalForm";

const clearAllField = (
  book: Obj,
  setBook: React.Dispatch<React.SetStateAction<Obj>>,
  quantity?: number
) => {
  getKeys(book).map((val: objKeys) => {
    if (val !== "id") {
      const isQuantity = val === "quantity";
      if (!isQuantity) {
        setBook((prevState: Obj) => ({
          ...prevState,
          [val]: {
            value: "",
            error: "",
          },
        }));
      } else if (quantity) {
        setBook((prev: Obj) => ({ ...prev, [val]: 1 }));
      } else {
        return setBook((prev: Obj) => ({ ...prev, [val]: 1 }));
      }
    }
  });
};

export default clearAllField;
