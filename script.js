
let capitalize = 

function customerToHtml(customer) {
    return `
    <div class="profile">
        <div class=" profileImg">
            <img src="${customer.picture.large}">
        </div>
        <div class="profileName">${customer.name.first} ${customer.name.last}</div>
        <div class="profileEmail">${customer.email}</div>
        <div class="profileAdd1">${customer.location.street}</div>
        <div class="profileAdd2">${customer.location.city}, ${customer.location.state}, ${customer.location.postcode}</div>
        <div class="profileDateOfBirth">${customer.dob}</div>
        <div class="profileSignUpDate">${customer.registered}</div>
    </div>
    `
}

document.querySelector("#database").innerHTML = customers.map(customerToHtml).join("\n")
