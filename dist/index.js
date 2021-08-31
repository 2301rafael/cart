"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
    return Pessoa;
}());
var Motorista = /** @class */ (function (_super) {
    __extends(Motorista, _super);
    function Motorista(nome, idade, cidade, carteiraDeMotorista, veiculo) {
        var _this = _super.call(this, nome, idade, cidade) || this;
        _this.veiculo = veiculo;
        return _this;
    }
    Motorista.prototype.exibirDados = function () {
        console.log(this.nome, this.idade);
    };
    return Motorista;
}(Pessoa));
var zezinDeMaua = new Motorista('Ze Da Silva', 200, 'Mauá', 'Z', {
    tipo: 'Carroça',
    marca: 'Potrancas',
    modelo: 'HIGH PONEI TURBO',
    ano: 1911
});
