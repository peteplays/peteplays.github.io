# Game of Life

## Project Goal
This is my first project with JRS.  My goal is to sharpen my programming skills and have some fun.  I will be using the rules from <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> to build a web app.

## Check It Out!
<a href="http://peteplays.github.io/index.html">The Game of Life Project</a>

## Try Yourself
```
clone repo
click on index.html
```

## Config
game_config contains all data that is needed to be pass from main.js to gol-app.js.<br>
It contains:<br>
```
game_config = 
	{
		func : 'func name',
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
		<td>pass the function name you are calling from the UI</td>
		<td>yes</td>
	</tr>
	<tr>
		<td>board</td>
		<td>array</td>
		<td>pass the board to the UI</td>
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

## Contributors
Please feel free to contact me

## License
MIT<br>
Please feel free to use this project.
