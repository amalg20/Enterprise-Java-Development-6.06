//Iteration 1: Names and Input 
var hacker1 = "Amal";  
console.log("The driver's name is " + hacker1); 
var hacker2 = "Ala";  
console.log("The navigator's name is " + hacker2); 
 
console.log("**************************");

// Iteration 2: Conditionals 
if (hacker1.length > hacker2.length) { 
 console.log("The driver has the longest name, it has " + hacker1.length + " characters."); 
     } else if (hacker2.length > hacker1.length) { 
     console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters."); 
     } else { 
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!"); 
    } 

    console.log("**************************");

//Iteration 3: Loops 
var driverName = "Manar";  
var driverNameSeparated = ""; 
for (let i = 0; i < driverName.length; i++) { 
  driverNameSeparated += driverName[i].toUpperCase() + " "; 
} 
console.log(driverNameSeparated.trim()); 
 
var navigatorName = "Nuha";  
var reversedNavigatorName = ""; 
for (let i = navigatorName.length - 1; i >= 0; i--) { 
  reversedNavigatorName += navigatorName[i]; 
} 
console.log(reversedNavigatorName); 
 
if (driverName < navigatorName) { 
  console.log("The driver's name goes first."); 
} else if (navigatorName < driverName) { 
  console.log("Yo, the navigator goes first, definitely."); 
} else { 
  console.log("What?! You both have the same name?"); 
} 
 
console.log("**************************");

// Bouns1 
var longText = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. 
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. 
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). 
`; 
var wordCount = longText.split(/\s+/).filter(word => word.trim() !== "").length; 
var etCount = longText.split("et").length - 1; 
 console.log("Number of words in the text: " + wordCount); 
 console.log("Number of times 'et' appears in the text: " + etCount); 
 
 console.log("**************************");

 //Bouns2 
 let phraseToCheck = "stack cats"; 
 let isPalindrome = true; 
  
 // Convert to lowercase and remove all non-alphanumeric characters 
 let processedString = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/gi, ''); 
  
 // Compare the string with its reverse 
 for (let i = 0; i < processedString.length / 2; i++) { 
     if (processedString[i] !== processedString[processedString.length - 1 - i]) { 
         isPalindrome = false; 
         break; 
     } 
 } 
 console.log(phraseToCheck, "is: ") 
 if (isPalindrome) { 
     console.log(" a palindrome."); 
 } else { 
     console.log(" not a palindrome."); 
 }

 console.log("**************************");