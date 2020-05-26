# WARNING: WORK IN PROGRESS
## tokosepatu-ui: Front end dari proyek web toko sepatu
Sebuah proyek mata kuliah pemrograman web di Teknik Elektro Universitas Kristen Maranatha.



## Persiapan
Untuk mencoba web ini di windows, diperlukan beberapa dependencies:
  1. [XAMPP](https://www.apachefriends.org/index.html)
  2. [Composer](https://getcomposer.org/download/)
  3. [tokosepatu-backend](https://github.com/vincentutama/tokosepatu-backend)

Setelah sebua dependencies dipenuhi lakukan installasi sebagai berikut:
  1. Clone repository ini ke dalam folder xampp/htdocs
  2. Clone [vincentutama/tokosepatu-backend](https://github.com/vincentutama/tokosepatu-backend) ke folder manapun
  3. Jalankan server apache dan mysql melalui xampp
  4. Import 'tokosepatu.sql' (dari [tokosepatu-backend](https://github.com/vincentutama)) ke databasemu melalui phpmyadmin/mysqlconsole/dll
  5. Navigate ke folder tokosepatu-backend melalui terminal/powershell/cmd/etc dan jalankan command
  
    php artisan serve
   
  6. Akses website tokosepatu melalui localhost
  7. Akses halaman sign in untuk membuat account atau sign in
  
 ##useful links
 [CORS Error](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9)
 
 [Laravel app on Heroku](https://medium.com/@nedsoft/how-to-host-a-laravel-app-with-mysql-database-on-heroku-ab56b08be735)
 
 [laravel-cors](https://github.com/fruitcake/laravel-cors)
 
 [laravel setup](https://medium.com/@erthru/laravel-dan-vue-part-1-laravel-sebagai-backend-defafdd7ed0c)
 
 [getting started with laravel](https://devcenter.heroku.com/articles/getting-started-with-laravel)
 
 [stackoverflow - how to enable cors](https://stackoverflow.com/questions/55346154/how-to-enable-cors-in-laravel)
 
 [stackoverflow - cors problem heroku](https://stackoverflow.com/questions/53875548/cors-problems-on-heroku)
