import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllImage(req: NextApiRequest, res: NextApiResponse) {
    res.json({hello: 'world'});
}