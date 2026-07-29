import React, { createContext, useContext, useState } from 'react';
import { data as initialProducts } from '../data/data';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'iphone 11 Pro max',
      price: '$500',
      numPrice: 500,
      image: require('../assets/iphone1.png'),
      quantity: 1,
      ram: '4GB',
      rom: '64GB',
      color: 'Black',
    },
    {
      id: 3,
      name: 'iphone 12 Pro max',
      price: '$550',
      numPrice: 550,
      image: require('../assets/iphone2.png'),
      quantity: 1,
      ram: '6GB',
      rom: '128GB',
      color: 'Light Blue',
    },
  ]);

  const [wishlist, setWishlist] = useState([2, 5]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filters, setFilters] = useState({
    types: [],
    priceMax: null,
    colors: [],
    storage: [],
    discountOnly: false,
  });
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [appliedCoupon, setAppliedCoupon] = useState({ code: '', discountPercent: 0 });
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const parsePrice = (priceStr) => {
    if (typeof priceStr === 'number') return priceStr;
    if (!priceStr) return 0;
    return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
  };

  const addToCart = (product, quantity = 1, options = {}) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        const itemPrice = parsePrice(product.price);
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            numPrice: itemPrice,
            image: product.image,
            quantity: quantity,
            ram: options.ram || '4GB',
            rom: options.rom || '128GB',
            color: options.color || 'Space Gray',
          },
        ];
      }
    });
    showToast(`Added ${product.name} to Cart!`, 'success');
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    showToast('Item removed from Cart', 'info');
  };

  const updateCartQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const isWishlisted = prev.includes(productId);
      if (isWishlisted) {
        showToast('Removed from Wishlist', 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to Wishlist!', 'success');
        return [...prev, productId];
      }
    });
  };

  const removeCoupon = () => {
    setAppliedCoupon({ code: '', discountPercent: 0 });
    showToast('Coupon removed', 'info');
  };

  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'SAVE20' || cleanCode === 'NATSENT20') {
      setAppliedCoupon({ code: cleanCode, discountPercent: 20 });
      showToast('Coupon applied! 20% OFF discount granted.', 'success');
      return { success: true, message: '20% Discount Applied!' };
    } else if (cleanCode === 'HALF50') {
      setAppliedCoupon({ code: cleanCode, discountPercent: 50 });
      showToast('Coupon applied! 50% OFF discount granted.', 'success');
      return { success: true, message: '50% Discount Applied!' };
    } else {
      showToast('Invalid Coupon Code. Try "SAVE20"', 'error');
      return { success: false, message: 'Invalid Coupon Code' };
    }
  };

  const cartSubtotal = cart.reduce((acc, item) => {
    const itemPrice = item.numPrice || parsePrice(item.price);
    return acc + itemPrice * item.quantity;
  }, 0);

  const cartDiscountAmount = (cartSubtotal * appliedCoupon.discountPercent) / 100;
  const cartTotal = Math.max(0, cartSubtotal - cartDiscountAmount);
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const resetFilters = () => {
    setFilters({
      types: [],
      priceMax: null,
      colors: [],
      storage: [],
      discountOnly: false,
    });
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setCurrentPage(1);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        filters,
        setFilters,
        sortBy,
        setSortBy,
        currentPage,
        setCurrentPage,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        quickViewProduct,
        setQuickViewProduct,
        toast,
        showToast,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        cartSubtotal,
        cartDiscountAmount,
        cartTotal,
        totalCartCount,
        resetFilters,
        isMobileFilterOpen,
        setIsMobileFilterOpen,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
