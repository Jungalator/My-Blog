const main = document.querySelector(".main");

function renderModalAddArticle() {
  const modal = document.createElement("div");
  modal.className = "modal";
  const modalContainer = document.createElement("article");
  modalContainer.className = "modal__container";

  const closeBtn = document.createElement("button");
  closeBtn.className = "modal__close-btn";
  closeBtn.insertAdjacentHTML(
    "beforeend",
    `
  <svg class="modal__close-svg">
  <use xlink:href="favicon/sprites.svg#close"></use>
  </svg>
  `
  );

  modalContainer.insertAdjacentHTML(
    "beforeend",
    `
  <h3 class="modal__title">Article info</h3>
    <form id="add-form" method="POST">
    <div class="modal__input-container">
   <label class="modal__input-label">Title</label>
    <input class="modal__input" name="title"></input>
    </div>

        <div class="modal__input-container">
   <label class="modal__input-label">Description</label>
    <textarea  rows="5" cols="33"class="modal__textarea" name="description"></textarea>
    </div>

        <div class="modal__input-container">
   <label class="modal__input-label">Cover description</label>
    <textarea  rows="5" cols="33" class="modal__textarea" name="subDescription"></textarea>
    </div>

        <div class="modal__input-container">
   <label class="modal__input-label">Summary description</label>
    <textarea  rows="5" cols="33" class="modal__textarea"  name="summaryDescription"></textarea>
    </div>

        <div class="modal__input-container">
   <label class="modal__input-label">Image cover URL</label>
    <input class="modal__input" name="imgCover"></input>
    </div>

        <div class="modal__input-container">
   <label class="modal__input-label">Img1 URL</label>
    <input class="modal__input" name="img1"></input>
    </div>

        <div class="modal__input-container">
   <label class="modal__input-label">Img2 URL</label>
    <input class="modal__input" name="img2"></input>
    </div>

        <div class="modal__categories-container">

        <div class="modal__checkbox-container">
   <label class="modal__category-label">Adventure</label>
    <input class="modal__category-checkbox" type="checkbox" name="Adventure"/>
</div>

<div class="modal__checkbox-container">
       <label class="modal__category-label">Lifestyle</label>
    <input class="modal__category-checkbox" type="checkbox" name="Lifestyle"/>
</div>

<div class="modal__checkbox-container">
       <label class="modal__category-label">History</label>
    <input class="modal__category-checkbox" type="checkbox" name="History"/>
</div>

<div class="modal__checkbox-container">
       <label class="modal__category-label">Nature</label>
    <input class="modal__category-checkbox" type="checkbox" name="Nature"/>
</div>

    <div class="modal__checkbox-container">
       <label class="modal__category-label">Animals</label>
    <input class="modal__category-checkbox" type="checkbox" name="Animals"/>
</div>
    </div>

    <hr>

   <h3 class="modal__title">Author Info</h3>
       <div class="modal__input-container">
   <label class="modal__input-label">Name</label>
    <input class="modal__input" name="name"></input>
    </div>
           <div class="modal__input-container">
   <label class="modal__input-label">Surname</label>
    <input class="modal__input" name="surname"></input>
    </div>
           <div class="modal__input-container">
   <label class="modal__input-label">Avatar URL</label>
    <input class="modal__input" name="avatar"></input>
    </div>
           <div class="modal__input-container">
   <label class="modal__input-label">Profession</label>
    <input class="modal__input" name="profession"></input>
    </div>
 <button class="modal__add-article">Add Article</button>
    </form>
    `
  );

  modal.append(modalContainer);
  modalContainer.prepend(closeBtn);
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open-modal");
    document.body.classList.remove("overflow-hidden");
    document.documentElement.classList.remove("overflow-hidden");
  });
  return modal;
}

export default renderModalAddArticle;
