class OpenAIController {
    constructor(openAIService) {
        this.openAIService = openAIService;
    }

    async correctCode(req, res) {
        const { code } = req.body;

        if (!code) {
            return res.status(400).json({ error: 'Code is required' });
        }

        try {
            const correctedCode = await this.openAIService.correctCode(code);
            return res.status(200).json({ correctedCode });
        } catch (error) {
            return res.status(500).json({ error: 'An error occurred while correcting the code' });
        }
    }
}

export default OpenAIController;