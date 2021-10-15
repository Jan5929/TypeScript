"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyTank = exports.PlayerTank = exports.Tank = void 0;
class Tank {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
exports.Tank = Tank;
class PlayerTank extends Tank {
    constructor() {
        super(...arguments);
        this.x = 20;
        this.y = 20;
    }
}
exports.PlayerTank = PlayerTank;
class EnemyTank extends Tank {
}
exports.EnemyTank = EnemyTank;
const p = new PlayerTank();
console.log(p.x, p.y);
