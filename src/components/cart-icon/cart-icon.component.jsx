import React from "react";
import { connect } from "react-redux";
import {ReactComponent as ShoppingIcon} from '../../assets/122 shopping-bag.svg'
import './cart-icon.style.scss';
import {toggleCartHidden}  from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon=({toggleCartHidden,itemCount })=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)


const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});

const mapStateToprops= createStructuredSelector({
    itemCount: selectCartItemsCount
});
export default connect(mapStateToprops,mapDispatchToProps)(CartIcon);