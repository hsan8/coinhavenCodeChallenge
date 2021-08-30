req.body.password = bcrypt.hashSync(req.body.password, 10);
