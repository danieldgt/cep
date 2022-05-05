export default function handler(req, res) {

  let cep = req.query.cep;


  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'John Doe', cep: cep });
}