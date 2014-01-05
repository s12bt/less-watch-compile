module.exports = function(grunt){

  // プラグイン読み込み
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-connect");

  // 設定
  grunt.initConfig({
    less: {
      development: {
        files: {
          //css file : less file
          "../css/sample.css": "../less/default.less"
        }
      },
      production: {
        options: {
          cleancss: true
        },
        files: {
          //css file : less file
          "../css/sample.css": "../less/default.less"

        }
      }
    },

    concat: {
      development: {
        //連結するファイル
        src: ["../css/sample.css","../css/sample2.css"],
        //出力ファイル
        dest: "../css/sample.min.css"
      },

    watch: {
      options: {
        livereload: true,
      },
      //監視対象とするファイル
      files: "../less/default.less",
      //変更があったときのタスク
      tasks: ['less:development']
    },

    connect: {
      development: {
        options: {
          base: "../"
        }
      }
    }

  });

  //タスク実行
  grunt.registerTask('default', ["connect:development","watch"]);

}