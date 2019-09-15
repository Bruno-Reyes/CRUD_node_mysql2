const controller = {};

controller.list =  (req, res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM alimento', (err, alm)=>{
            
            if(err){
                res.json(err);
            }
                res.render('alimento', {
                    data : alm   
                });
        });
    });
};

controller.save = (req, res) => { 
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO alimento set ?' , [data], (err, alm)=>{
            res.redirect('/');
        });
    });
};

controller.add = (req,res) => {
    res.render('add');
};

controller.editr = (req,res) => {
    const { id_ali } = req.params;
    req.getConnection( (err, conn) => {
        conn.query('SELECT * FROM alimento WHERE id_ali = ?' , [id_ali], (err, rs) =>{
            res.render('update', {
                data : rs[0]
            });
        });
    });
};



controller.edit = (req,res) => {
    const { id_ali } = req.params;
    const alimento = req.body;
    req.getConnection( (err, conn) => {
        conn.query('UPDATE alimento  set ? WHERE id_ali = ?' , [alimento , id_ali], (err, rs) =>{
            res.redirect('/');
        });
    });
};

controller.delete = (req,res) => {
    const { id_ali } = req.params;
    req.getConnection( (err, conn) => {
        conn.query('DELETE FROM alimento WHERE id_ali = ? ' , [id_ali], (err, rs) =>{
            res.redirect('/');
        });
    });
};

module.exports = controller;