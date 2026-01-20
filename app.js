                             //JavaScript Assignment (21-25)
                              //Start Of The Chapter (21) 
                               //Chapter Name (Main name of Chapters(Strings methods) , Chapter 21(Changing case))
                                   // Chapter 21 Q (01)
                           function first() {
                                    // Chapter 21 Q (01)
                       let firstName = prompt("Enter your first Name:");
                       let lastName = prompt("Enter your last Name:");
                       let fullName = (firstName + lastName);
                       document.getElementById('head1').innerHTML = ("<h3>Add first and last name to creat full name</h3>");
                       document.getElementById('firstone').innerHTML = (`Using Addition Method to join letters: ${fullName}`);
                  }
                           function second() {
                                      // Chapter 21 Q (02)
                       let phoneModel = prompt("Enter your favorite mobile phone model");
                       document.getElementById('head2').innerHTML = ("<h3>User favorit phone brand with an length</h3>");
                       document.getElementById('secondone').innerHTML = (`My favorite phone is:  ${phoneModel} <br> Length of String: ${phoneModel.length}`);
                  }
                                      // Chapter 21 Q (03)
                            function third() {
                       let indexOfCountry = ("Pakistani");
                       document.getElementById('head3').innerHTML = ("<h3>Center string word with an Index</h3>");
                       document.getElementById('thirdone').innerHTML = ("<br>String: " + indexOfCountry + "<br> Index of 'n': " + indexOfCountry.indexOf('n'));
                  }
                                      // Chapter 21 Q (04)
                            function fourth() {
                       let lastIndexOfEng = ("Hello World");
                       document.getElementById('head4').innerHTML = ("<h3>Find the last Index of letter</h3>");
                       document.getElementById('fourone').innerHTML = ("<br>String: " + lastIndexOfEng + "<br> Index of 'l': " + lastIndexOfEng.lastIndexOf('l'));
                  }
                                   //End Of the Chapter (21)
         
                             //Start Of The Chapter (22) 
                              //Chapter Name (Strings: Measuring length and extracting parts)
                                 // Chapter 22 Q (01)
                           function fifth() {
                      let indexOfCharAt = ("Pakistani");
                      document.getElementById('head5').innerHTML = ("<h3>Find the string letter Index to character</h3>");
                      document.getElementById('fiveone').innerHTML = ("<br>String: " + indexOfCharAt + "<br> Character at Index 3: " + indexOfCharAt.charAt(3));
                  }
                                   // Chapter 22 Q (02)
                             function sixth() {
                      let firstname = prompt("Enter your first Name:");
                      let lastname = prompt("Enter your last Name:");
                      let fullname = (firstname.concat(lastname));
                      document.getElementById('head6').innerHTML = ("<h3>Add first and last name to creat full name method of concat</h3>");
                      document.getElementById('sixone').innerHTML = (`<br> Using concat Method to join letters: ${fullname}`);
                  }
                                   // Chapter 22 Q (03)
                            function seventh() {
                      let city = ("Hyderabad");
                      let newcity = (city.replace('Hyder', 'Islam'))
                      document.getElementById('head7').innerHTML = ("<h3>Replace the half string letters</h3>");
                      document.getElementById('sevenone').innerHTML = ("<br> City: " + city + " <br>After replacement: " + newcity);
                  }
                                   // Chapter 22 Q (04)
                            function eight() {
                      let bestFriend = ("Ali and obaid are best friends. They play cricket and football together.")
                      let upgradesen = (bestFriend.replaceAll('and', '&'));
                      document.getElementById('head8').innerHTML = ("<h3>Replace the same letters</h3>");
                      document.getElementById('eightone').innerHTML = (`<br>Old sentence: ${bestFriend}<br><br> Upgraded sentence: ${upgradesen}<br>`)
                  }
                               //End Of the Chapter (22)
      
                            //Start Of The Chapter (23) 
                             //Chapter Name (Strings: Finding segments)
                                  // Chapter 23 Q (01)
                            function nine() {
                     let strVal = ("472");
                     let numVal = (Number(strVal))
                     document.getElementById('head9').innerHTML = ("<h3>Find the value type Number or String</h3>");
                     document.getElementById('nineone').innerHTML = (`<br> Value: ${strVal} <br> Type of: ${typeof strVal} <br> Value: ${numVal} <br> Type of: ${typeof numVal}`);
                  }
                                  // Chapter 23 Q (02)
                          function ten() {
                     let userCap = prompt("Enter small letters to convert into Uppercase letters:")
                     let conCap = (userCap.toUpperCase());
                     document.getElementById('head10').innerHTML = ("<h3>Lower case to change Upper case letters of string</h3>");
                     document.getElementById('tenone').innerHTML = (`<br> User input: ${userCap} <br> Upper Case: ${conCap}`);
                  }
                                  // Chapter 23 Q (03)
                           function eleven() {
                         // Get the title
                        function toTitleCase(str) {
                       return str.toLowerCase().split(' ').map(word => 
                           word[0].toUpperCase() + word.slice(1)
                       ).join(' ');
                   }
                     let userInp = prompt("Enter your string:");
                     let result = toTitleCase(userInp);
                     document.getElementById('head11').innerHTML = ("<h3>User input value change into title case string value</h3>");
                     document.getElementById('elevenone').innerHTML = (`User input: ${userInp}<br>Title case: ${result}`);
                   }
                               //End Of the Chapter (23)
           
                            //Start Of The Chapter (24) 
                             //Chapter Name (Strings: Finding a character at a location)
                                  // Chapter 24 Q (01)
                           function twelve() {
                    let numToStr = (35.36);
                    let chanstr = (numToStr.toString().replace('.', ''));
                    document.getElementById('head12').innerHTML = ("<h3>Decimals numbers change into the form of Integers</h3>");
                    document.getElementById('twelveone').innerHTML = (`<br> Number: ${numToStr} <br> Result: ${chanstr}`);
                  }
                                  // Chapter 24 Q (02)
                            // Question 13: Username validation with special symbols

                          function validateUsername() {
                       let username = prompt("Please enter a username");

                      // ASCII codes for special symbols (!, ., @)
                      const specialSymbols = [33, 46, 64];

                      while (true) {                   
                          let hasSpecialSymbol = false;

                        for (let i = 0; i < username.length; i++) {
                            let charCode = username.charCodeAt(i);
                            if (specialSymbols.includes(charCode)) {
                                hasSpecialSymbol = true;
                                break;
                             }
                         }

                            if (hasSpecialSymbol) {
                            username = prompt("Please enter a valid username (without special symbols @, ., !)");
                            } else {
                             alert("Valid username: " + username);
                                  break;
                                     }
                                        // Call the function
                                validateUsername(); // prompt again
                         }
                      }


                          // Chapter 24 Q (03)
                             function fourteen() {
                    let orderOfBake = ["cake", "apple pie", "cookie", "chips", "patties"];
                    let userInput = prompt("Welcome to ABC bakery. What do you want to order sir/mam?");
                    let searchItems = userInput.toLowerCase();
                    let found = false;
                    let index = -1
                    for (let i = 0; i < orderOfBake.length; i++) {
                      if (orderOfBake[i].toLowerCase() === searchItems) {
                           found = true;
                           index = i;
                           break;
                       }
                    }
                     document.getElementById('head14').innerHTML = ("<h3>User input string all form of letter to guid this Index</h3>");
                     if (found) {
                     document.getElementById('fourthone').innerHTML = (`<br>${userInput} is available at index ${index} in our bakery.<br>`)
                    } else {
                     document.getElementById('fourthtwo').innerHTML = (`<br><br>We are sorry. ${userInput} is not available in our bakery.<br>`);
                      };  
                 }
                                  // Chapter 24 Q (04)
                     function validatePassword() {
                       let password = prompt("Enter a password:");
                       let isValid = true;
                       let message = "";

                    // Check if password contains both alphabets and numbers
                    let hasLetter = /[a-zA-Z]/.test(password);
                    let hasDigit = /\d/.test(password);
                    // document.getElementById('head15').innerHTML = ("<h3>Enter your password maximum 6 letters or string/number values</h3>");
                    if (!hasLetter || !hasDigit) {
                       isValid = false;
                       message += "Password must contain both letters and numbers.\n";
                   }

                   // Check if password starts with a number
                   if (/^\d/.test(password)) {
                       isValid = false;
                       message += "Password can not begin with a number.\n";
                   }

                   // Check length
                    if (password.length < 6) {
                        isValid = false;
                        message += "Password must be at least 6 characters long.\n";
                   }

                    if (isValid) {
                        alert("Password is valid.");
                    } else {
                        alert(message + "Please enter a valid password.");
                        validatePassword(); // prompt again
                    }
                }

                         //JavaScript Assignment (24)
                         //Start Of The Chapter (25) 
                          //Chapter Name (Strings: Replacing characters)
                               // Chapter 25 Q (01)
                         function sixteen() {
                  let university = ("University of Karachi");
                  let arry = (university.split(""));
                  document.getElementById('sixthone').innerHTML = (arry);
                  let charArry = (university.split(" "))
                  document.getElementById('sixthtwo').innerHTML = (charArry);
                  alert(arry)
                  document.getElementById('head16').innerHTML = ("<h3>String convert into an array using string split method</h3>");
                  document.getElementById('sixththree').innerHTML =(arry.join("<br>"))
                }
                               // Chapter 25 Q (02)
                            function seventeen() {
                  let userLastInpCha = prompt("Enter your character");
                  const lastChar = (userLastInpCha.charAt(userLastInpCha.length -1));
                  document.getElementById('head17').innerHTML = ("<h3>String value last Index to guid last character</h3>");
                  document.getElementById('seventhone').innerHTML = (`<br> User Input: ${userLastInpCha} <br> Last character of Input: ${lastChar}`);
                }
                               // Chapter 25 Q (03)
                         function eighteen() {
                  let dog = ("The quick brown fox jump over the lazy dog");
                  const findLetter = ("the");
                  let resDog = (dog.toLowerCase().split(/\s+/));
                  const count = (resDog.filter(resDog => resDog === findLetter.toLowerCase()).length);
                  document.getElementById('head18').innerHTML = ("<h3>Giud the occurrences of same letters in string</h3>");
                  document.getElementById('eighthone').innerHTML = (`<br> Text: ${dog} <br> There are ${count} occurence(s) of word '${findLetter}'`);
                }
                            //End Of the Chapter (25)