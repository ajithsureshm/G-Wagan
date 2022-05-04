
function addTo() {
    let firstname=name1.value
    let secondname=name2.value
    let  mobilenumber=phn.value
    let email=p_email.value
    
    

    let customer={
        firstname,
        secondname,
        mobilenumber,
        email,
        
    }
    localStorage.setItem(customer.firstname,JSON.stringify(customer))
    alert("conform your order")
}