import { getAds } from "../api.js";


const renderAd = (ad) => {
  let el = document.createElement("div");
  el.innerHTML = `
  <div class="adv-container">
  <div class="row adv-header">
    <img class="adv-avatar" src="./img/avatar.png" alt="Avatar pic">
    <h5 class="title5">${ad['username']}</h5>
  </div>
  <img class="adv-img" src="./img/advr.jpg" alt="Advertisment image">
  <div class="adv-content">
    <div class="row left adv-location">
      <i class="fa fa-map-marker location-icon"></i>
      <p class="body">${ad['location']}</p>
    </div>
    <h3 class="title4">${ad['title']}</h3>
    <p class="body">${ad['content']}  <a href="./adv.html" class="link">Read more>></a></p>
    <p class="info adv-date">${ad['creation_date']}</p>
  </div>
  </div>
  `;

  return el;
};

const renderAds = () => {
  getAds().then(res => {
    if (!res.ok) return;
    return res.json()
  })
  .then(ads => {
    const root = document.getElementsByClassName("advs")[0];
    const adsRendered = ads.map(renderAd);

    adsRendered.forEach((ad) => root.appendChild(ad));
  });
};

renderAds();