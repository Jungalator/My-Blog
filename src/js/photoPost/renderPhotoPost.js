import photoPostsJson from "../../../photo-posts.json";

const photoPostContainer = document.createElement("article");
photoPostContainer.className = "photo__post-container";
localStorage.setItem("photo-posts", JSON.stringify(photoPostsJson));

const photoPost = JSON.parse(localStorage.getItem("photo-posts"))[3];

function renderPhotoPost({
  title,
  descriptionCover,
  date,
  category,
  imgCover,
}) {
  photoPostContainer.insertAdjacentHTML(
    "beforeend",
    `
        <img class="photo__img" src="${imgCover}" alt="Photo post ${title}"></img>

        <div class="photo__info-container">

        <div class="photo__category">${category}</div>
        <h3 class="photo__title">${title}</h3>
        <p class="photo__date">${date || "00.00.00"}</p>
        <hr class="photo__decor-line">
        <p class="photo__description-cover">${descriptionCover}</p>

        </div>

        `
  );
  return document.querySelector(".photo").append(photoPostContainer);
}

export default renderPhotoPost(photoPost);
