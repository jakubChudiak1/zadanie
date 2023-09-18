const hamburger = document.querySelector(".hamburger");
const menuRight = document.querySelector(".menu-right");
const checkBoxes = document.getElementsByTagName("input");
const locationText = document.getElementById("location-text");
const clearInput = document.getElementById("cancel");
const estateItems = document.querySelectorAll(".estate-item");
const estatesGrid = document.querySelector(".estates-grid");
const filterCheckboxes = document.querySelectorAll(".checkbox");
const filtersCountText = document.querySelector("#filter-count");
const estateCountText = document.querySelector("#estates-result");
const filterSelects = document.querySelectorAll(".filter-select");
const resetFilters = document.querySelector("#reset-filters");
const minPrice = document.querySelector("#min-price");
const maxPrice = document.querySelector("#max-price");
const minSize = document.querySelector("#min-size");
const maxSize = document.querySelector("#max-size")
const sortSelect = document.querySelector("#sort-by");
const bedroom = document.getElementById("bedroom");
const bathroom = document.getElementById("bathroom");
const selectedFilters = {}
let filtersCount = 0;
let estatesCount = 0; 

let clicked = false;
hamburger.addEventListener("click",()=>{
    if(clicked){
        menuRight.style.left = "-150%";
        clicked = false;
    }else{
        menuRight.style.left = "auto";
        menuRight.style.backgroundColor = "white";
        
        clicked = true;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].addEventListener("click", function () {
        const labels = document.querySelector('label[for="' + this.id + '"]');
        if (this.checked) {
          labels.style.color = "#1666d9";
        } else {
          labels.style.color = "#bdbdbd";
        }
      });
      console.log(checkBoxes[i]);
    }
});  
  



document.addEventListener("DOMContentLoaded", function () {
    filterCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", applyFilters);
        console.log("click");
    });
    
    filterSelects.forEach((select) => {
        select.addEventListener("change", applyFilters);
    });
    
    minPrice.addEventListener("change", applyFilters);
    maxPrice.addEventListener("change", applyFilters);
    
    function applyFilters() {
        const selectedFilters = {
            property_type: [],
            style_of_home: [],
            accessibility_features: [],
            bedroom: bedroom.value,
            bathroom: bathroom.value,
            min_price: minPrice.value,
            max_price: maxPrice.value,
            min_size: minSize.value,
            max_size: maxSize.value,
        };

        filtersCount = 0;
        filterCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                const filterType = checkbox.getAttribute("data-filter");
                const filterValue = checkbox.value;
                selectedFilters[filterType].push(filterValue);
                filtersCount++;
            }
        });


        filtersCountText.textContent = filtersCount;
    
        estateItems.forEach((estateItem) => {
            const propertyType = estateItem.getAttribute("data-property_type");
            const styleOfHome = estateItem.getAttribute("data-style_of_home");
            const accessibilityFeatures = estateItem.getAttribute("data-accessibility_features");
            const bedroomCount = estateItem.getAttribute("data-bedroom");
            const bathroomCount = estateItem.getAttribute("data-bathroom");
            const price = parseFloat(estateItem.getAttribute("data-price"));
            const size = parseFloat(estateItem.getAttribute("data-size"));

            const meetsPropertyType = selectedFilters.property_type.length === 0 || selectedFilters.property_type.includes(propertyType);
            const meetsStyleOfHome = selectedFilters.style_of_home.length === 0 || selectedFilters.style_of_home.includes(styleOfHome);
            const meetsAccessibilityFeatures = selectedFilters.accessibility_features.length === 0 || selectedFilters.accessibility_features.includes(accessibilityFeatures);
            const meetsBedroomCount = selectedFilters.bedroom === "" || parseInt(selectedFilters.bedroom) === parseInt(bedroomCount);
            const meetsBathroomCount = selectedFilters.bathroom === "" || parseInt(selectedFilters.bathroom) === parseInt(bathroomCount);
            const meetsPriceRange =
                (selectedFilters.min_price === "" || price >= parseFloat(selectedFilters.min_price)) &&
                (selectedFilters.max_price === "" || price <= parseFloat(selectedFilters.max_price));   
            const meetsSizeRange =
                (selectedFilters.min_size === "" || size >= parseFloat(selectedFilters.min_size)) &&
                (selectedFilters.max_size === "" || size <= parseFloat(selectedFilters.max_size));

            if (meetsPropertyType && meetsStyleOfHome && meetsAccessibilityFeatures && meetsBedroomCount && meetsBathroomCount && meetsPriceRange && meetsSizeRange) {
                estateItem.style.display = "block";
            } else {
                estateItem.style.display = "none";
            }
        });
    
        const visibleEstates = Array.from(estateItems).filter((estateItem) => estateItem.style.display !== "none");
        estateCountText.textContent = visibleEstates.length;

        
    }
});

document.addEventListener("DOMContentLoaded", function () {
    resetFilters.addEventListener("click", () => {
        filtersCount = 0;
        filtersCountText.textContent = "0";
        maxPrice.value = "";
        minPrice.value = "";
        bedroom.value = "";
        bathroom.value = "";
        maxSize.value = "";
        minSize.value = "";
        estateCountText.textContent = estateItems.length;

        estateItems.forEach((estate)=>{
            estate.style.display = "block";
        });

        filterCheckboxes.forEach((checkbox) => {
            checkbox.checked = false;
            const labels = document.querySelector('label[for="' + checkbox.id + '"]');
            labels.style.color = "#bdbdbd";
        });
    });
});

sortSelect.addEventListener("change", () => {
    const selectedValue = sortSelect.value;

    const estateItemsArray = Array.from(estateItems);
    estateItemsArray.sort((a, b) => {
        const createdA = new Date(a.getAttribute("data-created"));
        const createdB = new Date(b.getAttribute("data-created"));

        if (selectedValue === "ascending") {
            return createdA - createdB;
        } else {
            return createdB - createdA;
        }
    });


    while (estatesGrid.firstChild) {
        estatesGrid.removeChild(estatesGrid.firstChild);
    }


    estateItemsArray.forEach((estateItem) => {
        estatesGrid.appendChild(estateItem);
    });

});




