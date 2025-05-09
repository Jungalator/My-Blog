const edidorsPickSection = document.querySelector(".editors-pick");
const editorsPickContainer = document.createElement("div");
editorsPickContainer.className = "editors-pick__container";
const editorsPicks = JSON.parse(localStorage.getItem("photo-posts")).splice(
  3,
  2
);

function renderEditorsPickPhotos() {
  editorsPicks.forEach((item) => {
    editorsPickContainer.insertAdjacentHTML(
      "beforeend",
      `
      <article class="editors-pick__items">
                <img class="editors-pick__img" src="${
                  item.imgCover
                }" alt="Editors pick ${item.title}"></img>
        <div class="editors-pick__category">${item.category}</div>
        <div class="editors-pick__info-container">
        <p class="editors-pick__date">${item.date || "00.00.00"}</p>
        <h3 class="editors-pick__title">${item.title}</h3>
        <p class="editors-pick__description-cover">${item.descriptionCover}</p>

        </div>

</article>
            `
    );
  });
  return edidorsPickSection.append(editorsPickContainer);
}

export default renderEditorsPickPhotos();
