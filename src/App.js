import "./styles.css";
import "./model.css";
import "./navbar.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductCard />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-pad">
      <a
        className="App-link"
        href="javascript(0);"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pradeep Raghavan
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="javascript(0);">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript(0);">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="javascript(0);"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="javascript(0);">
                Action
              </a>
              <a className="dropdown-item" href="javascript(0);">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="javascript(0);">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="javascript(0);">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function ProductCard() {
  return (
    <div className="product-card">
      <div className="badge">Hot</div>
      <div className="product-tumb">
        <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">Women,bag</span>
        {/* <h4><a href="">Women leather bag</a></h4> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          possimus nostrum!
        </p>
        <div className="product-bottom-details">
          <div className="product-price">
            <small>$96.00</small>$230.99
          </div>
          <div className="product-links">
            {/* <a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
