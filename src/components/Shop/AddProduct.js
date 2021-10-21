import React, { useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddProduct.module.css";

const AddProduct = (props) => {
  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    console.log(enteredTitle);
    console.log(enteredPrice);
    console.log(enteredDescription);

    props.onAddProduct(enteredTitle, enteredPrice, enteredDescription);
    titleInputRef.current.value = "";
    priceInputRef.current.value = "";
    descriptionInputRef.current.value = "";
  };
  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.main}>
          <div className={classes.upper}>
            <input placeholder="Enter a Title" ref={titleInputRef} />
            <input placeholder="Enter a price" ref={priceInputRef} />
          </div>
          <div>
            <input
              placeholder="Enter a description"
              ref={descriptionInputRef}
            />
          </div>
          <button>Add a product</button>
        </div>
      </form>
    </Card>
  );
};

export default AddProduct;
