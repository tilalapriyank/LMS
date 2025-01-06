import express from 'express';
import quizController from '../controllers/quizController.js';

const router = express.Router();

router.get('/:id', quizController.getQuizById);
router.get('/', quizController.getAllQuizzes);
router.post('/', quizController.createQuiz);
router.put('/:id', quizController.updateQuiz);
router.delete('/:id', quizController.deleteQuiz);
router.get('/author/:authorId', quizController.getQuizzesByAuthor);
router.get('/status/:status', quizController.getQuizzesByStatus);
router.get('/count', quizController.countQuizzes);
router.get('/count/author/:authorId', quizController.countQuizzesByAuthor);
router.get('/count/status/:status', quizController.countQuizzesByStatus);
router.get('/page/:page/size/:pageSize', quizController.getPaginatedQuizzes);

export default router;
