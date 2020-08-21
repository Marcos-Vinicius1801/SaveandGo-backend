import axios from 'axios';
class LeadController{
  async index(req, res){
     await axios.get('https://saveandgo-landingpage.firebaseio.com/Leads.json').then(response =>{
        return res.json(response.data);
      }).catch((err) =>{
        console.log(err)
      });
  }

  async store(req, res){

    const { name, email} = req.body;
    const response = await axios({
      method: 'post',
      url: 'https://saveandgo-landingpage.firebaseio.com/Leads.json',
      data: {
        name,
        email,
     }
    }).then(response =>{
      return res.json(response.data);
    }).catch(err=>{
      console.log(err)
    });
    return res.json(response.data.name);
   }
}

export default new LeadController();
