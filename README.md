# tokosepatu-ui: Front end dari proyek web toko sepatu
Sebuah proyek mata kuliah pemrograman web di Teknik Elektro Universitas Kristen Maranatha.

# Persiapan
Untuk mencoba web ini di windows, diperlukan beberapa dependencies:
  1. [XAMPP](https://www.apachefriends.org/index.html)
  2. [Composer](https://getcomposer.org/download/)
  3. [tokosepatu-backend](https://github.com/vincentutama)

Setelah sebua dependencies dipenuhi lakukan installasi sebagai berikut:
  1. Clone repository ini ke dalam folder xampp/htdocs
  2. Clone [vincentutama/tokosepatu-backend](https://github.com/vincentutama) ke folder manapun
  3. Jalankan server apache dan mysql melalui xampp
  4. Import 'tokosepatu.sql' (dari [tokosepatu-backend](https://github.com/vincentutama)) ke databasemu melalui phpmyadmin/mysqlconsole/dll
  5. Navigate ke folder tokosepatu-backend melalui terminal/powershell/cmd/etc dan jalankan command
  
    php artisan serve
   
  6. Akses website tokosepatu melalui localhost
  7. Akses halaman sign in untuk membuat account atau sign in
