function checkPassword()
{
        let password1 = document.getElementById("pass1").value;
        let password2 = document.getElementById("pass2").value;
        if(password1.length < 8 || password2.lenth < 8)
        {
                alert("The passwords are not at least 8 characters long");
        }
        else if(password1 != password2)
        {
                alert("The passwords entered don't match");
        }
        else
        {
                alert("The passwords match");
        }
}
