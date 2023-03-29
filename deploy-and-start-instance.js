import dotenv from "dotenv";
import {randomString} from "./test-helper/randomString.mjs";
import {randomJSON} from "./test-helper/randomJSON.mjs";


import { ZBClient } from 'zeebe-node';

dotenv.config();
void (async () => {
  const zbc = new ZBClient({
    onConnectionError: () => console.log('Connection Error'),
  })
    
  const res = await zbc.deployProcess('./resources/hiring-process.bpmn')
  console.log(res)

var randomString=randomString(39)
var randomJSON=randomJSON()
var randomNumber=Math.floor((Math.random() * 100000000000) + 1)

  for (var i=0;i<1;i++){
  const result = await zbc.createProcessInstance('hiring-process', {
    FirstVar: randomString, second_var:testJSON, third_var:randomNumber
    
  })
  console.log(result)  }

})()

