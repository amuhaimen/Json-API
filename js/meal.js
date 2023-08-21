const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerText = "";

  meals.forEach((meal) => {
    // console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
     <div class="col">
          <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"> ${meal.strMeal}</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button onClick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
          Details
           </button>
            </div>
            
          </div>
         
     </div>
     `;
    mealsContainer.appendChild(mealDiv);
  });
};

const searchMeal = () => {
  const searchFeild = document.getElementById("search-feild");
  const searchText = searchFeild.value;
  loadMeals(searchText);
  searchFeild.value = "";
};

const loadMealDetails = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (meal) => {
  document.getElementById("mealDetailsLabel").innerText = meal.strMeal;
  const mealBody = document.getElementById("mealBody");
  mealBody.innerHTML = `
  <img class="img-fluid" src="${meal.strMealThumb}" />
  `;
  console.log(meal);
};

loadMeals("chicken");
