const CompileLess = require('broccoli-less-single')
const BroccoliMergeTrees = require('broccoli-merge-trees')
const EsTranspiler = require('broccoli-babel-transpiler')

const staticTree = 'app/static'

const stylesCompiledTree = new CompileLess( 'app/style', 'main.less', 'style.css' )

const scriptsCompiledTree = new EsTranspiler( 'app/scripts' )

module.exports = new BroccoliMergeTrees( [ staticTree, scriptsCompiledTree, stylesCompiledTree ] )
