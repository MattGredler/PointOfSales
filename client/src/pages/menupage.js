import React from 'react';

import ProductListing from '../features/product-listing'

import data from '../data/products.json'

export default function MenuPage(props) {
  return <div>
    <h2>Menu</h2>
    <ProductListing products={data.products} />
    </div>
}
