module.exports = {
    app: {
        px: 's/',
        token: 'OTEzMTcxMzgE5NDY0NTI5ObTgy.G-mD8P.SASGnDUNy-iMLk8aphhs38wyap2GmcbQuPOYqheuPzE',
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
