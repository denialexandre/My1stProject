// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const year = document.getElementById("year").value;

    // Create a new object list
    const product = new Product(name, price, description, year);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (name === "" || price === "" || description === "" || year === "") {
      ui.showMessage("Please, insert data in all fields!", "danger");
    }

    // Save Activity
    ui.addProduct(product);
    ui.showMessage("Activity added successfully!", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});