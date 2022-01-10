<?php
/**
 * Cấu hình cơ bản cho WordPress
 *
 * Trong quá trình cài đặt, file "wp-config.php" sẽ được tạo dựa trên nội dung 
 * mẫu của file này. Bạn không bắt buộc phải sử dụng giao diện web để cài đặt, 
 * chỉ cần lưu file này lại với tên "wp-config.php" và điền các thông tin cần thiết.
 *
 * File này chứa các thiết lập sau:
 *
 * * Thiết lập MySQL
 * * Các khóa bí mật
 * * Tiền tố cho các bảng database
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Thiết lập MySQL - Bạn có thể lấy các thông tin này từ host/server ** //
/** Tên database MySQL */
define( 'DB_NAME', 'bibica' );

/** Username của database */
define( 'DB_USER', 'root' );

/** Mật khẩu của database */
define( 'DB_PASSWORD', '' );

/** Hostname của database */
define( 'DB_HOST', 'localhost' );

/** Database charset sử dụng để tạo bảng database. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Kiểu database collate. Đừng thay đổi nếu không hiểu rõ. */
define('DB_COLLATE', '');

/**#@+
 * Khóa xác thực và salt.
 *
 * Thay đổi các giá trị dưới đây thành các khóa không trùng nhau!
 * Bạn có thể tạo ra các khóa này bằng công cụ
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Bạn có thể thay đổi chúng bất cứ lúc nào để vô hiệu hóa tất cả
 * các cookie hiện có. Điều này sẽ buộc tất cả người dùng phải đăng nhập lại.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'kvruy!TA*,5X.i`N[UaU?O~J*YabqrwG+h0!:G_GbQj#/BUlH3/^y6fL<(5HyIR`' );
define( 'SECURE_AUTH_KEY',  '-][#_Z6_,iX41VxL|V!J!66~ yu{Q= G2Xb+XW8{suoUl~m:8W_&)Y.*F*gh@>5g' );
define( 'LOGGED_IN_KEY',    '36*W^08WVzo)$nj;zFB)1c&ySo*xHcnp`B/*-<wbl?FX5ZE,}:4%/N);Inh;bNlx' );
define( 'NONCE_KEY',        ']4mk6rc}Q{V96Adq2iC.d)`#7-p0+!<TE/(:!]%w^i)|af0@<,#>5YUJC)HI/hU?' );
define( 'AUTH_SALT',        ',zfrOgOm_xuV4:A-h c3TH0anj0aB9[d2HZ$T}FRGLB.H.rz666tF]froZ]vip#~' );
define( 'SECURE_AUTH_SALT', '|a(G>aK-U^LP?.|@gh2]z{s%0`E_AoB[Xay:W>f5|Ux=|=}Qn:c@%x^!N9;4F.^s' );
define( 'LOGGED_IN_SALT',   'Yw}bpQRl^KfT~[ie09H+BWv~0SEI:Uk;)>)NSrGp)1I3DQnrX.Ev_%=?l)&#LsV@' );
define( 'NONCE_SALT',       'z-Pvn2k_3tD=q@lF(BVUo#-_K6f>]L.7>L%sjWg/KI/kv&7zQzyIM`kyUb!htrRZ' );

/**#@-*/

/**
 * Tiền tố cho bảng database.
 *
 * Đặt tiền tố cho bảng giúp bạn có thể cài nhiều site WordPress vào cùng một database.
 * Chỉ sử dụng số, ký tự và dấu gạch dưới!
 */
$table_prefix = 'wp_';

/**
 * Dành cho developer: Chế độ debug.
 *
 * Thay đổi hằng số này thành true sẽ làm hiện lên các thông báo trong quá trình phát triển.
 * Chúng tôi khuyến cáo các developer sử dụng WP_DEBUG trong quá trình phát triển plugin và theme.
 *
 * Để có thông tin về các hằng số khác có thể sử dụng khi debug, hãy xem tại Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Đó là tất cả thiết lập, ngưng sửa từ phần này trở xuống. Chúc bạn viết blog vui vẻ. */

/** Đường dẫn tuyệt đối đến thư mục cài đặt WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Thiết lập biến và include file. */
require_once(ABSPATH . 'wp-settings.php');
