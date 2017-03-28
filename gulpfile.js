//引入gulp  
var gulp = require('gulp');  
  
//自动加载gulp插件
var plugins = require('gulp-load-plugins')();  
var connect_reload = require('connect-livereload');//单独起livereload
var amdOptimize = require('amd-optimize');         //amd优化配置处理

//脚本检查  
gulp.task('lint', function () {  
    gulp.src('./src/js/**/*.js')
        .pipe(plugins.plumber())
        .pipe(plugins.jshint())  
        .pipe(plugins.jshint.reporter('default'));  
});  
 
//less处理 css压缩  
gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(plugins.plumber())
    .pipe(plugins.less())
    .pipe(gulp.dest('./dist/css'));
}); 
  
//css压缩  
gulp.task('css-min', function () {  
    gulp.src('./dist/css/dream.css') 
        .pipe(plugins.plumber()) 
        .pipe(plugins.minifyCss())  
        .pipe(plugins.rename("dream.min.css"))  
        .pipe(gulp.dest('./dist/css'));  
}); 
//es6 语法处理
gulp.task('es6', function() {
    return gulp.src('./src/es6/*js')
        .pipe(plugins.plumber())
        .pipe(plugins.babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist/js'));
});


// 图片处理  
gulp.task('img', function () {  
    gulp.src('src/img/**/*')
        .pipe(plugins.plumber())  
        .pipe(plugins.imagemin())  
        .pipe(gulp.dest('./dist/img'));  
});    

//require合并   js处理 通过amd插件处理requriejs问题 
gulp.task('rjs', function () {  
    gulp.src('./src/js/**/*.js')
        .pipe(plugins.plumber())  
        .pipe(amdOptimize("main", { 
 			//require config  
            paths: {  
                "jquery": "src/libs/jquery/jquery-3.2.0",  
                "jquery.serializeJSON": "src/libs/jquery.serializeJSON/jquery.serializejson.min",  
                "index": "src/js/index",  
                "main": "src/js/main"
            },  
            shim: { 
                'jquery.serializeJSON': ['jquery']
            }  
        }))  
        .pipe(plugins.concat("index.js"))           //合并  
        .pipe(gulp.dest("dist/js"))          //输出保存  
        .pipe(plugins.rename("index.min.js"))          //重命名  
        .pipe(plugins.uglify())                        //压缩  
        .pipe(gulp.dest("dist/js"));         //输出保存  
});  

gulp.task('connect',function(){
    var connect = require('connect');
    var serveStatic = require('serve-static'); 
    var directory = require('serve-index');
    var app = connect()
    .use(connect_reload({port:35729}))
    .use(serveStatic('src'))
    .use(directory('src'));

    var http = require('http');

    http.createServer(app).listen(9000).on('listening',function(){
        plugins.util.log('Started connect web server on http://localhost:9000');
    })

});


gulp.task('watch',function(){
    //在默认端口35729启动 livereload
    plugins.livereload.listen();
    
    //监听文件变化 livereload
    gulp.watch([
        'src/*.html',
        'src/*.css',
        'src/*.js'
    ]).on('change',function(file){
        plugins.livereload.changed(file.path);
     });


     //监听js变化  
    gulp.watch('./src/js/**/*.js', function () {       //当js文件变化后，自动检验 压缩  
        //gulp.run('lint', 'scripts');  
        gulp.run('lint', 'rjs');  
    });  

    //监听less变化  
    gulp.watch('src/less/*.less', function () {  
        gulp.run('less');  
    });  
  
    //监听css变化  
    gulp.watch('dist/css/dream.css', function () {  
        gulp.run('css-min');  
    });  
  
    //监听图片变化  
    gulp.watch('src/img/**/*', function () {  
        gulp.run('img');  
    }); 


})
  
gulp.task('default', ['connect','watch'] , function () {  
   require('opn')('http://localhost:9000',{app:'chrome'});
}); 

