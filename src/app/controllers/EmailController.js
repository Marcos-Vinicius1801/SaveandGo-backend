import nodemailer from 'nodemailer';


class EmailController{
  async send(req,res){
    const {name, email} = req.body;
    const ebookAdress = "https://drive.google.com/file/d/1NWiwcAZRNT5Y_A_TPGod4yd8jyKBeN29/view";
    let transport = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL, pass: process.env.PASS}
    });
    await transport.sendMail({
      from: "sonhe.savengo@gmail.com",
      to: `${email}`,
      subject:"Parabéns, o seu ebook Save&Go chegou! ",
      text: `Olá Sr(a) ${name}, para acessar o eBook, clique no link do Google: ${ebookAdress}.`,
      }).then(info=>{
        res.send(info);
      }).catch(err =>{
        return(err);
    });
      // verify connection configuration
      transport.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });
    }
 }



export default new EmailController();


