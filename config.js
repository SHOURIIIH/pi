module.exports = {
    app: {
        px: 's/',
        token: 'OTEzMTcxMzE5NDY0NTI5OTgy.G-mD8P.SASGDUNy-iMLk8aphs38wyap2GmcQuPOYquPzE',
        playing: 'SHOU IS THE BEST'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
