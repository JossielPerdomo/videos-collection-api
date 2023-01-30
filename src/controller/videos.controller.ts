import { RequestHandler } from "express";
import Video from "../models/video";

export const getVideos: RequestHandler = async(req, res) => {
    
    try {
        const videos = await Video.find();
        
        res.json({ videos });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: error
        });
    }

}

export const getVideo: RequestHandler = async(req, res) => {
    const id = req.params.id;

    try {
        const video = await Video.findById(id);

        if (!video) return res.status(204).json();

        res.json( video );

    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }

}

export const createVideo: RequestHandler = async(req, res) => {
    const { title, description, url } = req.body;

    const videoFoud = await Video.findOne({url});

    if (videoFoud) {
        return res.status(400).json({
            msg: 'Video already exists'
        });
    }

    const video = new Video({ title, description, url });
    const savedVideo = await video.save()
    res.status(201).json({
        msg: 'Video created',
        savedVideo
    });
}

export const updateVideo: RequestHandler = async(req, res) => {

    try {
        const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!video) return res.status(204).json();

        res.json({ video });

    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
}

export const deleteVideo: RequestHandler = async(req, res) => {
    const id = req.params.id;

    try {
        const video = await Video.findByIdAndDelete(id);

        if (!video) return res.status(204).json();

        res.json({ video });

    } catch (error) {
        res.status(400).json({
            msg: error
        });
    }
}