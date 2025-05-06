import postsJson from "../../../posts.json";

const postsSection = document.querySelector(".posts");

const filterButtonsContainer = document.createElement("div");
filterButtonsContainer.className = "posts__filter-container";

const filterButtonsList = document.createElement("ul");
filterButtonsList.className = "posts__filter-list";
filterButtonsList.classList.add("list");

const allCategoriesBtn = document.createElement("button");
allCategoriesBtn.className = "posts__filter-btn";
allCategoriesBtn.dataset.allCategoriesBtn = "";
allCategoriesBtn.textContent = "All";
filterButtonsList.prepend(allCategoriesBtn);

const postsArr = [];
postsArr.push(...postsJson);

function renderFilterButton() {
  let newArr = [...new Set(postsArr.flatMap((element) => element.category))];
  newArr.forEach((item) => {
    filterButtonsList.insertAdjacentHTML(
      "beforeend",
      `
        <li class="posts__filter-item"><button class="posts__filter-btn">${item}</button></li>
        `
    );
  });

  filterButtonsContainer.append(filterButtonsList);

  return postsSection.append(filterButtonsContainer);
}

export default renderFilterButton();
