//--count all neighbors
function count_all_neighbors( c, r ) {
    var count = 0;            

    count += check_neighbors( c - 1, r - 1 ) ? 1 : 0;         
    count += check_neighbors( c - 1, r ) ? 1 : 0;
    count += check_neighbors( c - 1, r + 1 ) ? 1 : 0;   
    count += check_neighbors( c, r - 1 ) ? 1 : 0;              
    count += check_neighbors( c, r + 1 ) ? 1 : 0;   
    count += check_neighbors( c + 1, r - 1 ) ? 1 : 0;      
    count += check_neighbors( c + 1, r ) ? 1 : 0;   
    count += check_neighbors( c + 1, r + 1 ) ? 1 : 0;  

    return count;
}
//--count side neighbors
function count_side_neighbors( c, r ) {
    var count = 0;

    count += check_neighbors( c - 1, r ) ? 1 : 0;  
    count += check_neighbors( c, r - 1 ) ? 1 : 0;              
    count += check_neighbors( c, r + 1 ) ? 1 : 0;      
    count += check_neighbors( c + 1, r ) ? 1 : 0; 

    return count;
}
//--count corner neighbors
function count_corner_neighbors( c, r ) {
    var count = 0;            

    count += check_neighbors( c - 1, r - 1 ) ? 1 : 0;         
    count += check_neighbors( c - 1, r + 1 ) ? 1 : 0;           
    count += check_neighbors( c + 1, r - 1 ) ? 1 : 0;                 
    count += check_neighbors( c + 1, r + 1 ) ? 1 : 0; 

    return count;
}
//--return neighbors status
function check_neighbors( c, r ) {
    return board[c] && board[c][r];
}
//--output grid with 1 and 0
function display_ones_zeros_grid() {
    var output_board = '';
    board.forEach( function( row ) {
        output_board += '<div>' + row + '</div>';
    });
    $('#ut_board').html(output_board); 
}

var out_x = '';
var out_y = '';

//--hovered over coordinates
$('.game_board').on('mouseenter', '.cell', function() {    
    out_x = $(this).data('xaxis');
    out_y = $(this).parent().parent().data('yaxis');
    var ut_hover_coordinates = 'X: ' + out_x + ' Y: ' + out_y;
    $('#ut_hover_coordinates').html(ut_hover_coordinates);

});
//--change cell class to alive / dead
$('#manual_set_cells_alive_dead').on('click', function() {
    $('#manual_set_cells_alive_dead').toggleClass('btn-info','btn-success');
    $('#manual_set_cells_alive_dead').toggleClass('btn-success','btn-info');
    $('.wrapper').toggleClass('cell_editing_active');
});




//--actions when cell is clicked
$('.game_board').on('click', '.cell', function() {  
    //--change cell alive / dead
    if( $('#manual_set_cells_alive_dead').hasClass('btn-success') ) {
        if( $(this).hasClass('alive') ) {
            $(this).removeClass('alive').addClass('dead');
            board[out_y][out_x] = 0;
            app_board = board;
        } else {
            $(this).removeClass('dead').addClass('alive');
            board[out_y][out_x] = 1;
            app_board = board;
        }
    }
    //--selected coordinates
    var ut_selected_coordinates = 'X: ' + out_x + ' Y: ' + out_y;
    $('#ut_selected_coordinates').html(ut_selected_coordinates);
    
    //--count all neighbors
    var counter_all_neighbors = count_all_neighbors( out_y, out_x );
    $('#ut_all_count_neighbors').html(counter_all_neighbors); 
    //--count side neighbors
    var counter_side_neighbors = count_side_neighbors( out_y, out_x );
    $('#ut_side_count_neighbors').html(counter_side_neighbors);
    //--count corner neighbors
    var counter_corner_neighbors = count_corner_neighbors( out_y, out_x );
    $('#ut_corner_count_neighbors').html(counter_corner_neighbors);

    //--output grid with 1 and 0
    display_ones_zeros_grid(); 

 });