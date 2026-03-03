const form = document.getElementById("inquiryForm");
const tableBody = document.querySelector("#inquiryTable tbody");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const product = document.getElementById("product").value.trim();
    const setPrice = document.getElementById("setPrice").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const productError = document.getElementById("productError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    productError.textContent = "";
    messageError.textContent = "";

    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }

    if (product === "") {
        productError.textContent = "Product name is required";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Message is required";
        isValid = false;
    }

    if (isValid) {
        const newRow = tableBody.insertRow();

        newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${product}</td>
      <td>${setPrice}</td>
      <td>${message}</td>
    `;

        form.reset();
    }
});
