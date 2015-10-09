    var GOL_RUNNING;
    var app_board = [];
    var app_grid_size = '';
    var app_speed = '';

var gol_app = function(config) {
    "use strict";

    var app_func = '';

    app_func = config.func;
    app_board = config.board;
    app_grid_size = config.grid_size;
    app_speed = config.speed;    

    switch( app_func ) {
        case 'start_game' : 
            return start_game( app_board, app_grid_size );
        case 'update_board' :
            return update_board( app_board, app_grid_size );
        case 'run_game' :
            return run_game( app_board, app_grid_size, app_speed );
        case 'stop_game' :
            return stop_game();
    }

    //game_func(app_func, app_board, app_grid_size, app_speed);

    // function game_func( app_func, app_board, app_grid_size, app_speed ) {
    //     return {
    //         start_game: (function(){
    //             start_game( app_board, app_grid_size );
    //         }),
    //         update_board : (function(){
    //             update_board( app_board, app_grid_size );
    //         }),
    //         run_game : (function(){
    //             run_game( app_board, app_grid_size, app_speed );
    //         }),
    //         stop_game : (function(){
    //             stop_game();
    //         })
    //     };
    // }

    //--create board with 1 and 0
    function create_board( app_board, app_grid_size ) {
        //--create grid
        for( var c = 0; c < app_grid_size; c++ ) {
            app_board[c] = [];
            for( var r = 0; r < app_grid_size; r++ ) {
                app_board[c][r] = Math.round(Math.round(Math.random() * 2)/2);
            }
        }
        return app_board;
    }

    //--start game with one iteration
    function start_game( app_board, app_grid_size ) {        
        app_board = create_board( app_board, app_grid_size );  
        return update_board( app_board, app_grid_size );
    }

    //--update the board
    function update_board( app_board, app_grid_size ) {
        var data = [];        
               
        app_board.forEach( function( row, r ) {
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
        
        app_board = data;

        return app_board;
    }

    //--count neighbors
    function count_neighbors( c, r ) {
        var count = 0;            

        count += check_alive( c - 1, r - 1 ) ? 1 : 0;         
        count += check_alive( c - 1, r ) ? 1 : 0;
        count += check_alive( c - 1, r + 1 ) ? 1 : 0;   
        count += check_alive( c, r - 1 ) ? 1 : 0;              
        count += check_alive( c, r + 1 ) ? 1 : 0;   
        count += check_alive( c + 1, r - 1 ) ? 1 : 0;      
        count += check_alive( c + 1, r ) ? 1 : 0;   
        count += check_alive( c + 1, r + 1 ) ? 1 : 0;  

        return count;
    }

    //--return neighbors status
    function check_alive( c, r ) {
        return app_board[c] && app_board[c][r];
    }
};