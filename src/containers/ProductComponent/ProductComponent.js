import "./ProductComponent.css";

import { Card, Icon, Image } from "semantic-ui-react";

import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  // const { id, title } = products[0];
  return (
    <>
      {products?.map((el, i) => {
        return (
          <div className="box-content">
            <Card style={{ width: "300px" }}>
              <img
                src={el.image}
                wrapped
                ui={false}
                alt={el.title}
                style={{ height: "250px" }}
              />
              <Card.Content>
                <Card.Header>{el.title}</Card.Header>
                <Card.Meta>
                  <span className="date">{el.category}</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Card.Meta>
                  <span style={{ color: "black" }} className="date">
                    Rs. {el.price}
                  </span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default ProductComponent;
