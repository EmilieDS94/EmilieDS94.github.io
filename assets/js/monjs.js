
function masquer_div(divacacher)
{
  if (document.getElementById(divacacher).style.display == 'none') {
       document.getElementById(divacacher).style.display = 'block';
  }
  else {
       document.getElementById(divacacher).style.display = 'none';
  }
}