import startApp from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp);

const networks = {
  //mtn numbers
  "0703": "mtn", "0813": "mtn", "0913":"mtn",
  "0706": "mtn", "0814": "mtn",
  "0803": "mtn", "0816": "mtn",
  "0806": "mtn", "0903": "mtn",
  "0810": "mtn", "0906": "mtn",
  //glo numbers
  "0705": "glo", "0805": "glo", "0905":"glo",
  "0807": "glo", "0815": "glo",
  //airtel numbers
  "0701": "airtel", "0708": "airtel", "0812":"airtel",
  "0802": "airtel", "0808": "airtel", "0902":"airtel",
  "0907": "airtel", "0901": "airtel", "0912":"airtel",
  //etisalat numbers
  "0809": "etisalat", "0817": "etisalat", "0818":"etisalat",
  "0908": "etisalat", "0909": "etisalat",
}

// const mtn = ['0703', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906', '0913'];
// const glo = ['0705', '0805', '0807', '0811', '0815', '0905'];
// const airtel = ['0701', '0708', '0802', '0808', '0812', '0902', '0907', '0901', '0912'];
// const etisalat = ['0809', '0817', '0818', '0908', '0909'];

const getNetwork = (phoneNumber) => {
  if(phoneNumber.length === 4){
    return networks[phoneNumber]
  }  
}
