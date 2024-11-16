let accessKey = "1LbjkCirnjX_U_dLQOVUgTPsxT00NXSYSb0o52IDsfE";
let searchForm = document.getElementById("search-form");
let searchbox = document.getElementById("searchBox");
let searchResult = document.getElementById("searchResult");
let showMore = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchbox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;

    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
showMore.addEventListener("click", () => {
  page++;
  searchImages();
});
