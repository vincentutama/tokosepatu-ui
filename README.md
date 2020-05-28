# WARNING: WORK IN PROGRESS
## tokosepatu-ui: Front end dari proyek web toko sepatu
Sebuah proyek mata kuliah pemrograman web di Teknik Elektro Universitas Kristen Maranatha.

## Warning
Versi sekarang dari repository ini ditujukan untuk penggunaan online hosting di heroku, URL-URL pada file html dan javascript masih di direct ke www.vinegar-vint.herokuapp.com sehingga tidak bisa melakukan hosting melalui localhost. Untuk melakukan hosting localhost harap gunakan file [ini](https://drive.google.com/file/d/1Ehu5v_LhRDy2EJquHfsPBDKQrcZd2RYf/view?usp=sharing).

## Issues
Program web ini masih merupakan work in progress sehingga memiliki banyak bug dan memerlukan banyak perbaikan dan pertambahan fitur, beberapa issue yang ada dalam proyek ini antara lain:
1. Stock belum bisa update setiap checkout berhasil (perlu tambahan api pada [tokosepatu-backend](https://github.com/vincentutama/tokosepatu-backend))
2. Cart tidak clear dengan sendirinya setelah melakukan checkout
3. Tombol "tambah item ke dalam cart" dapat menambah item ke dalam cart tetapi tidak ada animasi/aksi yang menunjukkan bahwa item telah ditambah
4. Redirect sign up page tidak jalan
5. Dapat terjadi pembuatan user dengan username yang sama (Backend tidak melakukan validasi)
6. (BUG) Produk dengan ItemId=1 dirender 2 kali pada halaman cart
7. Page-page yang menggunakan dummy content
8. Success page dapat diakses melalui link (tidak ada validasi apakah user selesai melakukan transaksi atau mengakses success page dari url)
9. Masalah cross-origin request
10. Filtering pada halaman product tidak berjalan (tidak ada APInya)
11. Javascript sudah modular tetapi masih ada script yang hardcoded di dalam file html (kerjaan Kalya) {action: pindah script hardcoded ke dalam file js}
12. API-API yang tidak akan digunakan belum dihapus

## Persiapan & Instalasi
Untuk mencoba web ini di localhost, diperlukan beberapa dependencies:
  1. [XAMPP](https://www.apachefriends.org/index.html)
  2. [Composer](https://getcomposer.org/download/)
  3. [tokosepatu-backend](https://github.com/vincentutama/tokosepatu-backend) //gunakan versi zip untuk local hosting

Setelah sebua dependencies dipenuhi lakukan installasi sebagai berikut:
  1. Clone repository ini ke dalam folder xampp/htdocs
  2. Clone [vincentutama/tokosepatu-backend](https://github.com/vincentutama/tokosepatu-backend) ke folder manapun
  3. Jalankan server apache dan mysql melalui xampp
  4. Import 'tokosepatu.sql' (dari [tokosepatu-backend](https://github.com/vincentutama)) ke databasemu melalui phpmyadmin/mysqlconsole/dll
  5. Navigate ke folder tokosepatu-backend melalui terminal/powershell/cmd/etc dan jalankan command
  
    php artisan serve
   
  6. Akses website tokosepatu melalui localhost
  7. Akses halaman sign in untuk membuat account atau sign in
  
 ## useful links
 
 [CORS Error](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9)
 
 [Laravel app on Heroku](https://medium.com/@nedsoft/how-to-host-a-laravel-app-with-mysql-database-on-heroku-ab56b08be735)
 
 [laravel-cors](https://github.com/fruitcake/laravel-cors)
 
 [laravel setup](https://medium.com/@erthru/laravel-dan-vue-part-1-laravel-sebagai-backend-defafdd7ed0c)
 
 [getting started with laravel](https://devcenter.heroku.com/articles/getting-started-with-laravel)
 
 [stackoverflow - how to enable cors](https://stackoverflow.com/questions/55346154/how-to-enable-cors-in-laravel)
 
 [stackoverflow - cors problem heroku](https://stackoverflow.com/questions/53875548/cors-problems-on-heroku)
