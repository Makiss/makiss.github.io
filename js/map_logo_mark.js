ymaps.ready(function () {
              var myMap = new ymaps.Map('map', {
                      center: [59.93855426, 30.32247950],
                      controls: ['zoomControl'],
                      zoom: 17
                  }),
                  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                      hintContent: 'Собственный значок метки'
                  }, {
                      // Опции.
                      // Необходимо указать данный тип макета.
                      iconLayout: 'default#image',
                      // Своё изображение иконки метки.
                      iconImageHref: 'img/nerds-marker.png',
                      // Размеры метки.
                      iconImageSize: [231, 190],
                      // Смещение левого верхнего угла иконки относительно
                      // её "ножки" (точки привязки).
                      iconImageOffset: [-23, -190]
                  });

              myMap.geoObjects.add(myPlacemark);

              myMap.behaviors.disable('scrollZoom');
          });