import axios from 'axios';
import ConstantApi from '../constants/Api';

axios.defaults.baseURL = ConstantApi.api_base_url;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const language = "pt-BR";

export { language };



