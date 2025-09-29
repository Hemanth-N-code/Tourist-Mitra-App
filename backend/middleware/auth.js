const jwt = require('jsonwebtoken');
const User = require('../models/User');
module.exports.auth = async (req,res,next)=>{
  const h = req.headers.authorization; if(!h) return res.status(401).json({error:'No auth'});
  const token = h.split(' ')[1]; if(!token) return res.status(401).json({error:'No token'});
  try{ const p=jwt.verify(token, process.env.JWT_SECRET||'secret'); const u=await User.findById(p.id); if(!u) return res.status(401).json({error:'No user'}); req.user=u; next(); }catch(e){return res.status(401).json({error:'Invalid'});}
};
module.exports.adminOnly = (req,res,next)=>{ if(!req.user) return res.status(401).json({error:'No user'}); if(req.user.role!=='admin') return res.status(403).json({error:'Admin only'}); next(); };
