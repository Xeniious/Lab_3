function change()
{
	let borderColor = document.getElementById("border").value;
	let backgroundColor = document.getElementById("background").value;
	
	if(borderColor == "red")
	{
		document.getElementById("paragraph").style.border = "thick solid red";
	}
	else if (borderColor == "green")
	{
		document.getElementById("paragraph").style.border = "thick solid green";
	}
	else if (borderColor == "blue")
	{
		document.getElementById("paragraph").style.border = "thick solid blue";
	}
	else
	{
		console.log("Invalid entry for the border color.");
	}
	
	if(backgroundColor == "red")
	{
		document.getElementById("paragraph").style.backgroundColor = "red";
	}
	else if (backgroundColor == "green")
	{
		document.getElementById("paragraph").style.backgroundColor = "green";
	}
	else if (backgroundColor == "blue")
	{
		document.getElementById("paragraph").style.backgroundColor = "blue";
	}
	else
	{
		console.log("Invalid entry for the background color.");
	}
}