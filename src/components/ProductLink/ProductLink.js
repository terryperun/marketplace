import React from 'react';
// import { productPropTypes } from "../common/propTypes";
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { formatRoute } from 'react-router-named-routes';
import s from './ProductLink.module.css';

export const ProductLink = ({ id, title, image, price }) => (
  <div>
    <Link to={formatRoute(routes.adminProduct, { id })}>
      <div className={s.itemContainer}>
        <div className={s.productOnClick}>
          <div className={s.image}>
            <img
              className={s.itemImg}
              src={image}
              alt="img"
              width="100px"
            />
          </div>
          <div className={s.title}>{title}</div>
          <div className={s.price}>{price}</div>
        </div>
        <div className={s.btn}>
          <button
            className={s.editBtn}
            // onClick={() => handleEdit(propsItem)}
          >
            Edit
          </button>
          <button
            className={s.removeBtn}
            // onClick={() => deleteItem(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </Link>
  </div>
);

ProductLink.T = {
  id: T.number.isRequired,
  title: T.string.isRequired,
};
