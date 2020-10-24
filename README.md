# homework-week-3

1. to initilize the project to create a password generator, i first had to start by writing a list of caracters that it would have to select from. 
    > var lowerCasedCharacters
    > var uppercasedCharacters
    > var specialCharacters
    > var numericCharacters

2. then I created a password function which willl contain the following commands.

3. I begin by setting conditional if statements asking for length between 8 - 128 characters, and I use the parseInt function to turn the string into an interger data.

4. I follow by 3 confirm statements regarding the character types.

5. another conditional statment must be made that if those reqyuirements arent met then it will alert false since the condition was set to "== false".

6. then you set declare variable "passwordOptions" adding the value of length and link it to another length and the same for the "has....characters" variables, in which you then return passwordOptions once both variables are associated with all their rules, finalizing the function

7. you set another function named getRandom which will be used to randomly select Strings from the past variables. within its parameter you use the arr key to associate later to activate the function when input.
You create a randomindex or var randindex with the function of math.random but preadd a math.floor to round the interger to the nearest whole number, then you multiply it times the length you input previously in the prompt by using that same arr keyword set in the parameter of the function.
then a ranElement which has a value of arr[randomindex] (of which was applied earlier in the function). and return that randomelelement "randelement" .

8.  the fincal function is set and this will be used to associate the oast two results. 

9. function generatePassword(). 
var options is set a value of the function getPasswordOptions to call back to the function prior of the both conditional statements, confirm options and them being linked through value. 
Then declare a result variable to an to an empty array.
Declare a possibleCharcters to an empty array.
declare a guaranteedCharacters variable to an to an empty array.

10. the first conditional statement to the parameter options (value is function generatepassword linked to the conditions of haslowercharacters which were established before).
    > the possibleCharacters variable is set to have the value of possibleCharacters concated to its inner parameter (lowerCasedCharacters). The concat function is used to combine the array of possible characters to the string value of lowercasedCaracters.


11. I proceed to parallel the order of conditional statement rules set for step 10, 3 times, except the parameters are set to the remaining 3.
This will link all the types of characters together to the possibleCharacte variable.

12. finally I set a loop, I use the options variable that has a value of  getPasswordOptions function which is set to the limit of the length you assigned earlier. and within that loop statement, declare a variable of possible character to get a random result from the possibleCharacters that were linked earlier to all the characters I set at the beginning. I use that new random string character and associate it with the result. 

13. this loop mainly assures that. this loop function is mainly to assure i get form each character set and pushes the preious command. finally i get the return and i add a .join function so that it creates a new string with the set characters within the array.

14. The generate button function provided will listen for a click with the .addEventListener and will input the result which was joined togther into a string. 