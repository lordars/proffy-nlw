import express, { response } from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionsController";
const router= express.Router();



const classesController  = new ClassesController();
const ConnetionController  = new ConnectionController();

router.get('/classes', classesController.index);
router.post('/classes', classesController.create);
router.post('/connection', ConnetionController.create);
router.get('/connection', ConnetionController.index);
export default router;