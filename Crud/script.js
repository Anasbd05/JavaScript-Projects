let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

let mood = "create";
let tmp = "";

// get total

function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "green";
  } else {
    total.innerHTML = "";
    total.style.background =
      "linear-gradient(to right , rgb(159, 0, 0) , rgb(237, 135, 98))";
  }
}

// create product

let dataProducts;
if (localStorage.product != null) {
  dataProducts = JSON.parse(localStorage.product);
} else {
  dataProducts = [];
}

submit.onclick = function () {
  let newProduct = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value.toLowerCase(),
  };

  if (title.value != "" && price.value != "" && category.value != "") {
    if (mood === "create") {
      // set count
      if (newProduct.count > 1) {
        for (let i = 0; i < newProduct.count; i++) {
          dataProducts.push(newProduct);
        }
      } else {
        dataProducts.push(newProduct);
      }
    } else {
      dataProducts[tmp] = newProduct;
      mood = "create";
      submit.innerHTML = "create";
      count.style.display = "flex";
    }
  } else {
  }

  // save localStorage
  localStorage.setItem("product", JSON.stringify(dataProducts));

  cleardata();
  showData();
};
// clear inputs

function cleardata() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}

// read

function showData() {
  getTotal();
  let table = "";

  for (let i = 0; i < dataProducts.length; i++) {
    table += `
         <tr>
            <td>${i + 1}</td>
            <td>${dataProducts[i].title}</td>
            <td>${dataProducts[i].price}</td>
            <td>${dataProducts[i].ads}</td>
            <td>${dataProducts[i].taxes}</td>
            <td>${dataProducts[i].discount}</td>
            <td>${dataProducts[i].category}</td>
            <td>${dataProducts[i].total}</td>
            <td><button onclick = "updateData(${i})" id="update">update</button></td>
            <td><button onclick = "deleteData(${i})" id="delete">delete</button></td>
        </tr>`;
  }

  document.getElementById("tbody").innerHTML = table;
  let btnDelete = document.querySelector(".deleteAll");
  if (dataProducts.length > 0) {
    btnDelete.innerHTML = `<button onclick ='deleteALL()'>Delete All "${dataProducts.length}"</button>`;
  } else {
    btnDelete.innerHTML = "";
  }
}
showData();

// delete item
function deleteData(i) {
  dataProducts.splice(i, 1);
  localStorage.product = JSON.stringify(dataProducts);
  showData();
}

// delete All
function deleteALL() {
  localStorage.clear();
  dataProducts.splice(0);
  showData();
}

// update
function updateData(i) {
  title.value = dataProducts[i].title;
  price.value = dataProducts[i].price;
  ads.value = dataProducts[i].ads;
  taxes.value = dataProducts[i].taxes;
  discount.value = dataProducts[i].discount;
  getTotal();
  count.style.display = "none";
  category.value = dataProducts[i].category;
  submit.textContent = "update";
  mood = "update";
  tmp = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}
// search
let SearchMood = "title";

function getSearchMood(id) {
  let search = document.getElementById("search");

  if (id == "searchTitle") {
    SearchMood = "title";
  } else {
    SearchMood = "category";
  }
  search.placeholder = `Search by ${SearchMood}`;

  search.focus();
  search.value = "";
  showData();
}

function searchData(value) {
  let table = "";
  for (let i = 0; i < dataProducts.length; i++) {
    if (SearchMood === "title") {
      for (let i = 0; i < dataProducts.length; i++) {
        if (dataProducts[i].title.includes(value.toLowerCase())) {
          table += `
        <tr>
           <td>${i}</td>
           <td>${dataProducts[i].title}</td>
           <td>${dataProducts[i].price}</td>
           <td>${dataProducts[i].ads}</td>
           <td>${dataProducts[i].taxes}</td>
           <td>${dataProducts[i].discount}</td>
           <td>${dataProducts[i].category}</td>
           <td>${dataProducts[i].total}</td>
           <td><button onclick = "updateData(${i})" id="update">update</button></td>
           <td><button onclick = "deleteData(${i})" id="delete">delete</button></td>
       </tr>`;
        }
      }
    } else {
      if (dataProducts[i].category.includes(value.toLowerCase())) {
        table += `
        <tr>
           <td>${i}</td>
           <td>${dataProducts[i].title}</td>
           <td>${dataProducts[i].price}</td>
           <td>${dataProducts[i].ads}</td>
           <td>${dataProducts[i].taxes}</td>
           <td>${dataProducts[i].discount}</td>
           <td>${dataProducts[i].category}</td>
           <td>${dataProducts[i].total}</td>
           <td><button onclick = "updateData(${i})" id="update">update</button></td>
           <td><button onclick = "deleteData(${i})" id="delete">delete</button></td>
       </tr>`;
      }
    }
    document.getElementById("tbody").innerHTML = table;
  }
}
// clean data

let darkTheme = document.getElementById("moon");

darkTheme.onclick = function () {
  document.body.classList.toggle("darkTheme");
  if (document.body.classList.contains("darkTheme")) {
    darkTheme.src = "sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    darkTheme.src = "moon.png";
    localStorage.setItem("theme", "light");
  }
};
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("darkTheme");
  darkTheme.src = "sun.png";
} else {
  darkTheme.src = "moon.png";
}
