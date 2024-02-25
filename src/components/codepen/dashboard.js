import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (

    <div>
      <nav>
        <div className="nav-bar">
          <div className="logo">AirBoost</div>
          <div className="search">
            <span className="material-symbols-outlined search-icon"> search </span>
            <input
              className="search-bar"
              placeholder="Find Your Sole Mate..."
              type="text"
            />
          </div>
          {/* <div className="log-in"><a href="">Sign Up</a><a href="">Log In</a></div> */}
          <div className="log-in"><Link to="./signup" >Sign Up</Link><Link to="./login" >Log in</Link></div>
        </div>
        <div className="nav-links">
          <li className="selected-link"><Link>Home</Link></li>
          <li><Link>Products</Link></li>
          {/* <li><Link>New Arrivals</Link></li> */}
          <li><Link>Men</Link></li>
          <li><Link>Women</Link></li>
          <li><Link>Kids</Link></li>
          <li><Link>Sale</Link></li>
          <li><Link>Nike</Link></li>
          <li><Link>Adidas</Link></li>
          <li><Link>Vans</Link></li>

          {/* <a href="/" className="selected-link">Home</a>
        <a href="">Vans</a> */}
        </div>
      </nav>
      <main style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 64px)' }}>
        <section classNameName="main-image">
          <img src="https://i.ibb.co/GTFNRtw/main-shoe.png" alt="main-shoe.png" />
          <h1 className="animated-text"><span className="white-text">Jus</span>t do<span className="white-text">It.</span></h1>
          <button className="expand-button">
            <span className="material-symbols-outlined expand-icon">expand_more</span>
          </button>
        </section>

        <section className="products-section">
          <div className="item-container">
            <div className="item-card">
              <div className="img-1"></div>
              <h1 className="item-name">Tatum 1</h1>
              <h2 className="item-category">Basketball Shoes</h2>
              <h3 className="item-price">$120</h3>
            </div>
            <div className="item-card">
              <div className="img-2"></div>

              <h1 className="item-name">Air Jordan 1 Low OG</h1>
              <h2 className="item-category">Men's Shoes</h2>
              <h3 className="item-price">$140</h3>
            </div>
            <div className="item-card">
              <div className="img-3"></div>
              <h1 className="item-name">Air Jordan 1 Mid</h1>
              <h2 className="item-category">Men's Shoes</h2>
              <h3 className="item-price">$125</h3>
            </div>
            <div className="item-card">
              <div className="img-4"></div>
              <h1 className="item-name">Jumpman MVP</h1>
              <h2 className="item-category">Men's Shoes</h2>
              <h3 className="item-price">$165</h3>
            </div>
            <div className="item-card">
              <div className="img-5"></div>
              <h1 className="item-name">Nike Air Force 1 Shadow</h1>
              <h2 className="item-category">Women's Shoes</h2>
              <h3 className="item-price">$130</h3>
            </div>
            <div className="item-card">
              <div className="img-6"></div>
              <h1 className="item-name">Nike Air Force 1 '07</h1>
              <h2 className="item-category">Men's Shoes</h2>
              <h3 className="item-price">$125</h3>
            </div>
            <div className="item-card">
              <div className="img-7"></div>
              <h1 className="item-name">Nike Court Legacy Next Nature</h1>
              <h2 className="item-category">Women's Shoes</h2>
              <h3 className="item-price">$70</h3>
            </div>
            <div className="item-card">
              <div className="img-8"></div>

              <h1 className="item-name">Nike Free Metcon 5 Premium</h1>
              <h2 className="item-category">Women's Shoes</h2>
              <h3 className="item-price">$130</h3>
            </div>
            <div className="item-card">
              <div className="img-9"></div>

              <h1 className="item-name">Nike Air Max 97</h1>
              <h2 className="item-category">Men's Shoes</h2>
              <h3 className="item-price">$175</h3>
            </div>
            <div className="item-card">
              <div className="img-10"></div>

              <h1 className="item-name">Nike Lunar Force 1</h1>
              <h2 className="item-category">Men's Shoes</h2>
              <h3 className="item-price">$185</h3>
            </div>
            <div className="item-card">
              <div className="img-11"></div>

              <h1 className="item-name">NikeCourt Air Zoom Vapor 11 Premium</h1>
              <h2 className="item-category">Women's Shoes</h2>
              <h3 className="item-price">$180</h3>
            </div>
            <div className="item-card">
              <div className="img-12"></div>

              <h1 className="item-name">Nike Air Zoom Generation</h1>
              <h2 className="item-category">Men's Shoes</h2>
              <h3 className="item-price">$190</h3>
            </div>
            <div className="item-card">
              <div className="img-13"></div>

              <h1 className="item-name">Nike Air Zoom Flight 95</h1>
              <h2 className="item-category">Men's Shoes</h2>
              <h3 className="item-price">$160</h3>
            </div>
            <div className="item-card">
              <div className="img-14"></div>

              <h1 className="item-name">Nike Air Zoom Infinity Tour NRG</h1>
              <h2 className="item-category">Men's Golf Shoes</h2>
              <h3 className="item-price">$180</h3>
            </div>
            <div className="item-card">
              <div className="img-15"></div>

              <h1 className="item-name">NikeCourt Air Zoom GP Turbo Osaka</h1>
              <h2 className="item-category">Women's Hard Court Tennis Shoes</h2>
              <h3 className="item-price">$160</h3>
            </div>
            <div className="item-card">
              <div className="img-4"></div>
              <h1 className="item-name">Jumpman MVP</h1>
              <h2 className="item-category">Men's Shoes</h2>
              <h3 className="item-price">$165</h3>
            </div>
            <div className="item-card">
              <div className="img-9"></div>
              <h1 className="item-name">Nike Air Max 97</h1>
              <h2 className="item-category">Men's Shoes</h2>
              <h3 className="item-price">$175</h3>
            </div>
            <div className="item-card">
              <div className="img-16"></div>
              <h1 className="item-name">Nike Air Max Pulse Roam</h1>
              <h2 className="item-category">Men's Shoes</h2>
              <h3 className="item-price">$170</h3>
            </div>
          </div>
        </section>
        <section className='products-section'>
          {/* <div className="item-card"> */}
          {/* <div className="img-9"></div> */}

          <h1 className="item-name">Nike Air Max 97</h1>
          <h2 className="item-category">Men's Shoes</h2>
          <h3 className="item-price">$175</h3>
          {/* </div> */}
        </section>
      </main>

    </div>
  )
}

