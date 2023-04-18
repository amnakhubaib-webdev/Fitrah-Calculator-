var FamilyMembers = prompt("Enter the Total number of Family Members:");
var FitrahMethod = prompt("Choose a Fitrah Method: 1. gandum = 250Rs 2. jou = 450Rs 3. khajoor = 2100Rs 4. kishmish = 2800Rs");
var Fitrahprice;
if (FitrahMethod === "gandum" || 
FitrahMethod === "1")
 {
    FitrahAmount = 250;
}
else if (FitrahMethod === "jou" ||
 FitrahMethod === "2") 
 {
    FitrahAmount = 450;
}
else if (FitrahMethod === "khajoor" ||
 FitrahMethod === "3") 
 {
    FitrahAmount = 2100;
}
else if (FitrahMethod === "kishmish" ||
 FitrahMethod === "4")
{
    FitrahAmount = 2800;
}
  else { alert("Please Choose the correct method given Above")
}
var Fitrahprice = FitrahAmount * FamilyMembers;
alert("The Fitrah Amount for " + FamilyMembers + " Family Members by " + FitrahMethod + " Method is Rs " + Fitrahprice);
