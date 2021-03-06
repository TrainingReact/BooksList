import React from "react";
import ModalJsxTypes from "../../types/ModalJsxTypes/ModalJsxTypes";
import { DefaultRootState, useSelector } from "react-redux";
import Input from "../Input/Input";
import LabelSwitch from "./LabelSwitch/LabelSwitch";
import ButtonSubmit from "../ButtonModify/ButtonModify";
import {
  DirectionColumn,
  ContImg,
  ImgSize,
  Close,
  WrapperForm,
} from "./ModalJsxStyle";
import { Obj } from "../MainModalForm/MainModalForm";
import { RootState } from "../../store/store";
import { BookState } from "../../types/BookStoreTypes/BookStoreTypes";
import store from "../../store/store";

const ModalJsx: React.FC<ModalJsxTypes> = ({
  handleAddBook,
  handleType,
  handleClose,
  setToggle,
  toggle,
  book,
}) => {
  const checkModalModify = useSelector(
    (state: any) => state.books.modalCheckerModify
  );

  return (
    <>
      <div>
        <Close onClick={handleClose}>&times;</Close>
      </div>

      {!checkModalModify ? (
        <LabelSwitch setToggle={setToggle} toggle={toggle} />
      ) : null}

      <WrapperForm>
        <DirectionColumn>
          <Input
            type="text"
            label="name"
            name="name"
            placeholder="name"
            error={book.name.error}
            val={book.name.value}
            handleType={handleType}
          />
        </DirectionColumn>
        <DirectionColumn>
          <Input
            type="text"
            label="author"
            name="author"
            placeholder="author"
            error={book.author.error}
            val={book.author.value}
            handleType={handleType}
          />
        </DirectionColumn>
        <DirectionColumn>
          <Input
            type="text"
            label="gender"
            name="gender"
            placeholder="gender"
            error={book.gender.error}
            val={book.gender.value}
            handleType={handleType}
          />
        </DirectionColumn>
        <DirectionColumn>
          <Input
            type="number"
            label="quantity"
            name="quantity"
            placeholder="quantity"
            val={Number(book.quantity)}
            handleType={handleType}
          />
        </DirectionColumn>
        <DirectionColumn>
          <Input
            type="text"
            label="img"
            name="img"
            placeholder="img"
            error={book.img.error}
            val={book.img.value}
            handleType={handleType}
          />
          <ContImg>
            <ImgSize
              alt="err"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src =
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBoJ-u5is_IuOgE2wj18XdIB94tsYhy6V-Q&usqp=CAU";
              }}
              src={String(book?.img?.value)}
            />
          </ContImg>
        </DirectionColumn>
      </WrapperForm>

      <ButtonSubmit handleAddBook={handleAddBook} />
    </>
  );
};

export default ModalJsx;
