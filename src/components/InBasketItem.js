import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

export default function InBasketItem({ item, index }) {
  const dispatch = useDispatch();

  const removeItemFromList = (index) => {
    dispatch(actionCreators.removeItem(index));
  };

  return (
    <ListGroup.Item
      key={index}
      variant="success"
      onClick={() => removeItemFromList(index)}
    >
      {item.value}
    </ListGroup.Item>
  );
}
