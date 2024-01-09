class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (let item of this.items) {
            if (item.name === 'Sidra Asturiana') {
                // La Sidra Asturiana no cambia de calidad
                continue;
            }

            if (item.name === 'Quesu Cabrales') {
                if (item.quality < 50) {
                    item.quality += 1;
                }
            } else if (item.name === 'Fabada Asturiana') {
                if (item.diasParaVenta <= 0 && item.quality > 0) {
                    item.quality -= 2;
                } else if (item.quality > 0) {
                    item.quality -= 1;
                }

                item.diasParaVenta -= 1;
            } else {
                if (item.quality > 0) {
                    item.quality -= 1;
                }

                item.diasParaVenta -= 1;

                if (item.diasParaVenta <= 0 && item.quality > 0) {
                    item.quality -= 1;
                }
            }
        }
    }
}

class ItemAsturiano {
    constructor(name, diasParaVenta, quality) {
        this.name = name;
        this.diasParaVenta = diasParaVenta;
        this.quality = quality;
    }
}
