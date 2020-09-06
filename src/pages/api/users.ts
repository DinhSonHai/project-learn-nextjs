import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllUser(req: NextApiRequest, res: NextApiResponse) {
    res.json({hello: 'world'});
}