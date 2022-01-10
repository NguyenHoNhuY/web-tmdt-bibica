<?php
/**
 * Blog Header
 *
 */
$show_breadcrumb = marketo_option('show_breadcrumb',marketo_defaults('show_breadcrumb'));
?>
<?php if($show_breadcrumb): ?>
    <div class="xs-breadcumb">
        <div class="container">
            <nav aria-label="breadcrumb">
                <?php marketo_get_breadcrumbs(); ?>
            </nav>
        </div>
    </div>
<?php endif; ?>
