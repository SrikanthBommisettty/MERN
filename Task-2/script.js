var cont = document.querySelector(".container")


function fetchData() {

    fetch("https://fakestoreapi.com/products")
        .then((res) => {
            return res.json()
        }).then((data) => {
            createCard(data)
        })
}

fetchData()

function createCard(data) {


    data.forEach((store) => {
        var div = document.createElement("div")
        div.classList.add("card")
        var subtitle = document.createElement("div");
        subtitle.classList.add("card-subtitle");
        subtitle.innerHTML = store.description;

        var showMoreButton = document.createElement("button");
        showMoreButton.classList.add("read-more-button");
        showMoreButton.textContent = "Read More";

        showMoreButton.addEventListener("click", function () {
            subtitle.classList.toggle("expanded");
            if (subtitle.classList.contains("expanded")) {
                showMoreButton.textContent = "Read Less";
            } else {
                showMoreButton.textContent = "Read More";
            }
        });
       

        div.innerHTML = `
      
        <div class="card-img">
                <div class="img"><img src="${store.image}" alt="image"></div>
            </div>
            <div class="card-title">${store.title}</div>
            <div class="card-footer">
            <div class="card-price"><b>price:-</b> ${store.price}</div>
            <button class="card-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
            </button>
        </div>
            <div class="card-subtitle"><b>Description:-</b> ${store.description} </div>

           
        </div>
        `;

       
        
        div.appendChild(subtitle);
        div.appendChild(showMoreButton);
        cont.appendChild(div);
    });

}

createCard(data);

