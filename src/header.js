import logo from "./Shinwari-logo.png";
function Header() {
  const headerDiv = `<div class="header">
  <div class="logo"><img src="${logo}" alt=""></div>
  <div class="nav">
      <ul>
      <li class="nav-item"><a href="#">Home</a></li>
      <li class="nav-item"><a href="#">Menu</a></li>
      <li class="nav-item"><a href="#">Locations</a></li>
      </ul>
  </div>
</div>`;
  return headerDiv;
}

export default Header;
