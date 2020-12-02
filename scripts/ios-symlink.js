const fs = require('fs');

const symlink = function () {
  if(fs.existsSync(__dirname + '/../Connect-SDK-iOS/ConnectSDK.framework/Versions/Current')) return;
  console.log('Symlinking');
  fs.symlinkSync(__dirname + '/../Connect-SDK-iOS/ConnectSDK.framework/Versions/A', __dirname + '/../Connect-SDK-iOS/ConnectSDK.framework/Versions/Current');
  fs.symlinkSync(__dirname + '/../Connect-SDK-iOS/ConnectSDK.framework/Versions/Current/ConnectSDK', __dirname + '/../Connect-SDK-iOS/ConnectSDK.framework/ConnectSDK');
  fs.symlinkSync(__dirname + '/../Connect-SDK-iOS/ConnectSDK.framework/Versions/Current/Headers', __dirname + '/../Connect-SDK-iOS/ConnectSDK.framework/Headers');
};

symlink();
