import { NextApiRequest, NextApiResponse} from 'next';

export default function getUserById(req: NextApiRequest, res: NextApiResponse) {
    res.json({hello: 'world', req: req.query});
}