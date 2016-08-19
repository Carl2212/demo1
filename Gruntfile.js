/*grunt配置
 * grunt.initConfig 传入配置对象 （别名a）对象a 的属性为任务配置数据 例如 uglify 或concat 等
 * 多任务 可以任意命名目标来定义配置 可参考引号里面的foo ， bar
 * options 可选属性
 * src-dest(源文件-目标文件)文件映射的方式（简洁。文件对象格式。文件数组格式。）
 * 可使用通配符去查找系列文件
 * 属性名就是目标文件，源文件就是它的值(源文件列表则使用数组格式声明)
 */
module.exports = function(grunt) {

	//project configuration
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		//concat ： { foo:{} , bar:{} }
		concat : {
			options : {
				banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/'
			},
			dist : {
				src : ['static/src/*.js'],
				dest :  'static/build/<%= pkg.name %>.min.js'
			}
		},
		uglify :{
			options : {
				banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/',
			},
			//build : {
			//	src : 'static/src/<%= pkg.name %>.js',
			//	dest : 'static/build/<%= pkg.name %>.min.js'
			//}
			dist : {
				files : {
					'static/build/<%= pkg.name %>.min.js' : ['<%= concat.dist.dest %>']
				}
			}
		}
	});
	//加载包涵任务的插件
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//设置默认被执行的任务列表
	grunt.registerTask('default',['concat','uglify']);
};