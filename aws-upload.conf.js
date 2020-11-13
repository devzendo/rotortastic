module.exports = {
    credentials:"aws-credentials.json",
    bucketName:"rotortastic-devzendo-org",
    patterns:[
        // Note: MUST specify precisely which .js files are uploaded, DO NOT use wildcards.
        // aws-upload-conf.js (this file) and aws-credentials.json will be copied to the builder's dist folder
        // for upload. DO NOT UPLOAD THEM!
        "bundle.js",
        //"stylesheets/default.css",
        //"images/**/*.jpg",
        "index.html"
    ]
}