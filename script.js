
function add()
		{
			var x=parseFloat(document.getElementById("first").value);
			var y=parseFloat(document.getElementById("second").value);
			if(isNaN(x+y))
				{window.alert("some value is missing for requied operation");}
			else
			{document.getElementById("output").innerHTML=x+y;}
		}
function subtract()
		{
			var x=parseFloat(document.getElementById("first").value);
			var y=parseFloat(document.getElementById("second").value);
			if(isNaN(x-y))
				{window.alert("some value is missing for requied operation");}
			else
			{document.getElementById("output").innerHTML=x-y;}
		}
function multiply()
		{
			var x=parseFloat(document.getElementById("first").value);
			var y=parseFloat(document.getElementById("second").value);
			if(isNaN(x*y))
				{window.alert("some value is missing for requied operation");}
			else
			{document.getElementById("output").innerHTML=x*y;}
		}
function divide()
		{
			var x=parseFloat(document.getElementById("first").value);
			var y=parseFloat(document.getElementById("second").value);
			if(y==0)
				window.alert("cannot divide by Zero");
			else
			{
				if(isNaN(x/y))
				{window.alert("some value is missing for requied operation");}
			else
			{document.getElementById("output").innerHTML=x/y;}
			}
			
		}
function and()
		{
			var a=document.getElementById("first").value;
			var b=document.getElementById("second").value;
			if(a==="" || b=="")
			{
				window.alert("some value is missing for requied operation");
				return;
			}
			var x=parseFloat(document.getElementById("first").value);
			var y=parseFloat(document.getElementById("second").value);
			if(isNaN(x&y))
				{window.alert("some value is missing for requied operation");}
			else
			{document.getElementById("output").innerHTML=x&y;}
		}
function or()
		{
			var a=document.getElementById("first").value;
			var b=document.getElementById("second").value;
			if(a==="" || b=="")
			{
				window.alert("some value is missing for requied operation");
				return;
			}
			var x=parseFloat(document.getElementById("first").value);
			var y=parseFloat(document.getElementById("second").value);
			if(isNaN(x|y))
				{window.alert("some value is missing for requied operation");}
			else
			{document.getElementById("output").innerHTML=x|y;}
		}
function xor()
		{
			var a=document.getElementById("first").value;
			var b=document.getElementById("second").value;
			if(a==="" || b=="")
			{
				window.alert("some value is missing for requied operation");
				return;
			}
			var x=parseFloat(document.getElementById("first").value);
			var y=parseFloat(document.getElementById("second").value);
			if(isNaN(x^y))
				{window.alert("some value is missing for requied operation");}
			else
			{document.getElementById("output").innerHTML=x^y;}
		}
function negation()
		{
			var a=document.getElementById("first").value;
			if(a==="")
			{
				window.alert("some value is missing for requied operation");
				return;
			}
			var x=parseFloat(document.getElementById("first").value);
			var y=parseFloat(document.getElementById("second").value);
			if(isNaN(~x))
				{window.alert("some value is missing for requied operation");}
			else
			{document.getElementById("output").innerHTML=~x;}		}
function nand()
		{
			var a=document.getElementById("first").value;
			var b=document.getElementById("second").value;
			if(a==="" || b=="")
			{
				window.alert("some value is missing for requied operation");
				return;
			}
			var x=parseFloat(document.getElementById("first").value);
			var y=parseFloat(document.getElementById("second").value);
			if(isNaN(~(x&y)))
				{window.alert("some value is missing for requied operation");}
			else
			{document.getElementById("output").innerHTML=~(x&y);}
			
		}
function nor()
		{
			var a=document.getElementById("first").value;
			var b=document.getElementById("second").value;
			if(a==="" || b=="")
			{
				window.alert("some value is missing for requied operation");
				return;
			}
			var x=parseFloat(document.getElementById("first").value);
			var y=parseFloat(document.getElementById("second").value);
			if(isNaN(~(x^y)))
				{window.alert("some value is missing for requied operation");}
			else
			{document.getElementById("output").innerHTML=~(x^y);}
			
		}
function power()
{var a=document.getElementById("first").value;
			var b=document.getElementById("second").value;
			if(a==="" || b=="")
			{
				window.alert("some value is missing for requied operation");
				return;
			}
	var x=parseFloat(document.getElementById("first").value);
	var y=parseInt(document.getElementById("second").value);
	var result=1;
	result=parseFloat(result);
	for(var i=1;i<=y;i++)
		result*=x;
	if(isNaN(result))
				{window.alert("some value is missing for requied operation");}
			else
			{document.getElementById("output").innerHTML=result;}
			
}
function modulo()
{
	var x=parseFloat(document.getElementById("first").value);
	var y=parseInt(document.getElementById("second").value);
	if(isNaN(x%y))
				{window.alert("some value is missing for requied operation");}
			else
			{document.getElementById("output").innerHTML=x%y;}
			
}

