import React, { useState } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import CollabSection from '../sections/CollabSection'

const HomeView = () => {

  const [products, setProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5},
    { id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5}
  ])

  return (
    <>
      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductGridSection title="Featured Products" products={products} />
      <CollabSection />
      <FooterSection />
    </>
  )
}

export default HomeView