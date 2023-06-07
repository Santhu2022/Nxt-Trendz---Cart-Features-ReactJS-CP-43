import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLength = cartList.length

      const getOrderTotal = () => {
        let total = 0
        cartList.forEach(eachProduct => {
          total += eachProduct.price * eachProduct.quantity
        })
        return total
      }
      return (
        <div className="cart-summary">
          <div>
            <h1>
              Order Total: <span>Rs {getOrderTotal()}/-</span>
            </h1>
            <p>
              {cartLength} {cartLength > 1 ? 'Items' : 'Item'} in cart
            </p>
          </div>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
