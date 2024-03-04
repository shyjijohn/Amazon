import './App.css';

function App() {

  return (
    <div class="container">

      {/* no.1......navbar */}

      <div class="navbar">
        <div class="navbar-left">
          <img src="images/amazon-co-uk.png" class="amazon-pic" />
          <div class="location">
            <img src="images/location-white.png" class="location-pic" />
            <div>Deliver to <div>UK</div></div>
          </div>
        </div>

        <div class="search-in-navbar-center">
          <select class="select-all-navbar">
            <option>All</option>
            <option>2</option>
          </select>
          <input type="text" placeholder='Search Amazon' class="search-amazon-text" />
          <img src="images/search.png" class="search-pic" />
        </div>

        <div class="navbar-right">
          <select class="flag">
            <option><img src="images/uk-flag.png" class="uk-flag-pic" /></option>
            <option>2</option>
          </select>
          <select class="sign-in">
            <option>Hello, sign in </option>
            <option>2</option>
          </select>
          <button class="returns-n-orders">Returns & Orders</button>
          <button class="cart">
            <div>
              <img src="images/cart-white.png" class="cart-pic" />
            </div>
          </button>
        </div>
      </div>

      {/* no.2......menubar */}

      <div class="menubar">
        <div class="hamburger-all">
          <img src="images/hamburger-white.png" class="hamburger-pic" />
          <div>All</div>
        </div>
        <div class="todays-deals">Today's Deals</div>
        <div class="customer-service">Customer Service</div>
        <div class="registry">Registry</div>
        <div class="gift-cards">Gift Cards</div>
        <div class="sell">Sell</div>
      </div>

      {/* reducing the size of width */}

      <div class="reducing-the-size-of-width">
        {/* no.3......ads */}

        <div class = "color-gradient">
          <div class="ads">
            <img src="images/left-arrow.png" class="left-arrow-pic" />
            <img src="images/shop-books-add.jpg" class="shop-books-add-pic" />
            {/* <img src="images/movie-add.jpg" class="movie-add-pic" />
          <img src="images/shop-books-add.jpg" class="shop-books-add-pic" /> */}
            <img src="images/right-arrow.png" class="right-arrow-pic" />
            </div>

          {/* eight-cards */}

          <div class="eight-cards">
            <div class="card-one">
              Top Deal
              <img src="images/bean-bag.png" class="cards-pic" />
              <div class="shop-more">Shop More</div>
            </div>
            <div class="card-one">
              Gift ideas for Mother's day
              <img src="images/mothers-day-gifts.png" class="cards-pic" />
              <div class="shop-more">Shop More</div>
            </div>
            <div class="card-one">
              Bestsellers in Sport
              <img src="images/sports.png" class="cards-pic" />
              <div class="shop-more">Shop More</div>
            </div>
            <div class="card-one">
              Grooming Products
              <img src="images/grooming-products.png" class="cards-pic" />
              <div class="shop-more">Shop More</div>
            </div>
            <div class="card-one">
              Latest devices
              <img src="images/latest-device.png" class="cards-pic" />
              <div class="shop-more">Shop More</div>
            </div>
            <div class="card-one">
              Pets food
              <img src="images/pets-food.png" class="cards-pic" />
              <div class="shop-more">Shop More</div>
            </div>
            <div class="card-one">
              Fashion Mart
              <img src="images/fashion-mart.png" class="cards-pic" />
              <div class="shop-more">Shop More</div>
            </div>
            <div class="card-one">
              Bestsellers in Toys
              <img src="images/toys.jpg" class="cards-pic" />
              <div class="shop-more">Shop More</div>
            </div>
          </div>
          </div>

        {/* best-sellers */}

        {/* <img src="images/left-arrow.png" class="left-arrow-best-sellers-pic" /> */}
        <div class="best-sellers">
          <h3>Best Sellers in Sports & Outdoors</h3>
          <div class="slides">
            <img src="images/travel-tumbler.png" class="best-sellers-pic" />
            <img src="images/xbox.jpg" class="best-sellers-pic" />
            <img src="images/domestos.jpg" class="best-sellers-pic" />
            <img src="images/table.jpg" class="best-sellers-pic" />
            <img src="images/office-chair.jpg" class="best-sellers-pic" />
            <img src="images/towels.jpg" class="best-sellers-pic" />
            <img src="images/headset.jpg" class="best-sellers-pic" />
            <img src="images/book.jpg" class="best-sellers-pic" />
            <img src="images/travel-tumbler.png" class="best-sellers-pic" />
            <img src="images/xbox.jpg" class="best-sellers-pic" />
            <img src="images/domestos.jpg" class="best-sellers-pic" />
            <img src="images/table.jpg" class="best-sellers-pic" />
            <img src="images/office-chair.jpg" class="best-sellers-pic" />
            <img src="images/towels.jpg" class="best-sellers-pic" />
            <img src="images/headset.jpg" class="best-sellers-pic" />
            <img src="images/book.jpg" class="best-sellers-pic" />
          </div>

        </div>

        {/* <img src="images/right-arrow.png" class="right-arrow-pic" /> */}

        {/* four-cards */}

        <div class="four-cards">
          <div class="card-two">
            10 Popular Alexa routines
            <img src="images/alexa.jpg" class="cards-pic" />
            <div class="shop-more">Shop More</div>
          </div>
          <div class="card-two">
            Office Desk
            <img src="images/office-desk.jpg" class="cards-pic" />
            <div class="shop-more">Shop More</div>
          </div>
          <div class="card-two">
            Tablets
            <img src="images/tablets.jpg" class="cards-pic" />
            <div class="shop-more">Shop More</div>
          </div>
          <div class="card-two">
            Extension cords
            <img src="images/extension-cords.jpg" class="cards-pic" />
            <div class="shop-more">Shop More</div>
          </div>
        </div>

        {/* unexpected-deals */}

        <div class="unexpected-deals">
          <h3>Unexpected deals</h3>
          <div class="slides">
            <div class="deal">
              <img src="images/deal-rose.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">20% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£43.99</div>
                <div class="deal-real-amount">RRP: £54.99</div>
              </div>
              <div class="deal-description">Bouquet of Roses...</div>
            </div>


            <div class="deal">
              <img src="images/deal-cam.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">25% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£59.64</div>
                <div class="deal-real-amount">RRP: £79.99</div>
              </div>
              <div class="deal-description">Video Baby Monitor...</div>
            </div>


            <div class="deal">
              <img src="images/deal-book.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">36% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£14.00</div>
                <div class="deal-real-amount">RRP: £22.00</div>
              </div>
              <div class="deal-description">House of Flame...</div>
            </div>



            <div class="deal">
              <img src="images/deal-playset.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">26% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£13.99</div>
                <div class="deal-real-amount">RRP: £18.99</div>
              </div>
              <div class="deal-description">Salon Playset...</div>
            </div>


            <div class="deal">
              <img src="images/deal-remedies.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">19% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£20.25</div>
                <div class="deal-real-amount">RRP: £25.00</div>
              </div>
              <div class="deal-description">Neal Yard's Remed...</div>
            </div>



            <div class="deal">
              <img src="images/deal-art.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">20% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£35.99</div>
                <div class="deal-real-amount">RRP: £44.99</div>
              </div>
              <div class="deal-description">Fauna collection...</div>
            </div>



            <div class="deal">
              <img src="images/deal-apple-gin.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">31% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£20.00</div>
                <div class="deal-real-amount">RRP: £28.57</div>
              </div>
              <div class="deal-description">CR & B Apple Gin...</div>
            </div>



            <div class="deal">
              <img src="images/deal-age-perfect.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">60% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£7.99</div>
                <div class="deal-real-amount">RRP: £19.99</div>
              </div>
              <div class="deal-description">Loreal Paris Gold...</div>
            </div>


            <div class="deal">
              <img src="images/deal-alpro.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">33% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£10.80</div>
                <div class="deal-real-amount">RRP: £16.00</div>
              </div>
              <div class="deal-description">Alpro Oat No Sug...</div>
            </div>



            <div class="deal">
              <img src="images/deal-rose.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">20% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£43.99</div>
                <div class="deal-real-amount">RRP: £54.99</div>
              </div>
              <div class="deal-description">Bouquet of Roses...</div>
            </div>



            <div class="deal">
              <img src="images/deal-cam.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">25% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£59.64</div>
                <div class="deal-real-amount">RRP: £79.99</div>
              </div>
              <div class="deal-description">Video Baby Monitor...</div>
            </div>



            <div class="deal">
              <img src="images/deal-book.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">36% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£14.00</div>
                <div class="deal-real-amount">RRP: £22.00</div>
              </div>
              <div class="deal-description">House of Flame...</div>
            </div>



            <div class="deal">
              <img src="images/deal-playset.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">26% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£13.99</div>
                <div class="deal-real-amount">RRP: £18.99</div>
              </div>
              <div class="deal-description">Salon Playset...</div>
            </div>



            <div class="deal">
              <img src="images/deal-remedies.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">19% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£20.25</div>
                <div class="deal-real-amount">RRP: £25.00</div>
              </div>
              <div class="deal-description">Neal Yard's Remed...</div>
            </div>


            <div class="deal">
              <img src="images/deal-art.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">20% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£35.99</div>
                <div class="deal-real-amount">RRP: £44.99</div>
              </div>
              <div class="deal-description">Fauna collection...</div>
            </div>



            <div class="deal">
              <img src="images/deal-apple-gin.jpg" class="unexpected-deals-pic" />
              <div class="deal-1">
                <div class="deal-btn">31% off</div>
                <div class="deal-time-limit">Deal</div>
              </div>
              <div class="deal-2">
                <div class="deal-offer-amount">£20.00</div>
                <div class="deal-real-amount">RRP: £28.57</div>
              </div>
              <div class="deal-description">CR & B Apple Gin...</div>
            </div>


          </div>
        </div>

        {/* best-sellers */}

        <div class="best-sellers">
          <h3>Best Sellers in Sports & Outdoors</h3>
          <div class="slides">
            <img src="images/travel-tumbler.png" class="best-sellers-pic" />
            <img src="images/xbox.jpg" class="best-sellers-pic" />
            <img src="images/domestos.jpg" class="best-sellers-pic" />
            <img src="images/table.jpg" class="best-sellers-pic" />
            <img src="images/office-chair.jpg" class="best-sellers-pic" />
            <img src="images/towels.jpg" class="best-sellers-pic" />
            <img src="images/headset.jpg" class="best-sellers-pic" />
            <img src="images/book.jpg" class="best-sellers-pic" />
            <img src="images/travel-tumbler.png" class="best-sellers-pic" />
            <img src="images/xbox.jpg" class="best-sellers-pic" />
            <img src="images/domestos.jpg" class="best-sellers-pic" />
            <img src="images/table.jpg" class="best-sellers-pic" />
            <img src="images/office-chair.jpg" class="best-sellers-pic" />
            <img src="images/towels.jpg" class="best-sellers-pic" />
            <img src="images/headset.jpg" class="best-sellers-pic" />
            <img src="images/book.jpg" class="best-sellers-pic" />
          </div>
        </div>

        {/* four-cards */}

        <div class="four-cards">
          <div class="card-two">
            10 Popular Alexa routines
            <img src="images/alexa.jpg" class="cards-pic" />
            <div class="shop-more">Shop More</div>
          </div>
          <div class="card-two">
            Office Desk
            <img src="images/office-desk.jpg" class="cards-pic" />
            <div class="shop-more">Shop More</div>
          </div>
          <div class="card-two">
            Tablets
            <img src="images/tablets.jpg" class="cards-pic" />
            <div class="shop-more">Shop More</div>
          </div>
          <div class="card-two">
            Extension cords
            <img src="images/extension-cords.jpg" class="cards-pic" />
            <div class="shop-more">Shop More</div>
          </div>
        </div>
      </div>

      {/* copyright */}

      <div class="copyright">
        <img src="images/copyright.png" class="copyright-pic" />
        <div class="copyright-text">&copy; 1996-2024, Amazon.com, Inc. or its affiliates</div>
      </div>

    </div>
  );
}

export default App;
