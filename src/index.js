import kcfDefaultStyles from "./stylesheets/style.css";
import kcfTestUIstyles from "./stylesheets/kcf-test-ui.css";
import kcfTestTogglerStyles from "./stylesheets/kcf-test-toggler.css";
import kcfMochaModalStyles from "./stylesheets/mocha-modal.css";

const shadow = (() => {
  const shadowHost = document.createElement("div");
  shadowHost.setAttribute("id", "kcf_test_suite_wrapper");
  shadowHost.style.setProperty("position", "relative", "important");
  shadowHost.style.setProperty("z-index", "9999", "important");
  document.body.appendChild(shadowHost);
  const supportsShadowDOMV = !!HTMLElement.prototype.attachShadow;
  let shadow;
  if (supportsShadowDOMV) {
    shadow = shadowHost.attachShadow({ mode: "open" });
  } else {
    shadow = shadowHost;
  }
  return shadow;
})();
