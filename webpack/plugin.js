module.exports = class myPlugin {
  construtor(opt) {
    this.option = opt;
  }
  apply(compiler){ //编译时执行
    console.log("编译执行");
  }
};