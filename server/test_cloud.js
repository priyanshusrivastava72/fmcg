import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({ cloud_name: 'ddm8evvuo', api_key: '827945148582373', api_secret: 'stXfUnLHuQqNmGnLD3Qjhc0JXVM' });
cloudinary.uploader.upload('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', { resource_type: 'raw', folder: 'fmcg_uploads/test', public_id: 'test_dummy.pdf' }).then(console.log).catch(console.error);
