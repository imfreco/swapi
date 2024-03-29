const { Router } = require('express');
const upload = require('../services/multer');

const {
    getAreas,
    uploadArea
} = require('../controllers/areaController');

function areaAPI(server) {
    const router = Router();
    server.use('/area', router);

    router.get('/', getAreas);
    router.get('/:area_id', getAreas);

    router.post('/', upload.single('images'), uploadArea);
}

module.exports = areaAPI;