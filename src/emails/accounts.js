const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'triptisaini123@gmail.com',
        subject:'Thanks for joining in',
        text:`Welcome to the app , ${name}. Let me know how you like it `
    })
}
module.exports={
    sendWelcomeEmail
} /*
sgMail.send({
    to:'triptisaini123@gmail.com',
    from: 'triptisaini123@gmail.com',
    subject: 'HIoaa',
    text:'blasphemy'
})  
*/
/*exports.sendMail = function(req,res){

    var name = req.params.nome;
    var email = req.params.email;
    var code = req.params.code;
    
    const  sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('api_key');
    const  msg = {
      to: email,
      from: 'a@b.com',
      subject: 'event',
      text: 'Dear '+name+',\n'+'this is your code: \n',
      html: '<br><strong>'+code+'</strong><br>',
    };
    sgMail.send(msg).then(() => {
        res.redirect('/users');
    }).catch((error) => {
        console.log('error', error);
    });
    
    }*/
