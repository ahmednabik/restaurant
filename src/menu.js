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
        "Tandoori Chicken",
        "Great taste of Kabul",
        "$4.99"
      )}
        ${createMenuItem(
          dish,
          "Tandoori Chicken",
          "Great taste of Kabul",
          "$4.99"
        )}
        ${createMenuItem(
          dish,
          "Tandoori Chicken",
          "Great taste of Kabul",
          "$4.99"
        )}
        ${createMenuItem(
          dish,
          "Tandoori Chicken",
          "Great taste of Kabul",
          "$4.99"
        )}</div>
  </div>
  <div class="on-the-go">
  <div class="menu-heading">
  <span class="menu-icon"><img src="${popular}" alt=""></span>
  <h2>On the go</h2>
</div>
      <div class="menu-area">${createMenuItem(
        dish,
        "Tandoori Chicken",
        "Great taste of Kabul",
        "$4.99"
      )}
        ${createMenuItem(
          dish,
          "Tandoori Chicken",
          "Great taste of Kabul",
          "$4.99"
        )}
        ${createMenuItem(
          dish,
          "Tandoori Chicken",
          "Great taste of Kabul",
          "$4.99"
        )}
        ${createMenuItem(
          dish,
          "Tandoori Chicken",
          "Great taste of Kabul",
          "$4.99"
        )}</div>
  </div>
  <div class="regular">
  <div class="menu-heading">
  <span class="menu-icon"><img src="${popular}" alt=""></span>
  <h2>Regular</h2>
</div>
      <div class="menu-area">${createMenuItem(
        dish,
        "Tandoori Chicken",
        "Great taste of Kabul",
        "$4.99"
      )}
        ${createMenuItem(
          dish,
          "Tandoori Chicken",
          "Great taste of Kabul",
          "$4.99"
        )}
        ${createMenuItem(
          dish,
          "Tandoori Chicken",
          "Great taste of Kabul",
          "$4.99"
        )}
        ${createMenuItem(
          dish,
          "Tandoori Chicken",
          "Great taste of Kabul",
          "$4.99"
        )}</div>
  </div>

</div>
  ${Footer()}
</div>`;
}
