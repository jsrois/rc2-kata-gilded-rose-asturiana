import { Shop } from "../src/shop";

test('la sidra asturiana no cambia de calidad', () => {

    let products = [{
        name: 'Sidra Asturiana',
        quality: 10,
        diasParaVenta: 10
    }];

    let shop = new Shop(products);

    shop.updateQuality();

    expect(shop.items[0].quality).toBe(10);
})

test("El queso de cabrales aumenta de calidad", () => {
    let products = [{
        name: 'Quesu Cabrales',
        quality: 10,
        diasParaVenta: 10
    }];

    let shop = new Shop(products);

    shop.updateQuality();

    expect(shop.items[0].quality).toBe(11);
})

test("El queso de cabrales tiene una calidad máxima de 50", () => {
    let products = [{
        name: 'Quesu Cabrales',
        quality: 50,
        diasParaVenta: 10
    }];

    let shop = new Shop(products);

    shop.updateQuality();

    expect(shop.items[0].quality).toBe(50);
})