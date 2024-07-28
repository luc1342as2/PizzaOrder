//creating LocalStorage:
function saveToLocalStorage() {
            var firstname = document.getElementById("firstname").value;
            var lastname = document.getElementById("lastname").value;
            var phonenumber = document.getElementById("phonenumber").value;
            var pizzaSize = document.querySelector('input[name="Size_rg"]:checked').value;
            var Typeofcrust = document.querySelector('input[name="Crust_rg"]:checked').value;
            var Typeofpizza = document.getElementById("Pizza").value;
            var Typeofdrinks = document.getElementById("Drinks").value;

            if (firstname && lastname && phonenumber && pizzaSize && Typeofcrust && Typeofpizza && Typeofdrinks) {
                var userData = {
                    firstname: firstname,
                    lastname: lastname,
                    phonenumber: phonenumber,
                    pizzaSize: pizzaSize,
                    Typeofcrust: Typeofcrust,
                    Typeofpizza: Typeofpizza,
                    Typeofdrinks: Typeofdrinks
                };

                // Convert the userData object to a JSON string and store it in local storage
                localStorage.setItem("userData", JSON.stringify(userData));

                alert("Information saved to local storage.");

                
                document.getElementById("myForm").reset();
            } else {
                alert("Please fill in all the fields.");
            }
        }

        function updatePizzaImage() {
            var selectedPizza = document.getElementById("Pizza").value;
            var pizzaImageContainer = document.getElementById("pizzaImageContainer");

            pizzaImageContainer.innerHTML = "";

            var imgElement = document.createElement("img");
            imgElement.width = 300;
            imgElement.height = 200;

            switch (selectedPizza) {
                case "Veg Lovers":
                    imgElement.src = "Images/VegLovers.jpg";
                    imgElement.alt = "Veg Lovers Pizza";
                    break;
                case "Pepperoni":
                    imgElement.src = "Images/Pepperoni.jpg";
                    imgElement.alt = "Pepperoni Pizza";
                    break;
                case "Cheese":
                    imgElement.src = "Images/Cheese.jpg";
                    imgElement.alt = "Cheese Pizza";
                    break;
            }

            pizzaImageContainer.appendChild(imgElement);
        }
