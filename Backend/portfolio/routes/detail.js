const express= require('express');
const controller=require('../controller/detailsController')
const router=express.Router();
router.get('/get-education', async (req, res, next) => {
    try {
        await controller.getControllerDetails(req, res, 'education');
    } catch (error) {
        next(error);
    }
});
router.get('/get-certification', async (req, res, next) => {
    try {
        await controller.getControllerDetails(req, res, 'certificate');
    } catch (error) {
        next(error);
    }
});
router.get('/get-internship', async (req, res, next) => {
    try {
        await controller.getControllerDetails(req, res, 'internship');
    } catch (error) {
        next(error);
    }
});
router.get('/get-project', async (req, res, next) => {
    try {
        await controller.getControllerDetails(req, res, 'project');
    } catch (error) {
        next(error);
    }
});


module.exports=router;