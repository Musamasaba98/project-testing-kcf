import kcfDefaultStyles from "./stylesheets/style.css?inline";
import kcfTestUIStyles from "./stylesheets/kcf-test-ui.css?inline";
import kcfTestTogglerStyles from "./stylesheets/kcf-test-toggler.css?inline";
import kcfMochaModalStyles from "./stylesheets/mocha-modal.css?inline";

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
const shadowStyle = document.createElement("style");
shadowStyle.innerHTML =
  kcfDefaultStyles +
  kcfTestUIStyles +
  kcfTestTogglerStyles +
  kcfMochaModalStyles;
shadow.appendChild(shadowStyle);
const KCFToggle = document.createElement("div");
KCFToggle.className = "KCF_test_ui";
