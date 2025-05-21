import photoPostsJson from "../../../photo-posts.json";
import {
  setItemLocalStorage,
  getItemLocalStorage,
} from "../localStorage/localStorage";
const main = document.querySelector(".main");

const photoSection = document.createElement("section");
photoSection.className = "photo";

const photoPostContainer = document.createElement("article");
photoPostContainer.className = "photo__post-container";
setItemLocalStorage("photo-posts", photoPostsJson);

const photoPostArr = getItemLocalStorage("photo-posts");
const randomIndexPhotoPost = parseInt(Math.random() * photoPostArr.length);
const photoPost = photoPostArr.find((item, index) => {
  if (index === randomIndexPhotoPost) {
    return item;
  }
});

function renderPhotoPost() {
  photoPostContainer.insertAdjacentHTML(
    "beforeend",
    `
        <img class="photo__img" src="${photoPost.imgCover}" alt="Photo post ${
      photoPost.title
    }"></img>

        <div class="photo__info-container">

        <div class="photo__category">${photoPost.category[0]}</div>
        <h3 class="photo__title">${photoPost.title}</h3>
        <p class="photo__date">${photoPost.date || "00.00.00"}</p>
        <hr class="photo__decor-line">
        <p class="photo__description-cover">${photoPost.descriptionCover}</p>

        </div>

        `
  );
  photoSection.append(photoPostContainer);
  return photoSection;
}

export default renderPhotoPost;
