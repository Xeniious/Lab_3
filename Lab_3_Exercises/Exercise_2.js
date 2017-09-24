let imageCount = 0;
//let arrayImage = new Array();

/*arrayImage[0] = new Image()
arrayImage[0].src = "Image1.jpg";

arrayImage[1] = new Image()
arrayImage[1].src = "Image2.jpg";

arrayImage[2] = new Image()
arrayImage[2].src = "Image3.jpg";

arrayImage[3] = new Image()
arrayImage[3].src = "Image4.jpg";

arrayImage[4] = new Image()
arrayImage[4].src = "Image5.jpg";*/

function previous()
{
	let arrayImage = document.getElementsByClassName("cats");
	if(imageCount == 0)
	{
		imageCount = 4;
	}
	else
	{
		imageCount--;
	}
	for(i=0;i<5;i++)
	{
		if(i==imageCount)
		{
			
		}
		else
		{
			arrayImage[i].style.display = "none"
		}
	}
	arrayImage[imageCount].style.height = '500px';
	arrayImage[imageCount].style.width = '500px';
	arrayImage[imageCount].style.display = "block";
}
function next()
{
	let arrayImage = document.getElementsByClassName("cats");
	if(imageCount == 4)
	{
		imageCount = 0;
		console.log("Next: " + imageCount)
	}
	else
	{
		imageCount++;
		console.log("Next: " + imageCount)
	}
	for(i=0;i<5;i++)
	{
		if(i==imageCount)
		{
			
		}
		else
		{
			arrayImage[i].style.display = "none";
		}
	}
	arrayImage[imageCount].style.height = '500px';
	arrayImage[imageCount].style.width = '500px';
	arrayImage[imageCount].style.display = "block";
}