import Header from "./header";
import Footer from "./footer";
import createMenuItem from "./card";
import dish from "./tandoori-chicken.jpeg";
export default function Menu() {
  return `
<div class="outer">
    ${Header()}
   
    <div class="location-area">
    
        <div class="location-card">
            <div class="location-image"></div>
            <h3>Address | 123 Main St, Anytown, CA 90210</h3>
            <p><strong>Timing</strong> | Mon – Sun, 6 am – 11:30 pm</p>
            <Button class="nav-item">Menu</Button>
        </div>
        <div class="location-card">
            <div class="location-image"></div>
            <h3>Address | 456 Elm St, Springfield, IL 62701</h3>
            <p><strong>Timing</strong> | Mon – Sun, 6 am – 11:30 pm</p>
            <Button class="nav-item">Menu</Button>
        </div>
    </div>
    ${Footer()}
</div>`;
}
