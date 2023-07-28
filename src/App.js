import React from 'react';
import './index.css';

import product1Image from './images/product1.jpeg';
import product2Image from './images/product2.jpeg';
import product3Image from './images/product3.jpeg';
import logo from './images/logo.jpg';


const App = () => {
  return (
    <div className="app-container">
      <h1>Popular Products</h1>
      <table className="product-table">
        <tbody>
          <tr>
            <td>
              <img src={product1Image} alt="Product 1" className="product-image" />
            </td>
            <td>
              <strong>61</strong>
              <br />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
              
            </td>
            <td>
              <strong>Haught or naught</strong>
              <br />
              High-minded or absent minded? u decide
              <br />
              Submitted By:<img src={logo} alt="logo" className="logo" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={product2Image} alt="Product 2" className="product-image" />
            </td>
            <td>
              <strong>54</strong>
              <br />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            </td>
            <td>
              <strong>Supermajority</strong>
              <br />
              which politician win
              <br />
              Submitted By:<img src={logo} alt="logo" className="logo" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={product3Image} alt="Product 3" className="product-image" />
            </td>
            <td>
              <strong>27</strong>
              <br />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            </td>
            <td>
              <strong>Tind foild</strong>
              <br />
              dont worry we have your measurements and shipping address
              <br />
              Submitted By:<img src={logo} alt="logo" className="logo" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;