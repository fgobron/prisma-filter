System.config({
    map: {
      main: 'dist' //Map "main" to the "dist" folder
    },
    packages: {
      //Define settings for loading files in "dist"
      dist: {
        main: 'test.js',
        format: 'system',
        defaultExtension: 'js'
      }
    }
});
