/* ======= Animations ======= */
jQuery(document).ready(function() {
    /* ======= Auto play Vimeo in Bootstrpa Modal ======= */
    
    var iframe = document.getElementById('vimeo-video');
    // $f == Froogaloop
    var player = $f(iframe);
    
    jQuery('#videoModal').on('hidden.bs.modal', function () {
        player.api('pause');
    });
    
    jQuery('#videoModal').on('shown.bs.modal', function () {
        player.api('play');
    });
            
});