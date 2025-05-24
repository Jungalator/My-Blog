const renderAboutPage = () => {
  const aboutSection = document.createElement("section");
  aboutSection.className = "about";

  const imgContainer = document.createElement("div");
  imgContainer.className = "about__img-container";

  const coverImg = document.createElement("img");
  coverImg.src = "public/images/blogit.jpg";
  coverImg.className = "about__cover-img";

  const infoContainer = document.createElement("article");
  infoContainer.className = "about__info";

  const main = document.querySelector(".main");
  main.innerHTML = "";
  let imgSrc = "public/images/my-photo.jpg";
  if (!imgSrc) {
    imgSrc = "public/images/no-image.png";
  }

  infoContainer.insertAdjacentHTML(
    "beforeend",
    ` 
    <ul class="about__info-list list">
     <li class="about__info-item">
        <h3 class="about__info-title">About me</h3>
    <p class="about__info-text">My name is Aleksey, and I am a Junior Frontend JavaScript React developer in training. I built this project using vanilla JavaScript to better master fundamental web development principles and understand how modern apps are constructed "under the hood."</p>
    </li>
        <li class="about__info-item">
    <img class="about__info-img" src="${imgSrc}" alt="Photo founder"/>
    </li>
      <li class="about__info-item"> 
    <p class="about__info-text">I am passionate about creating user-friendly and intuitive interfaces and constantly learning to write clean, readable, and maintainable code. I already have knowledge of modern web technologies and tools and strive for continuous growth. Besides programming, I am interested in self-development and read extensively — this helps me stay motivated and broaden my horizons.</p>
    <p class="about__info-text">I enjoy working on projects that combine creativity and logic, where I can bring ideas to life through code. I believe that a developer's growth is not just about writing code but also about understanding the needs of users, building solutions that make life easier, and staying open to learning new things every day.</p>
    <p class="about__info-text">This blog is one step in my professional growth. During its development, I have:</p>
    <ul class="about__info-inside-list list">
    <li class="about__info-inside-item">improved my understanding and practical use of the SAP concept;</li>
    <li class="about__info-inside-item">mastered working with LocalStorage and API interaction;</li>
    <li class="about__info-inside-item">got acquainted with the capabilities of the Vite bundler and modular app architecture;</li>
    <li class="about__info-inside-item">strengthened my SCSS skills and style organization using the BEM methodology.</li>
    </ul>
    <p class="about__info-text">I am driven by a desire to become a strong developer who can create high-quality and impactful products. I believe that perseverance, curiosity, and a love for learning are the keys to success in this field. My journey has just begun, and I’m excited to keep moving forward, learning, and building.</p>
    <p class="about__info-text">This project has been not only a technical challenge but also an important experience that will help me build more complex and scalable applications in the future.</p>
    <p class="about__info-text">If you are interested in collaboration or want to discuss opportunities, I would be happy to connect and share more about my skills and ideas.</p>
    </li>
    </ul>
    <h3 class="about__info-title">About BLOG!T</h3>
    <p class="about__info-text">This blog is my personal learning project created for my portfolio to showcase my skills and approach to web application development. It features articles on a variety of topics: lifestyle, history, nature, travel, and animals. Thanks to its versatile content, the blog is suitable for a wide audience and demonstrates how information from different areas can be organized effectively.</p>
    <ul class="about__info-inside-list list">
    <li class="about__info-inside-item"><strong>HTML</strong> and <strong>SCSS</strong> for structuring and styling, where I applied BEM methodology and modular SCSS;</li>
    <li class="about__info-inside-item"><strong>Vanilla JavaScript</strong> with the <strong>Handlebars</strong> templating engine for convenient dynamic content generation;</li>
    <li class="about__info-inside-item">Unique post identifiers are created using the <strong>UUID</strong> library, allowing reliable data management;</li>
    <li class="about__info-inside-item">Weather data is fetched through an API using <strong>fetch</strong>, adding interactivity and usefulness to the blog;</li>
    <li class="about__info-inside-item">Posts are stored and managed using <strong>LocalStorage</strong>, simulating server-side storage and demonstrating client-side data handling skills;</li>
    <li class="about__info-inside-item">The project is built with the modern bundler <strong>Vite</strong>, which optimized development speed and app loading performance.</li>
    </ul>
    <p class="about__info-text">During development, I used the SAP (Single-Page Application Architecture Pattern) system, which helped improve my understanding of component separation and interaction within the app. The site design is based on a Figma mockup, allowing me to apply UI/UX skills and follow modern visual communication standards.</p>
    <h3 class="about__info-title">Technologies</h3>
    <ul class="about__icons-list list">
    <li>         <svg class="about__icons-item">
            <use xlink:href="favicon/sprites.svg#html"></use>
        </svg> </li>
    <li>
             <svg class="about__icons-item">
            <use xlink:href="favicon/sprites.svg#sass"></use>
        </svg> </li>
    <li>
             <svg class="about__icons-item">
            <use xlink:href="favicon/sprites.svg#js"></use>
        </svg> </li>
    <li>
             <svg class="about__icons-item">
            <use xlink:href="favicon/sprites.svg#handlebars"></use>
        </svg> </li>
            <li>
             <svg class="about__icons-item">
            <use xlink:href="favicon/sprites.svg#figma"></use>
        </svg> </li>
    <li>
    <svg class="about__icons-item" width="50" height="50" viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#paint0_linear)"/>
<path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#paint1_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
<stop stop-color="#41D1FF"/>
<stop offset="1" stop-color="#BD34FE"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFEA83"/>
<stop offset="0.0833333" stop-color="#FFDD35"/>
<stop offset="1" stop-color="#FFA800"/>
</linearGradient>
</defs>
</svg>
    </li>
    <li>
    <svg class="about__icons-item">
            <use xlink:href="favicon/sprites.svg#github"></use>
        </svg> 
    </li>
    </ul>
        `
  );
  imgContainer.append(coverImg);
  aboutSection.append(imgContainer, infoContainer);
  main.append(aboutSection);
  return main;
};

export default renderAboutPage;
