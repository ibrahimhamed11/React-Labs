import React from 'react';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useContext, useState } from 'react';
import { Dark } from "./../../configcontext/Darkcontext";

const Card = ({ product }) => {
  const { dark, setDark } = useContext(Dark);

  console.log(dark);

  return (
    <div className='container col'>
      <div className={"card"+dark}>
        <img src={product.images[0]} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h3>{product.title}</h3>
          <div>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          </div>
          {/* Add more elements to display other product information */}


        </div>
        <div class="btns">
          <button type="button" class="btn btn-success">Add to cart</button>

<button type="button" class="btn btn-warning btn ">Buy</button>

</div>
      </div>

    </div>
  );
};

export default Card;