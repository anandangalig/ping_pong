# _Ping Pong Calculator_

#### _A numbers game that returns Ping, Pong, or Ping-Pong depending on the user input, 8/26/2016 _

#### By _**Anand Angalig**_

## Description

_Enter any number as the PING, and we will return a PONG by counting from 1 to your number with three exceptions:_

* _Numbers divisible by 3 are replaced with "ping"_
* _Numbers divisible by 5 are replaced with "pong"_
* _Numbers divisible by 15 are replaced with "ping-pong"_

## Specs:

* _If user enters not-a-number (i.e. letters and/or signs), the program will not work and display a message requesting to enter an actual number._
  * _input: hello_  
  * _output: "Please enter a number and try again!"_
* _If user enters a number that is less than the first translatable number (e.g. 3 to Ping), the program will simply count up to the entered number._
  * _input: 2_
  * _output: 1,2_
* _If user enters a number that is equal to the first translatable number, the program will count up to the inputted number and replace it with the corresponding word._
  * _input: 3_
  * _output: 1,2,Ping_
* _If user enters a number, the program will count up to the inputted number while returning Ping, Pong, or Ping-Pong for numbers divisible by 3, 5, or 15 respectively._
  * _input: 5_
  * _output: 1,2,Ping,4,Pong_
* _If user enters a number, the program will count up to the inputted number while returning the in-divisible numbers as it is, while returning Ping, Pong, or Ping-Pong for numbers divisible by 3, 5, or 15 respectively._
  * _input: 6_
  * _output: 1,2,Ping,4,Pong,6_
* _If user enters a number, the program will count up to the inputted number while returning the in-divisible numbers as it is, while returning Ping, Pong, or Ping-Pong for numbers divisible by 3, 5, or 15 respectively._
  * _input: 15_
  * _output: 1,2,Ping,4,Pong,Ping,7,8,Ping,Pong,11,Ping,13,14,Ping-Pong._

## Setup/Installation Requirements

* _Go to https://github.com/anandangalig/ping_pong.git_
* _Download this repository onto your local machine_
* _Open the files in your favorite text editor to see the code_
* _Open index.html in your web-browser to play the game_


## Known Bugs

_No known bugs reported so far. If you find one, please let me know via email at anandangalig@gmail.com_


## Technologies Used

* _Jquery_

### License

*This game is licensed under the MIT License agreement.*

Copyright (c) 2016 **_Anand Angalig_**
