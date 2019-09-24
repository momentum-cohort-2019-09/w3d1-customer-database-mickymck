// const capitalize = string => string[0].toUpperCase() + string.slice(1)

// similar to this, but use indexOf to find the location of the first character that is not a number (NaN)


function customerToHtml(customer) {
    return `
    <div class="profile">
        <div class=" imgDiv">
            <img src="${customer.picture.large}" class="profileImg alt="${(customer.name.first)} ${(customer.name.last)}">
        </div>
        <div class="profileName">${(customer.name.first)} ${(customer.name.last)}</div>
        <div class="profileEmail">${customer.email}</div>
        <div class="profileAdd1">${(customer.location.street)}</div>
        <div class="profileAdd2">${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}</div>
        <div class="profileDateOfBirth">DOB: ${moment(customer.dob).format('ll')}</div>
        <div class="profileSignUpDate">Customer since: ${moment(customer.registered).format('ll')}</div>
    </div>
    `

}

document.querySelector("#database").innerHTML = customers.map(customerToHtml).join("\n")
