const multer = require("multer");

exports.uploadProfilePic = multer({dest:`/images/profiles`});
exports.uploadGroupIcon = multer({dest:`/images/groupIcons`});
exports.uploadMediaMessage = multer({dest:`/images/media`});