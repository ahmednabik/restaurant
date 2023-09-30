import Header from "./header";
import Footer from "./footer";
export default function Home() {
  return `<div class="outer">
  ${Header()}
  <div class="main-area">
      <div class="hero">
          <h1>Shinwari </h1>
          <h1>Cafe</h1>
      </div>
      <div class="text-section">
          <p>Inspired by the hearth of Latin American fincas.
              Built on the principle that food tastes better when shared.
              For the vibrant community of Fort Greene.</p>
      </div>
      <div class="first-image-text-section">
          <div class="first-image-section"><img src="" alt=""></div>
          <div class="first-text-section">
              <p>Enjoy our current offering of delicious dishes, made with local ingredients sourced from our friends
                  and neighbors.</p>
              <button class="nav-item">Menu</button>
          </div>
      </div>
      <div class="second-image-text-section">
          <div class="second-text-section">
              <p>Enjoy our current offering of delicious dishes, made with local ingredients sourced from our friends
                  and neighbors.</p>
              <button class="nav-item">Menu</button>
          </div>
          <div class="second-image-section"><img src="" alt=""></div>
      </div>
  </div>
  ${Footer()}
</div>`;
}
