const userName = localStorage.getItem("userName");
const userPhoneNumber = localStorage.getItem("userPhoneNumber");
const userEmailAddress = localStorage.getItem("userEmailAddress");
const userComments = localStorage.getItem("userComments");

document.getElementById('userName').textContent = userName;
document.getElementById('userPhoneNumber').textContent = userPhoneNumber;
document.getElementById('userEmailAddress').textContent = userEmailAddress;
document.getElementById('userComments').textContent = userComments;