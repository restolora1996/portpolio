exports.environment = process.env.CUSTOM_ENV || 'development';

exports.apiUrl = {
	development: 'http://localhost:8080/',
	// development: 'https://rnetworkapi.herokuapp.com/',
	sandbox: 'https://rnetworkapi.herokuapp.com/',
	staging: 'https://rnetworkapi.herokuapp.com/',
	production: 'https://rnetworkapi.herokuapp.com/'
};

exports.cookieConfig = { sameSite: 'lax' };
exports.cookieConfigServer = { httpOnly: true, sameSite: 'lax' };

// this will be inputed in bashrc to update the bashrc enter in terminal nano ~/.bashrc
// export NODE_ENV=development
// export CUSTOM_ENV=development
// export WITH_CRON=true

// export AHAAPIPORT=3501
// export AHACUSTOMADMINPORT=3502
// export AHAADMINPORT=3503
// export AHAUIBUILDERPORT=3504
// export AHAUIPORT=3505
// export AHAPORTALPORT=3506
// export ASIACEOAWARDSPORT=8003
// export ASIACEOPORT=8004
// export JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"
// export PATH=$PATH:$JAVA_HOME/bin
// export ANDROID_HOME=$HOME/Android/Sdk
// export PATH=$PATH:$ANDROID_HOME/emulator
// export PATH=$PATH:$ANDROID_HOME/tools
// export PATH=$PATH:$ANDROID_HOME/tools/bin
// export PATH=$PATH:$ANDROID_HOME/platform-tools
