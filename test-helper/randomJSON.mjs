export function randomJSON(length) {
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min 


const userNames = ["User1", "uSer2", "user3", "user4","user5"] 
const users = [] 
for (const name of userNames) {
  const age = getRandomNumber(18, 60)
  const email = `${name.toLowerCase()}@mail.com`
  const isActive = Math.random() < 0.5 
  const address = {
    street: `123 ${name} St`,
    city: "Cairo",
    state: "Egypt",
    zip: "11575"
  } 
  const orders = [] 
  const numOrders = getRandomNumber(1, 5) 
  for (let i=0;i<numOrders;i++) {
    const order = {
      id: getRandomNumber(1000, 9999),
      date: new Date().toISOString(),
      items: [
        { name: "Item 11", price: getRandomNumber(10, 50) },
        { name: "Item 2", price: getRandomNumber(20, 100) },
        { name: "Item 3", price: getRandomNumber(5, 25) }
      ]
    } 
    orders.push(order) 
  }
  const user = {
    name,
    age,
    email,
    isActive,
    address,
    orders
  } 
  users.push(user) 
}

const data = { users } 
const json = JSON.stringify(data, null, 2) 

return json 
}