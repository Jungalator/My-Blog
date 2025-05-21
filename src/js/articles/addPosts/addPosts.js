import { v4 as uuidv4 } from "uuid";
import { setItemLocalStorage } from "../../localStorage/localStorage";
import { log } from "handlebars/runtime";
import renderArticlePage from "../allPosts";
function addPost(allPosts) {
  const form = document.querySelector("#add-form");
  const date = new Date();
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth;
  const year = date.getFullYear();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const categories = [
      form.Adventure,
      form.Lifestyle,
      form.History,
      form.Nature,
      form.Animals,
    ];

    const actualCategories = categories
      .filter((cat) => {
        if (cat.checked === true) return cat;
      })
      .map((item) => item.name);

    const newPost = {
      title: form.title.value.trim(),
      date: `${day}.${month}.${year}`,
      description: form.description.value.trim(),
      subDescription: form.subDescription.value.trim(),
      summaryDescription: form.summaryDescription.value.trim(),
      imgCover: form.imgCover.value.trim(),
      img1: form.img1.value.trim(),
      img2: form.img2.value.trim(),
      id: uuidv4(),
      category: actualCategories,
      author: {
        name: form.name.value.trim(),
        surname: form.surname.value.trim(),
        avatar: form.avatar.value.trim(),
        profession: [form.profession.value.trim()],
      },
    };

    allPosts.push(newPost);
    setItemLocalStorage("posts", allPosts);
    form.reset();
    document.querySelector(".modal").classList.remove("open-modal");
    document.body.classList.remove("overflow-hidden");
    document.documentElement.classList.remove("overflow-hidden");
    renderArticlePage(allPosts);
  });
}

export default addPost;
