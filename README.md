# CP1291 - Password Strength Checker - jQuery Plugin


## About <a name = "about"></a>
This Plugin is designed to test and confirm a user's password. It will then display if the password that was entered is either "too short", "weak", "good", or "strong" based on various parameters that are implemented in the code.
This plugin can be used on it's own or in conjunction with any form the user wishses for their website.

## Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

- You can begin by downloading the files [here](https://github.com/Lawrence-Downey/password-strength-checker).
- Be sure to save everything in one file.

### Prerequisites

You will need an IDE to operate the code for this plugin. I use VSC but any of them that will support jQuery will do.

### Installing

- First you will require a separate js file.
- Next you can add the following code to your document.ready()
  ```
  $(document).ready(() => {

    $("#verify").passwordStrengthChecker();
   
  });
  ```
 - Note,`$("#verify")` is the id of a button on the form. This could change to any id the user uses.


## Usage

There are two ways this plugin can be used. The first is the default setting which when ![Verify Button](https://user-images.githubusercontent.com/84094233/144719449-40c5b630-5f5a-4e6a-b70e-03f1c0910afc.png) is clicked, will display a "Strength Meter" as well as provide
feedback on how strong the password is. If ![Unchecked Images Button](https://user-images.githubusercontent.com/84094233/144719913-88913703-655c-4244-a3ba-76598efbe94e.png) is selected (Seen here: ![Checked Images Button](https://user-images.githubusercontent.com/84094233/144719711-8a50d2bd-3a70-4c90-a964-d3f715cea4d3.png) ) this will display an overlay image that describes the users password strength instead of the meter.

There is also a `![Show Password](https://user-images.githubusercontent.com/84094233/144720120-3a28dc1b-ea54-4485-9677-12b9309a8245.png)` button. When clicked it will show the password the user has entered and will then display as: ![Hide Password](https://user-images.githubusercontent.com/84094233/144720196-0869a94f-58b9-47d2-ab46-787b03059fbc.png).
Clicking on it this time will return the password to it's hidden state and the button will once again read "Show Password".
In the event a user clicks "Show Password" while nothing has been entered, a drop down alert will appear: ![Password Alert](https://user-images.githubusercontent.com/84094233/144720329-78da59b1-268c-4e4d-b92f-a8b39541d2b2.png).

The very last button set up is the ![Clear Button](https://user-images.githubusercontent.com/84094233/144720262-72e0d4c2-45c1-4351-af62-5c28c67630c5.png) button. Clicking this will reset the form and all applicable values while also returning the Images to it's default setting.

## End Results:

![Strength Meter Example](https://user-images.githubusercontent.com/84094233/144720404-1b598b63-852b-468f-9421-f6060cd7575d.png)

As you can see the password is too short as demonstrated by the strength meter.

In this example you can see the use of the image overlay:

![image](https://user-images.githubusercontent.com/84094233/144730060-e9e1a742-f4b6-4272-9906-03dce7ce2d8c.png)

