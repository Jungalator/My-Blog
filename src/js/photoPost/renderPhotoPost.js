import photoPostsJson from "../../../photo-posts.json";
const main = document.querySelector(".main");

const photoSection = document.createElement("section");
photoSection.className = "photo";

const photoPostContainer = document.createElement("article");
photoPostContainer.className = "photo__post-container";
localStorage.setItem("photo-posts", JSON.stringify(photoPostsJson));

const photoPost = JSON.parse(localStorage.getItem("photo-posts"))[3];

function renderPhotoPost() {
  photoPostContainer.insertAdjacentHTML(
    "beforeend",
    `
        <img class="photo__img" src="${photoPost.imgCover}" alt="Photo post ${
      photoPost.title
    }"></img>

        <div class="photo__info-container">

        <div class="photo__category">${photoPost.category}</div>
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
