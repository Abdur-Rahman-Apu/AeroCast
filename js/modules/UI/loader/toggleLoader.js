import { insertAdjacentHtml, selectElm } from "../../utilities/domTask.js";

export default function toggleLoader({ state, parent, pos }) {
  //  state: true -> show loader,  false -> hide loader
  const loaderHtml = `
  <div class="loading-container">
        <img src="./assets/images/loading.png" alt="This image is indicating the loader">
        <div class="loading-text">
            <p>Loading</p> <span class="loading-dots">. . .</span>
        </div>
    </div>
 `;

  if (state) {
    insertAdjacentHtml(parent, loaderHtml, pos);
  } else {
    selectElm(".loading-container").remove();
  }
}
