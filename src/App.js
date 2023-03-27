import React from 'react'
import { useState } from 'react';
import searchImages from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages]= useState([]);
  const handleSubmit =  async (term)=> {
    const results =  await searchImages(term);
    // console.log( 'do a search with',term);
    // console.log(results);
    setImages(results);
  }
  return (
    <div>
    <SearchBar onSubmit={handleSubmit}/>
    <ImageList images = {images} />
    </div>
  )
}

export default App
