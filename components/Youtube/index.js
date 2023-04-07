"use client"
import React, { Component } from 'react';
import YouTube from 'react-youtube';




function Youtube({ videoId }) {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    }

    function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    return (
        <YouTube videoId={`${videoId?.key ?? "Ew9ngL1GZvs"}`} opts={opts} onReady={_onReady} />
    )

}

export default Youtube