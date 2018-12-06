import React, { Component } from 'react';
// import T from 'prop-types';
// import styled from 'styled-components';
import s from './ProductComponent.module.css';
import { productPropTypes } from '../../common/propTypes';

// const InputField = styled.input`
//   display: block;
// `;

// const TextArea = styled.textarea`
//   display: block;
// `;

export const ProductComponent = ({
  product: {
    title,
    id,
    description,
    // onSubmit,
    image,
    price,
  },
}) => {
  return (
    // <form onSubmit={onSubmit}>
    //   <InputField name="title" value={title} onChange={onChange("title")} />
    //   <TextArea
    //     name="description"
    //     value={description}
    //     onChange={onChange("title")}
    //   />
    //   <button type="submit">Save</button>
    // </form>
    <div key={id} className={s.container}>
      <div className={s.containerDescription}>
        <div className={s.imageContainer}>
          <img
            className={s.image}
            src={image}
            alt="img"
            width="200px"
          />
        </div>
        <div className={s.infoContainer}>
          <div className={s.title}>{title}</div>
          <div className={s.description}>{description}</div>
        </div>
      </div>
      <div className={s.buy}>
        <button type="button" className={s.price}>
          іві
          {price}
        </button>
        <div className={s.containerBtn}>
          <button
            type="button"
            className={s.addBtn}
            // onClick={onAddtoCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductComponent.T = productPropTypes;
