import React from "react";
import { connect } from "react-redux";
import {ReactComponent as ShoppingIcon} from '../../assets/122 shopping-bag.svg'
import './cart-icon.style.scss';
import {toggleCartHidden}  from '../../redux/cart/cart.actions'

const CartIcon=({toggleCartHidden})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)


const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);