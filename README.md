# Game of Life

## Project Goal
This is my first project with JRS.  My goal is to sharpen my programming skills and have some fun.  I will be using the rules from <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> to build a web app.

## Check It Out!
<a href="http://peteplays.github.io/index.html">The Game of Life Project</a>

## Try Yourself
```
clone the repo
```

## Instructions
There are two running options, Start Game and Start Unit Test. There are two game options, changing the grid size, and changing the speed the game runs.<br>
Clicking Start Game or Start Unit Test will rest the game.<br>
#### Start Game
Stop, will stop the game.<br>
Keep Going, will start where the game stopped.<br>
#### Start Unit Test
<i>This script is a stand alone script named unittest.js</i>
One Step, will go through the game one progression at a time.<br>
Toggle Cells Alive or Dead, will allow cells to be changed back and forth between alive and dead.<i>It is recommended once the cells have been changed to click the Toggle Cells Alive or Dead button again to stop the cell toggling.</i><br>
Once the grid is clicked there are several outputs.<br>
Current Coordinates, will display the X and Y axis of where the mouse is hovering over.<br>
Selected Coordinates, will display the X and Y axis of where the mouse has clicked, this will also display the values for Total Alive Neighbor Count, Alive Side Neighbor Count, Alive Corner Neighbor Count, and the grid of 1s and 0s.<br>

## Config
game_config contains all data that is needed to be pass from main.js to gol-app.js.<br>
It contains:<br>
```
game_config = 
	{
		func : 'start_game',
		board : [],
		grid_size : 10,
		speed : 500
	}
```		

## Required
<table>
	<tr>
		<th>Parameter</th>
		<th>Type</th>
		<th>Description</th>
		<th>Required UI to gol-app</th>
	</tr>
	<tr>
		<td>func</td>
		<td>string</td>
		<td>start_game || update_board || run_game || stop_game</td>
		<td>yes</td>
	</tr>
	<tr>
		<td>board</td>
		<td>array</td>
		<td>pass the board</td>
		<td>no</td>
	</tr>
	<tr>
		<td>grid_size</td>
		<td>string</td>
		<td>pass board size</td>
		<td>no</td>
	</tr>
	<tr>
		<td>speed</td>
		<td>string</td>
		<td>pass speed to board</td>
		<td>no</td>
	</tr>
</table>

## Thank You
I used the following resources on this project.<br>
<a href="https://angularjs.org/">AngularJS</a><br>
<a href="http://getbootstrap.com/">Bootstrap</a><br>
<a href="https://www.google.com/fonts">Google Fonts</a><br>
<a href="https://jquery.com/">jQuery</a><br>
<a href="http://www.transparenttextures.com/">Transparent Textures</a><br>
<a href="http://underscorejs.org/">Underscore.js</a><br>
And to anyone else I may have missed.<br>

## Contributors
Please feel free to contact me, fork, or just have fun!

## License
MIT<br>
Please feel free to use this project.
