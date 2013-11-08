module.exports = function(grunt){

  // プラグイン読み込み
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 設定
  grunt.initConfig({
    less: {
      //開発版のとき
      development: {
        files: {
          "./css/sample.css": "./less/default.less"
        }
      },
      //製品版のとき
      production: {
        options: {
          cleancss: true
        },
        files: {
          "./css/sample.css": "./less/default.less"
        }
      }
    },
    watch: {
      //監視対象とするファイル
      files: './less/default.less',
      //変更があったらlessコンパイルの開発版を実行する
      tasks: ['less:development']
    },

  });

  //引数をなにもつけないでgruntを実行したときは、watchを実行する
  grunt.registerTask('default', ["watch"]);

}