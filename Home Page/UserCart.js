let alooParatha = document.querySelector("#Aloo paratha");
let CartBtn = document.querySelector(".viewcart");
//let contactBtn = document.querySelector("#About");
let counter = document.querySelectorAll(".counter");
let cart = document.querySelector("#my-cart");
let AlooParatha_count = 0;
let maggi_count = 0;
let chowmine_count = 0;
let vegroll_count = 0;
let Tea_count = 0;
let coffee_count = 0;
let cone_count = 0;
let creamBar_count = 0;
let username = "";

fetch('http://localhost:5000/api/hero')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            username = item.username;
        });
    })
    .catch(error => console.error('Error fetching data:', error));

let count = 0;

let incbtn = document.querySelectorAll(".inc");
let decbtn = document.querySelectorAll(".dec");

//allooparatha access
let alooincrement = document.querySelector("#incrementButton2");
let alooDecrement = document.querySelector("#decrementButton2");



// maggi access
let maggi_increment = document.querySelector("#incrementButton3");
let maggi_Decrement = document.querySelector("#decrementButton3");


//chowmien access 
let chowmien_increment = document.querySelector("#incrementButton4");
let chowmien_Decrement = document.querySelector("#decrementButton4");


//vegRoll access 
let Veg_Roll_increment = document.querySelector("#incrementButton");
let Veg_Roll_Decrement = document.querySelector("#decrementButton");

//tea access 
let Tea_increment = document.querySelector("#incrementButton10");
let Tea_Decrement = document.querySelector("#decrementButton10");

//coffee access
let coffee_increment = document.querySelector("#incrementButton11");
let coffee_Decrement = document.querySelector("#decrementButton11");

//cone acess
let cone_increment = document.querySelector("#incrementButton12");
let cone_Decrement = document.querySelector("#decrementButton12");

//cream-bar access
let cream_bar_increment = document.querySelector("#incrementButton13");
let cream_bar_Decrement = document.querySelector("#decrementButton13");



//cart button show

alooDecrement.addEventListener('click', () => {
    CartBtn.style.display = "inline";
    AlooParatha_count--;
});

alooincrement.addEventListener("click", () => {
    CartBtn.style.display = "inline";
    AlooParatha_count++;
});

//
maggi_Decrement.addEventListener('click', () => {
    CartBtn.style.display = "inline";
    maggi_count--;

});

maggi_increment.addEventListener("click", () => {
    CartBtn.style.display = "inline";
    maggi_count++;

});
//
chowmien_Decrement.addEventListener('click', () => {
    CartBtn.style.display = "inline";
    chowmine_count--;
});

chowmien_increment.addEventListener("click", () => {
    CartBtn.style.display = "inline";
    chowmine_count++;
});
//

//
Veg_Roll_Decrement.addEventListener('click', () => {
    CartBtn.style.display = "inline";
    vegroll_count--;
});

Veg_Roll_increment.addEventListener("click", () => {
    CartBtn.style.display = "inline";
    vegroll_count++;
});
//
//
Tea_Decrement.addEventListener('click', () => {
    CartBtn.style.display = "inline";
    Tea_count--;
});

Tea_increment.addEventListener("click", () => {
    CartBtn.style.display = "inline";
    Tea_count++;
});
//
//
coffee_Decrement.addEventListener('click', () => {
    CartBtn.style.display = "inline";
    coffee_count--;
});

coffee_increment.addEventListener("click", () => {
    CartBtn.style.display = "inline";
    coffee_count++;
});
//
//
cone_Decrement.addEventListener('click', () => {
    CartBtn.style.display = "inline";
    cone_count--;
});

cone_increment.addEventListener("click", () => {
    CartBtn.style.display = "inline";
    cone_count++;
});
//

//
cream_bar_Decrement.addEventListener('click', () => {
    CartBtn.style.display = "inline";
    creamBar_count--;
});

cream_bar_increment.addEventListener("click", () => {
    CartBtn.style.display = "inline";
    creamBar_count++;
});



incbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        count++;
        CartBtn.innerText = `Items added: ${count}`;
    });
});

decbtn.forEach(btn => {
    btn.addEventListener("click", () => {
        count--;
        CartBtn.innerText = `Items added: ${count}`;

        if (count == 0) {
            CartBtn.style.display = "none";
        }
    });
});

cart.addEventListener("click", () => {
    window.location.href = "trial2.html";

})
const Handlecart = async (e) => {
    e.preventDefault(); // to get posted before get refreshed

    try {
        // const username = document.querySelector("#username").value;

        const response = await fetch(`http://localhost:5000/api/Home`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "Username": username,
                "AlooParatha": AlooParatha_count,
                "Maggi": maggi_count,
                "Chowmine": chowmine_count,
                "Vegroll": vegroll_count,
                "Tea": Tea_count,
                "Coffee": coffee_count,
                "Cone": cone_count,
                "icecreambar": creamBar_count,
            }),
        });

        if (response.ok) {
            // If login is successful, you might want to perform actions here
            // For example, update state or navigate to another page
            // setlogin({
            //    username: "",
            // });
            // navigate("/Home");
            console.log("Order Placed");
            alert("order placed");

            // Redirect to another page after successful login
            // window.location.href = "https://github.com/PARTHSHARMA4010/HackTheChain";
            window.location.href = "trial2.html";
        } else {
            // If login fails, show an alert
            alert("Order not placed");
        }

        console.log(await response.json());
    } catch (error) {
        console.log("Login", error);
    }
};


CartBtn.addEventListener("click", Handlecart);





