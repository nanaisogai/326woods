<!DOCTYPE html>
<html lang="ja">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php get_template_part( 'ogp' ); ?> 

	<?php if( is_home() ): ?>
		<?php if( ! get_theme_mod('desc_text') == "" ): ?>
	<meta name="description" itemprop="description" content="<?php echo get_theme_mod('desc_text'); ?>">
		<?php endif; ?>
	<?php elseif( is_front_page() ): ?>
		<?php if ( ! get_post_meta($post->ID, 'post_desc',true) == null ) :?>
	<meta name="description" itemprop="description" content="<?php echo get_post_meta($post->ID, 'post_desc',true) ?>" >
		<?php elseif( ! get_theme_mod('desc_text') == "" ): ?>
	<meta name="description" itemprop="description" content="<?php echo get_theme_mod('desc_text'); ?>">
		<?php elseif( ! empty($post->post_excerpt) ) : ?>
	<meta name="description" itemprop="description" content="<?php echo $post->post_excerpt; ?>" >
		<?php else: ?>
	<meta name="description" itemprop="description" content="<?php echo jin_auto_desc_func(); ?>" >
		<?php endif; ?>
	<?php endif; ?>
	<?php wp_head(); ?>

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&amp;family=Shippori+Mincho:wght@500&amp;display=swap" rel="stylesheet">
	<!-- <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script> -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
	<!-- css-->
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/style.css">

	<?php if( ! get_option('space_head') == null ) : ?>
	<?php echo get_option('space_head'); ?>
	<?php endif; ?>

</head>

<body <?php body_class(); ?>>
	<header class="header">
		<h1 class="header__logo js-logo-hidden"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/top/logo.png" alt="326-woods"></h1>
		<button class="header__button"></button>
		<nav class="header-nav">
			<ul class="header-nav__list">
				<li class="header-nav__item"><a href="#knowUs">
						<ruby data-ruby="ミツル">326
							<rt>ミツル</rt>
						</ruby>-woodsを知る</a></li>
				<li class="header-nav__item"><a href="#knowOurFirewood">薪を知る</a></li>
				<li class="header-nav__item"><a href="#price">販売価格</a></li>
				<li class="header-nav__item"><a href="#blog">ブログ</a></li>
				<li class="header-nav__item"><a href="#member">メンバー</a></li>
				<li class="header-nav__contact header-nav__item"><a href="#contact"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/top/mail.svg" alt="">問い合わせ</a></li>
			</ul>
		</nav>
	</header>