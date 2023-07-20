Berapa ukuran kompleksitas kodinganmu? Jelaskan detail kompleksitas
ukuran kompleksitas kodingan pada fungsi bracketCheck adalah O(n)
  Detail kompleksitas :
  
-pertema yaitu iterasi untuk memproses inputan(n) yang berupa character string 
kita melakukan iterasi sebanyak n kali O(n).

-kedua yaitu pengecekan data allowBracket menggunakan fungsi includes 
untuk mengecek keberadaan data inputan pada array allowbracket .Operasi includes pada array memiliki kompleksitas waktu O(1) karena array diindeks secara langsung

-ketiga pengecekan tanda kurung , pengecekan dilakukan dengan map yang sudah
dibuat diawal dimana tanda kurung buka akan ditambahkan kedalam stack. memiliki kompleksitas waktu O(1) karena objek menggunakan struktur hash map

-keempat operasi push dan pop pada stack 
tanda kurung tutup akan dibandingakn dengan hasil operasi pop pada stack hasil dari
pengecekan kondisi apabila data iterasi bukan tanda kurung buka atau bukan key dari map brackets.Operasi push dan pop pada tumpukan memiliki kompleksitas waktu O(1)

-kelima operasi perbadingan panjang stack pada return, mengecek apakah
stack kosong atau tidak , jika kosong mengembalikan response YES sebaliknya NO. Hanya melibatkan satu operasi perbandingan dan memiliki kompleksitas waktu O(1).


Jadi, keseluruhan kompleksitas waktu dari fungsi bracketCheck adalah O(n), di mana n adalah jumlah karakter dalam input.
