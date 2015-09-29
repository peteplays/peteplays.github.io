var pete = angular.module('pete', []);
pete.controller('gol', function($scope, $interval) {

    var grid_size = 10;    
    var board = [];
    var CURRENTLY_RUNNING;
    
    $scope.grid_size = grid_size;
    $scope.init_running_speed = 500;
    $scope.grid_size_change_class = 0;
    $scope.speed_change_class = 0;
    $scope.start_game_btn = '';
    $scope.grid_size_update_text = '';

    $scope.start_game = function() {
        populate_grid();
        $scope.start_game_btn = ' Over';
        reset_grid_size_display();
    };
    $scope.update_grid_size = function() {
        board = [];
        $scope.outCell = $scope.grid_size;
        grid_size = $scope.grid_size;
        $scope.start_game_btn = ' Over';
        reset_grid_size_display();
        populate_grid();
    };
    $scope.update_run_speed = function() { 
        $scope.speed_change_update_text = '';
        $scope.speed_change_class = 0; 
        $scope.start_game_btn = ' Over'; 
        //$interval.cancel( CURRENTLY_RUNNING );
        populate_grid();     
    };
    $scope.grid_size_change = function(){
        $scope.grid_size_update_text = 'UPDATE ';
        $scope.grid_size_change_class = 1;
    };
    $scope.speed_change = function() {
        $scope.speed_change_update_text = 'UPDATE ';
        $scope.speed_change_class = 1;
    };
    $scope.stop_game = function() {
        $interval.cancel( CURRENTLY_RUNNING );
    };
    $scope.restart_game = function() {
         CURRENTLY_RUNNING = $interval( update_board,  $scope.running_speed );
    };
    var reset_grid_size_display = function() {
        $scope.grid_size_update_text = '';
        $scope.grid_size_change_class = 0;
    };

    //--start 
    var populate_grid = function() {
        create_gird();        
        update_board();
        $interval.cancel( CURRENTLY_RUNNING );
        CURRENTLY_RUNNING = $interval( update_board,  $scope.running_speed );  
    };

    //--create grid
    var create_gird = function() {
        //--creates multiD array per grid size with 1 and 0
        for( var c = 0; c < grid_size; c++ ) {
            board[c] = [];
            for( var r = 0; r < grid_size; r++ ) {
                board[c][r] = Math.round(Math.round(Math.random() * 2)/2);
            }
        }
    };

    //--check alive or dead
    var update_board = function() {        
        var data = [];        
               
        board.forEach( function( row, r ) {
            data[r] = [];
            row.forEach( function( cell, c ) {
                var alive = 0;
                var count = count_neighbors( r, c );
                
                if( cell > 0 ) {
                    if( count === 2 || count === 3 ) {
                        alive = 1;
                    } else {
                        alive = 0;      
                    }
                } else {
                    if( count === 3 ) {
                        alive = 1;
                    } else {
                        alive = 0;
                    }
                }

                data[r][c] = alive;
            });
        });
       
        board = data;        
        $scope.board = board;
    };

    //--return count of live neighbors for a cell
    var count_neighbors = function( c, r ) {
        var count = 0;

        //--return cell status
        var check_alive = function( c, r ) {
            return board[c] && board[c][r];
        };

        count += check_alive( c - 1, r - 1 ) ? 1 : 0;         
        count += check_alive( c - 1, r ) ? 1 : 0;
        count += check_alive( c - 1, r + 1 ) ? 1 : 0;   
        count += check_alive( c, r - 1 ) ? 1 : 0;              
        count += check_alive( c, r + 1 ) ? 1 : 0;   
        count += check_alive( c + 1, r - 1 ) ? 1 : 0;      
        count += check_alive( c + 1, r ) ? 1 : 0;   
        count += check_alive( c + 1, r + 1 ) ? 1 : 0;   

        return count;
    };

});



