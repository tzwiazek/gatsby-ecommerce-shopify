const React = require("react")
const { CartProvider } = require("./src/components/cart/cart-provider")

exports.wrapRootElement = ({ element }) => {
  return <CartProvider>{element}</CartProvider>
}
