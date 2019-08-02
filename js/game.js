var images = {};
function addAsset(name, src) {
  assetsLeft++;
  images[name] = new Image();
  images[name].onload = onAssetLoaded;
  images[name].src = src;
}