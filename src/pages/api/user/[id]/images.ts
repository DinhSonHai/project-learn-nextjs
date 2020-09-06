import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllImageByUserId(req: NextApiRequest, res: NextApiResponse) {
    res.json({hello: 'world'});
}