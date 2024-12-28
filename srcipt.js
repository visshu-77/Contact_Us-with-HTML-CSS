document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('dataInput').value;
    const Phone_Number = document.getElementById('dataInput1').value;
    const Email_Address = document.getElementById('dataInput2').value;
    const comments = document.querySelector('textarea').value;

    localStorage.setItem('userName', name);
    localStorage.setItem('userComments', comments);
    localStorage.setItem('userPhoneNumber',Phone_Number);
    localStorage.setItem('userEmailAddress',Email_Address);

    window.location.href = 'cart.html';
});
