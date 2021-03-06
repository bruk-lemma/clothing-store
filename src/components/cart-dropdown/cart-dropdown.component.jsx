import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custome-button/custom-button.component";
import './cart-dropdown.style.scss';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";


//import { selectCurrentUser } from "../../redux/user/user.selectors";


const CartDropDown=({cartItems,history,dispatch})=>(
<div className="cart-dropdown">
    <div className="cart-items">
        {
            cartItems.length ?
            cartItems.map(cartItem=> (
            <CartItem key={cartItem.id} item={cartItem}/>
            
            ))
            : 
            <span className="empty-message">Your Cart is empty</span>

        }
    </div>
    <CustomButton onClick={()=>{
        history.push('/checkout');
        dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
</div>
);

const mapStateToprops=createStructuredSelector({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToprops)(CartDropDown));


 