export class Tank {
  x: number = 0
  y: number = 0
  ziDanSpeed: number = 10
  protected name:string = '坦克'
  shoot() {
    console.log('发射子弹')
  }
  sayHello() {
    console.log(`我是一名${this.name}`)
  }
}

export class PlayerTank extends Tank {
  x: number = 20;
  y: number = 20;
  name: string = '玩家坦克'
  left: number = 10;
  shoot() {
    console.log('玩家坦克发射子弹')
  }
}

export class EnemyTank extends Tank {
  name:string = '敌方坦克'
  shoot() {
    console.log('敌方坦克发射子弹')
  }
 }

const p:Tank = new PlayerTank();

console.log(p.x, p.y, p.sayHello());
if (p instanceof PlayerTank) {
  console.log(p.left)
}