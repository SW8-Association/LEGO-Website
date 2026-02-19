// Product Helpers
const getProductFinalPrice = (product) =>
  Number((product.price * (1 - product.discount)).toFixed(2));

const getProductImages = (product) => {
  if (Array.isArray(product.image)) return product.image.filter(Boolean);
  return product.image ? [product.image] : [];
};

const getPrimaryProductImage = (product) => getProductImages(product)[0] || "";

const renderStars = (rating) => "&#9733;".repeat(Math.floor(rating));
