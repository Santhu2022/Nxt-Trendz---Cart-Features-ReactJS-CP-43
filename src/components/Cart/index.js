import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const cartLength = cartList.length
      const showEmptyView = cartLength === 0

      const getOrderTotal = () => {
        let total = 0
        cartList.forEach(eachProduct => {
          total += eachProduct.price * eachProduct.quantity
        })
        return total
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <div className="remove-all-btn-container">
                  <button
                    className="remove-all-button"
                    type="button"
                    onClick={() => removeAllCartItems()}
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
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
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
