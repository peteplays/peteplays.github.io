var board = [];
var app = angular.module('app', []);
app.controller('gol', function($scope, $attrs) {

    var grid_size = 3;
    var speed = 2500;
    var game_config = {};
    
    $scope.grid_size = grid_size;
    $scope.init_running_speed = speed;
    $scope.grid_size_change_class = 0;
    $scope.speed_change_class = 0;
    $scope.start_game_btn_text = '';
    $scope.start_ut_btn_text = '';
    $scope.grid_size_update_text = '';

    $scope.start_game_button = function() {
        $scope.start_game(); 
        $scope.game_is_running = true; 
        $scope.ut_is_running = false;
        $scope.start_game_btn_text = ' Over';
        $scope.start_ut_btn_text = '';
    };
    $scope.start_ut_button = function() {
        $scope.start_game(); 
        $scope.game_is_running = false; 
        $scope.ut_is_running = true;
        $scope.start_ut_btn_text = ' Over';
        $scope.start_game_btn_text = '';
    };
    $scope.start_game = function() {
        board = [];
        populate_grid();        
        reset_grid_size_display();
    };
    $scope.update_grid_size = function() {
        board = [];
        $scope.outCell = $scope.grid_size;
        grid_size = $scope.grid_size;
        reset_grid_size_display();
        populate_grid();
    };
    $scope.update_run_speed = function() { 
        $scope.speed_change_update_text = '';
        $scope.speed_change_class = 0; 
        speed = $scope.running_speed;
        populate_grid();     
    };
    $scope.grid_size_change = function(){
        display_board = [];
        $scope.grid_size_update_text = 'UPDATE ';
        $scope.grid_size_change_class = 1;
    };
    $scope.speed_change = function() {
        $scope.speed_change_update_text = 'UPDATE ';
        $scope.speed_change_class = 1;
    };
    $scope.stop_game = function() {
        game_config.func = 'stop_game';
        $scope.stop_btn_clicked = true;

        board = gol_app(game_config);
        $scope.display_board = board;
    };
    $scope.restart_game = function() {
        game_config.func = 'run_game';
        game_config.speed = speed;
        $scope.stop_btn_clicked = false;
        
        board = gol_app(game_config);
        $scope.display_board = board;
    };
    $scope.one_step = function() {
        game_config.func = 'update_board';
        game_config.board = board;
        game_config.grid_size = grid_size;
        game_config.speed = speed;

        board = gol_app(game_config);
        $scope.display_board = board;
    };
    var reset_grid_size_display = function() {
        $scope.grid_size_update_text = '';
        $scope.grid_size_change_class = 0;
    };
    var populate_grid = function() {
        game_config.func = 'start_game';
        game_config.board = board;
        game_config.grid_size = grid_size;
        game_config.speed = speed;

        board = gol_app(game_config);
        $scope.display_board = board;
    
        //set_game_to_run();    
        
    };
    var set_game_to_run = function() {
        game_config.func = 'run_game';
        game_config.board = board;
        game_config.grid_size = grid_size;
        game_config.speed = speed;

        board = gol_app(game_config);
        $scope.display_board = board;
    };

});







