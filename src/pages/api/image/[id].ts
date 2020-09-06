import { NextApiRequest, NextApiResponse} from 'next';

export default function getImageById(req: NextApiRequest, res: NextApiResponse) {
    res.json({hello: 'world', req: req.query});
}