// //error handle
// document.getElementById('error-msg').style.display = 'none';


//section 1 show the food iteams
const searchFood = () =>{
    const searchBox = document.getElementById('searchBox');
        const searchText = searchBox.value ;
        //clear data
        searchBox.value = '';
        // document.getElementById('error-msg').style.display = 'none';
        //load data
        if(searchText == ''){
        alert('please try again later ')
    }
//jodi user num dai tar error handeling
    else if(!isNaN(searchText)){
            alert('please try again later ')
        }
        
        else{
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
            fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data.meals))
        }
    }
const displayMeals = meals =>{
    console.log(meals)
    const foods = document.getElementById('foods')
        //stop repet eror handle : by clear search box
        foods.textContent = '';
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <h6>${meal.strCategory}</h6>
                    <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
            </div>
        </div>
        `;
        foods.appendChild(div)
    });
   
}
//section 2 : show detaial by clicking each card
const loadMealDetail = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetail(data.meals[0]))
}

const displayDetail = meals =>{
    console.log(meals);
    const foodDetail = document.getElementById('food-detail');
    foodDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meals.strMeal}</h5>
          <p class="card-text">${meals.strInstructions.slice(0,150)}</p>
          <a href="${meals.strYoutube}" class="btn btn-primary">Link</a>
        </div>
    `;
    foodDetail.appendChild(div);
}