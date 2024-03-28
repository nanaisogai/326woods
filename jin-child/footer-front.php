    <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/base.min.js"></script>
    <footer class="footer">
      <div class="footer__inner mid-content">
        <div class="profile">
          <div class="profile__logo"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/top/logo.png" alt="326-woods"></div>
          <dl class="profile__detail">
            <dt>事業名</dt>
            <dd>
              <ruby data-ruby="ミツル">326
                <rt>ミツル</rt>
              </ruby>-woods
            </dd>
            <dt>代表</dt>
            <dd>堀篭 光</dd>
            <dt>所在地</dt>
            <dd>長野県佐久市</dd>
            <dt>事業内容</dt>
            <dd>薪の製造・販売</dd>
          </dl>
        </div>
        <div class="sns">
          <div class="sns__tw">
            <p class="sns__heading">Twitter</p>
            <div class="sns__detail"><a class="twitter-timeline" data-height="640" href="https://twitter.com/326Woods?ref_src=twsrc%5Etfw">Tweets by 326Woods</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>
          </div>
          <div class="sns__ig">
            <p class="sns__heading">Instagram</p>
            <div class="sns__detail">
              <?php echo do_shortcode("[instagram-feed feed=1]"); ?>
            </div>
          </div>
        </div>
        <div class="copyright">©︎ 326-woods</div>
      </div>
    </footer>

    <?php if( ! get_option('space_body') == null ) : ?>
    <?php echo get_option('space_body'); ?>
    <?php endif; ?>

    <?php wp_footer(); ?>

  </body>
</html>