var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function () {
        // la palabra reservada this hace referencia a el objeto llamado miAuto
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }

};
console.log(miAuto.detalleDelAuto())

