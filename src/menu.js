import Header from "./header";
import Footer from "./footer";
import createMenuItem from "./card";
import dish from "./tandoori-chicken.jpeg";
import popular from "./popular.svg";
import go from "./go.svg";
import regular from "./regular.svg";
export default function Menu() {
  return `
  <div class="outer">
  ${Header()}
  <div class="menu">
  <div class="popular">
      <div class="menu-heading">
        <span class="menu-icon"><img src="${popular}" alt=""></span>
        <h2>Popular</h2>
      </div>
      <div class="menu-area">${createMenuItem(
        dish,
        "PÃO DE QUEIJO",
        "Chipotle crema",
        "$8.99"
      )}
        ${createMenuItem(
          dish,
          "BOQUERONES & SALSA MACHA",
          "White Spanish anchovies & homemade salsa mocha, served with tortillas",
          "$11.99"
        )}
        ${createMenuItem(
          dish,
          "BONE MARROW",
          "Chintexle, ensalada fresca, grilled sourdough",
          "$18,99"
        )}
        ${createMenuItem(
          dish,
          "SAUSAGE & VEGGIE PARRILLADA ",
          "Selection of sausages, grilled veggies, arepas, queso fundido",
          "$22.99"
        )}</div>
  </div>
  <div class="on-the-go">
  <div class="menu-heading">
  <span class="menu-icon"><img src="${popular}" alt=""></span>
  <h2>On the go</h2>
</div>
      <div class="menu-area">${createMenuItem(
        dish,
        "SHRIMP TACOS",
        "Sauteed shrimp with refried beans, cheese, avocado, and chipotle cream",
        "$15.99"
      )}
        ${createMenuItem(
          dish,
          "Tandoori Chicken",
          "Great taste of Kabul",
          "$4.99"
        )}
        ${createMenuItem(
          dish,
          "TUNA TOSTADAS",
          "Habanero ash mayo, sesame oil, scallions, watermelon, mint",
          "$19.99"
        )}
        ${createMenuItem(
          dish,
          "DUCK CONFIT TACOS",
          "Chihuahua cheese, avocado, cilantro, pickled onions",
          "$14.99"
        )}</div>
  </div>
  <div class="regular">
  <div class="menu-heading">
  <span class="menu-icon"><img src="${popular}" alt=""></span>
  <h2>Regular</h2>
</div>
      <div class="menu-area">${createMenuItem(
        dish,
        "PÃO DE QUIJO BURGER",
        "Grass-fed burger mixed with caramelized onions topped with cilantro pesto",
        "$21.99"
      )}
        ${createMenuItem(
          dish,
          "PICANHA",
          "10 oz of grass-fed steak with farofa",
          "$34.99"
        )}
        ${createMenuItem(
          dish,
          "LOCAL STEELHEAD TROUT",
          "Chile-tahini sauce, arugula, almonds, sprinkled with Basmati rice",
          "$28.99"
        )}
        ${createMenuItem(
          dish,
          "GRILLED BABY EGGPLANT",
          "Red rice, lentil, dates, roasted cauliflower",
          "$24.99"
        )}</div>
  </div>
  <div class="cart" id="cart">
  <h2>Cart Items</h2>
  <span class="close-cart" id="close-cart">X</span>
  </div>
</div>
  ${Footer()}
</div>`;
}
