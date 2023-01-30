import { Router } from "express";
import * as videoCtrl from "../controller/videos.controller";

const router = Router();

router.get('/', videoCtrl.getVideos);

router.get('/:id', videoCtrl.getVideo);

router.post('/', videoCtrl.createVideo);

router.put('/:id', videoCtrl.updateVideo);

router.delete('/:id', videoCtrl.deleteVideo);

export default router;