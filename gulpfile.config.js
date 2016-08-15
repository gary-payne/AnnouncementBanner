'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        this.src = "./src";
        this.allLibraries = this.src + '/libs/*.js';
        this.sourceJS = this.src + '/app/';
        this.rootJS = this.sourceJS + 'app.js'

        this.dist = './dist';
        this.htmlOutputPath = this.dist + '/html';
        this.librariesOutputPath = this.dist + '/libs';
        this.distOutputPath = this.dist + '/js';
        this.libsAndFilesToUpload = [this.librariesOutputPath + '/*.css',this.librariesOutputPath + '/*.js'];        

        this.bundleFile = 'bundle-announcebanner.js';
        this.distFilePaths = [this.distOutputPath + '/' + this.bundleFile, this.distOutputPath + '/' + this.bundleFile + '.map', this.htmlOutputPath + '/ShowAnnouncements.html'];
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
