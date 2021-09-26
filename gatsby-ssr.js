const React = require('react');
const { CartProvider } = require('./src/contexts/cart.context');
const { ToggleProvider } = require('./src/contexts/toggle.context');

exports.wrapRootElement = ({ element }) => {
  return (
    <ToggleProvider>
      <CartProvider>{element}</CartProvider>
    </ToggleProvider>
  )
};
