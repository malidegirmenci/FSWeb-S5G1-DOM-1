# DOM I

## Proje Açıklaması

HTML dosyasına dokunmadan JavaScript dosyasındaki içeriği kontrol ederek bir içerik yönetim sistemini taklit edeceksiniz. Bu proje, öğeleri seçmeye ve ardından DOM kullanarak HTML dosyasına dokunmadan bunları güncellemeye yönelik bir alıştırmadır.

`src/index.html` sayfası ile `src/orijinal.html` sayfasını karşılaştırın ve `index.html` dosyasında nelerin eksik olduğunu görmeye çalışın. Amacımız `orijinal.html` sayfasının aynısını sadece JavaScript kullanarak gerçekleştirmek. Hedef ekran görüntüsünü şurada bulabilirsiniz: `tasarım-dosyası/sayfa.png`.

`src/index.js` sayfası içinde tanımlanan nesnede, istenen dizaynı yaratabilmek için gerekli olan tüm datalar mevcuttur. Bu nesneyi asla değiştirmeyin! 

Tanımlanan nesnenin aşağısında gerekli DOM manipülasyonlarını gerçekleştirebilirsiniz:
    * Tipik olarak bir öğe seçer ve ardından nesneye metin içeriği eklemek veya niteliklerini değiştirmek için içindeki verileri kullanırsınız. 
    * Nokta veya köşeli parantez gösterimini kullanarak verilere erişin.

**ÖNEMLİ KURAL: HTML dosyasını düzenleyemezsiniz. Sadece JavaScript düzenlemesi yapacaksınız.**

## Git Kurulumu

* [X] Forklayarak bir kopya oluşturun.
* [X] Repository'nin kendi forkladığınız versiyonunu klonlayın.
* [X] Commit'inizi pushlayın: `git push origin main`.

## Projeyi çalıştırma

* [X] `npm install` komutuyla projenin bağlı dosyalarını indirebilirsiniz.
* [X] `npm start` komutuyla sayfayı deploy edebilirsiniz: `http://localhost:3000`.
* [X] Terminal ekranını split ederek 2. bir terminal ekranı daha açınız.
* [X] `npm test` komutuyla kodlarınızı test edebilirsiniz (yeni bir terminal penceresine ihtiyacınız var).

## Minimum Uygulanabilir Ürün

### İlgili öğelere erişmek için seçiciler(selectors) oluşturun

* [X] Öğrendiğiniz seçicilerden herhangi birini kullanarak ilgili DOM öğelerini düzenleyebileceğiniz değişkenleri tanımlayın.

### Metin içeriği ekle

* [X] Seçicilerinizi(selector) kullanarak ilgili öğelerin metin içeriklerini tasarım dosyasıyla eşleştirerek güncelleyin.
* [X] Elementler için gerekli text metinleri nesnenin içerisinden bulun; `src/index.js`.

### Sınıf(class) adları ekleyin

* [X] (menü içindeki) öğeleri italic(yatay) yapmak için class'ına `italic` atayın ve yalnız bırakın.
* [X] (footer içindeki) öğelerin bold(kalın) görünmesi için class'ına `bold` atayın ve yalnız bırakın.

### Resim kaynakları ekleyin

* [X] Sayfadaki img etiketlerinin `src` özniteliğini düzenleyerek doğru resimleri göstermesini sağlayın.
* [X] "src/index.js" sayfasındaki veri nesnesinin içindeki doğru resimlerin URL'lerini bulup,kullanın.
