//Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const path = require('path')
//Archivo necesario para trabajar con HTML.
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebPackPlugin = require('copy-webpack-plugin')

//Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
module.exports = {
    //Punto de entrada con su dirección. Aquí vive el código inicial y de aquí parte al desarrollo.
    entry: './src/index.js', 
    //Donde se envía el proyecto estructurado y compilado listo para producción.
    output: { 
        //Ruta a donde se mandarán los archivos compilados
        path: path.resolve(__dirname, 'dist'),
        //Este es el nombre del archivo final para producción.
        filename: 'main.js'
    },
    resolve: {
        //Extensiones de archivos que vamos a utilizar.
        extensions: ['.js'],
    },
    //Se crea un modulo con las reglas necesarias que vamos a utilizar.
    module: {
        rules: [
            // Estructura de Babel
            {
                //Nos permite identificar los archivos según se encuentran en nuestro entorno.
                test: /\.js?$/,
                exclude: /node_modules/,
                //Utilizar el babel-loader como configuración establecida.
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    //Establecemos los plugins que vamos a utilizar
    plugins: [
        //Permite trabajar con los archivos HTML
        new HtmlWebpackPlugin({
            //Cómo vamos a inyectar un valor a un archivo HTML.
            inject: true,
            //Dirección donde se encuentra el template principal
            template: './public/index.html',
            //El nombre que tendrá el archivo final
            filename: './index.html'
            
        }),
        //Se va a encargar de copiar los estilos hacia la carpeta dist
        new CopyWebPackPlugin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
        })
    ]
}