import "./Navbar.css";
export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="Logo">
<h2>Movies</h2>
        </div>
        <div>
        <input type="text" placeholder="search" className="input-search"/>
        </div>
        <div className="liststyle">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Movies</a>
            </li>
            <li>
              <a href="/">Fav</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
