let calculator = {
  // ваш код
  read(a, b){
    this.a = a;
    this.b = b;
  },
  sum(){
    let resultSum = this.a + this.b;
    return resultSum;
  },
  mul(){
    let resultMul = this.a * this.b;
    return resultMul;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
