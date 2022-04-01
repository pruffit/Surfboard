let myMap;
const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.750434, 37.606972],
        zoom: 16,
        controls: []
    });
    const coords = [
        [55.750434, 37.606972],
    ];
    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "assets/images/map/marker.svg",
        iconImageSize: [58, 73],
        iconImageOffset: [-40, -40]
    });
    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });
    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');
}
ymaps.ready(init);