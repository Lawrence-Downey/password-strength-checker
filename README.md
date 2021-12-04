# CP1291 - Password Strength Checker - jQuery Plugin


## About <a name = "about"></a>
This Plugin is designed to test and confirm a user's password. It will then display if the password that was entered is either "too short", "weak", "good", or "strong" based on various parameters that are implemented in the code.
This plugin can be used on it's own or in conjunction with any form the user wishses for their website.

## Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

- You can begin by downloading the files [here](https://github.com/Lawrence-Downey/password-strength-checker).
- Be sure to save everything in one file.

### Prerequisites

What things you need to install the software and how to install them.
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


## Usage <a name = "usage"></a>

There are two ways this plugin can be used. The first is the default setting which when ![Verify Button](https://user-images.githubusercontent.com/84094233/144719449-40c5b630-5f5a-4e6a-b70e-03f1c0910afc.png) is clicked, will display a "Strength Meter" as well as provide
feedback on how strong the password is. If the ![Images button]() is selected this will display an overlay image that describes the users password strength instead of the meter.
