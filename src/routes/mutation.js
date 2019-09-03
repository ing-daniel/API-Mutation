const express = require('express');
const router = express.Router();
const DNA = require('../models/DNA');
const hasMutation = require('../common/functions');

router.get('/', (req, res) => {
  res.json({message:'Envia una peticion POST a /mutation o una peticion GET a /stats '});
});

router.post('/mutation', async (req, res) => {
  const { dna } = req.body;
  
  if(!dna) return res.status(404).json({ message: "Estructura invalida" });

  const isMutation = hasMutation(dna);

  const newDNA = new DNA({dna, isMutation});
  await newDNA.save();

  if(isMutation){
    res.json({ isMutation });
  }
  else{
    res.status(403).json({ isMutation });
  }
});

router.get('/stats', async (req, res) => {
  const count_mutations = await DNA.find({isMutation: true}).count();
  const count_no_mutations = await DNA.find({isMutation: false}).count();
  const ratio = count_mutations/count_no_mutations;
  res.json({ count_mutations, count_no_mutations, ratio });
});

module.exports = router;
