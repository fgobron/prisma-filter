System.config({
    map: {
      main: 'dist' //Map "index" to the "dist" folder
    },
    packages: {
      //Define settings for loading files in "dist"
      dist: {
        main: 'index.js',
        format: 'system',
        defaultExtension: 'js'
      }
    }
});
