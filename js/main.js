function toggleHidden(index) {
    $('#side_tab' + (index + 1)).toggleClass('hidden'); 
}

let prevTab = null; 
$(document).ready(function() {
    if(prevTab == null) prevTab = $('ul li:first'); 
    $('.tabs').click(function(){
        let selectedTab = $(this).closest('li'); 
        toggleHidden(selectedTab.index());
        toggleHidden(prevTab.index()); 
        prevTab = selectedTab; 
    })
})
