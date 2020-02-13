import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/burgerMenu";
import "./scripts/ScrollMagic.min";
import "./scripts/scroll";
import "./scripts/swiper";
