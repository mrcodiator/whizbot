import path from "path"

module.exports = {
    mode: 'development', // Use 'development' for development
    entry: './src/public/chatbot.js',
    output: {
        filename: 'chatbot.bundle.js', // Output file name
        path: path.resolve(__dirname, 'public'), // Output directory
        library: 'Chatbot', // Optional: name for your library
        libraryTarget: 'umd', // Universal Module Definition
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
};
