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
          "../css/style.css": "../css/style.less",
          "../components/bootstrap/css/bootstrap.css": "../components/bootstrap/less/bootstrap.less"
        }
      },
      production: {
        options: {
          cleancss: true
        },
        files: {
          //css file : less file
          "../css/style.css": "../css/style.less",
          "../components/bootstrap/css/bootstrap.css": "../components/bootstrap/less/bootstrap.less"
        }
      }
    },

    concat: {
      development: {
        //連結するファイル
        src: ["../css/style.css","../components/bootstrap/css/bootstrap.css"],
        //出力ファイル
        dest: "../css/style.min.css"
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      //監視対象とするファイル
      files: ["../*","../components/bootstrap/less/*","../css/style.less"],
      //変更があったときのタスク
      tasks: ['less:development', 'concat:development']
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