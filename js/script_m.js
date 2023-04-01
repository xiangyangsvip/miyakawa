window.onload = function () {    
    $('#m_icon').click(function () {
        if ($('#m_menu').css('display') == 'none') {
            $('#m_menu').css('display', 'block');
            $('#m_icon').css('background', 'url(src/png/m/close_m.png) no-repeat center');
        }
        else if ($('#m_menu').css('display') == 'block') {
            $('#m_menu').css('display', 'none');
            $('#m_icon').css('background', 'url(src/png/m/menu_m_w.png) no-repeat center');
        }
    }); 
    $('#m_menu a').click(function () {
        if ($('#m_menu').css('display') == 'block') {
            $('#m_icon').css('background', 'url(src/png/m/menu_m_w.png) no-repeat center');
            $('#m_menu').css('display', 'none');
            }
        } 
    );
}


