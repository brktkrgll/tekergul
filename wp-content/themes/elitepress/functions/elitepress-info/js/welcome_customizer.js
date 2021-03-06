jQuery(document).ready(function() {
    var elitepress_aboutpage = elitepressLiteWelcomeScreenObject.aboutpage;
    var elitepress_nr_actions_required = elitepressLiteWelcomeScreenObject.nr_actions_required;

    /* Number of required actions */
    if ((typeof elitepress_aboutpage !== 'undefined') && (typeof elitepress_nr_actions_required !== 'undefined') && (elitepress_nr_actions_required != '0')) {
        jQuery('#accordion-section-themes .accordion-section-title').append('<a href="' + elitepress_aboutpage + '"><span class="elitepress-actions-count">' + elitepress_nr_actions_required + '</span></a>');
    }

    /* Upsell in Customizer (Link to Welcome page) */
    if ( !jQuery( ".elitepress-upsells" ).length ) {
        jQuery('#customize-theme-controls > ul').prepend('<li class="accordion-section elitepress-upsells">');
    }
    if ( !jQuery( ".elitepress-upsells" ).length ) {
        jQuery('#customize-theme-controls > ul').prepend('</li>');
    }
});