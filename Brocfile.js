const CompileLess = require( 'broccoli-less-single' )
const BroccoliMergeTrees = require( 'broccoli-merge-trees' )
const EsTranspiler = require( 'broccoli-babel-transpiler' )

const appTree = 'app'

const stylesCompiledTree = new CompileLess( 'app/style', 'main.less', 'style.css' )

module.exports = new BroccoliMergeTrees( [ appTree, stylesCompiledTree ] )
