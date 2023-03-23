import axios from 'axios';
import { Request, Response } from 'express';

export default function handler(req: Request, res: Response) {
  if (req.method === 'POST') {
    const { age, gender, height, weight, activitylevel } = req.body;

    console.log('YES .ENV IS RUNNING: ', process.env.CALORIES_API_URL);

    const options = {
      method: 'GET',
      url: process.env.CALORIES_API_URL,
      params: {
        age: age.toString(),
        height: height.toString(),
        weight: weight.toString(),
        gender,
        activitylevel,
      },
      headers: {
        'X-RapidAPI-Key': process.env.CALORIES_API_KEY,
        'X-RapidAPI-Host': process.env.CALORIES_API_HOST,
      },
    };

    axios
      .request(options)
      .then(function (body) {
        res.status(200).json(body.data);
      })
      .catch(function (error) {
        res.status(400).json({ message: error.message });
      });
  }
}
