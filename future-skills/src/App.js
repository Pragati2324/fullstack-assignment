import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Search from './Components/Search';
import CardGrid from './Components/CardGrid';
import Footer from './Components/Footer';
import axios from 'axios';

const App=()=> {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    axios.get('http://localhost:5000/api/cards')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cards!', error);
      });
  }, []);

  const handleSearch = (query) => {
    if (query) {
      const filtered = data.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className="font-sans">
      <Header />
      <Search onSearch={handleSearch} />
      <div className="px-8">
        <CardGrid data={filteredData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
