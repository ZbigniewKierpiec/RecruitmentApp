const image=document.querySelectorAll('.drivers__driverOne__img')
const driverName = document.querySelector('.drivers__driverOne__h1')
const license = document.querySelector('.drivers__driverOne__license');
const sectionDrivers = document.querySelector('.drivers');
const driverInfo = document.querySelectorAll('.drivers__driverOne__status__info');
const btn = document.querySelectorAll('button');

const Drivers = [
    
     {
         id:1,
        name: 'Alicia',
         image: '3.jpg',
         license: 'Bus Driver',
        onJob: 'true',
        carName:'Bus',
         car:'bus.jpg'
         
     },
    {
        id:2,
        name: 'Zee',
        image:'54.jpg',
        license: 'Bus Driver',
        onJob: 'false',
        carName:'bus',
        car:'zeebus.jpg'
    },
    {
        id:3,
        name: 'Mark',
        image: '66.jpg',
        license: 'Taxi Driver',
        onJob: 'true',
        carName:'Mercedes',
        car:'mercedesmark.jpg'
    },
    {
        id:4,
        name: 'Patrick',
        image: '78.jpg',
        license:'Taxi Driver',
        onJob: 'true',
        carName:'Mazda',
        car:'mazda.jpg'
    },
    {
        id:5,
        name: 'Monik',
        image: '4.jpg',
        license:'Taxi Driver',
        onJob: 'false',
        carName:'vw',
        car:'monikvw.jpg'
    },
    {
        id:6,
        name: 'Loola',
        image: '30.jpg',
        license: 'Taxi Driver',
        onJob: 'true',
        carName:'Ford',
        car:'fordlola.jpg'

    },

    {
        id:7,
        name: 'Arthur',
        image: '21.jpg',
        license: 'Bus Driver',
        onJob: 'true',
        carName:'Bus',
        car:'arthurbus.jpg'

    },
    {
        id:8,
        name: 'Mario',
        image: '34.jpg',
        license: 'Bus Driver',
        onJob: 'true',
        carName:'Audi',
        car:'mariobus.jpg'

    },
    {
        id:9,
        name: 'Piter',
        image: '76.jpg',
        license: 'Taxi Driver',
        onJob: 'false',
        carName:'Audi',
        car:'piteraudi.jpg'

    },
    {
        id:10,
        name: 'Lincolne',
        image: '37.jpg',
        license: 'Taxi Driver',
        onJob: 'true',
        carName:'Audi',
         car:'lincolneaudi.jpg'

     },
     {
        id:11,
        name: 'Stefano',
        image: '40.jpg',
         license: 'Taxi Driver',
         onJob: 'false',
         carName:'Audi',
        car:'stefanoaudi.jpg'

     },
     {
        id:12,
        name: 'Mii',
        image: '90.jpg',
        license: 'Taxi Driver',
      onJob: 'true',
        carName:'Audi',
       car:'miaudi.jpg'

     },
]

    
   window.addEventListener('DOMContentLoaded', function () {
    
       displayAllDrivers(Drivers)

 })





 btn.forEach(btn => {
    
     btn.addEventListener('click', function(e) {
    
 const driversName =e.currentTarget.dataset.drivers
         const allDrivers = Drivers.filter(function (drivers) {
           
             if (drivers.license === driversName) {
                return drivers
             }
             if (drivers.onJob === driversName) {
                //  driverInfo.forEach(driver => {
                    
                //    driver.style.background='red'
                     
                // })
       return drivers
   }
             
})
console.log(allDrivers)
         if (driversName === 'all') {
    displayAllDrivers(Drivers)
             
         } else {
             
             displayAllDrivers(allDrivers)
             
             
}
})


 })

function displayAllDrivers(drivers) {
     

    let displayDrivers = drivers.map(function (d) {
    

        return `
   

        <div class="drivers__driverOne one">

        <div class="drivers__driverOne__mirorre">
        
        <h1 class='drivers__driverOne__mirorre__h1'>${d.carName}</h1>
        <div class="drivers__driverOne__mirorre__img">
        <img class='drivers__driverOne__mirorre__img__image'  src=${d.car} alt="">
        
        </div>
        
        
        </div>
        <div class="drivers__driverOne__img">
             <img  src=${d.image} alt="">
     </div>
                       
             <h1 class="drivers__driverOne__h1">${d.name}</h1>
<div class="drivers__driverOne__status">

<div   class="drivers__driverOne__status__info"></div>

 </div>
              <h2 class="drivers__driverOne__license">${d.license}</h2>
      </div>
     




         `
        

   })
    
   

    displayDrivers=displayDrivers.join('')
      sectionDrivers.innerHTML=displayDrivers
 



}
const info = document.querySelectorAll('.info');



const bolek = document.querySelectorAll('.drivers__driverOne__status__info');
const AllDriver = document.querySelectorAll('.drivers__driverOne');
const h1__drivers = document.querySelector('.All__info__h1__span--driver');
const h1__users = document.querySelector('.All__info__h1__span--user');
window.addEventListener('DOMContentLoaded', function () {
    


h1__drivers.textContent=Drivers.length




})


const Users = [
    
    {
        id:1,
        name: 'William',
        img: 'usersAssets/8.jpg',
        email:'bigmauler@live.com',
        phone: '02872-612384',
        adress:'54 Islington Park St, London, N1 1PX'
    },
   {
       id:2,
       name: 'Ava ',
       img: 'usersAssets/9.jpg',
       email: 'choset@me.com',
       phone: '01437-524050',
       adress:'Deanshanger Memorial Community Cent, Little London, Milton Keynes,'
   },
   {
       id:3,
       name: 'Sophia',
       img: 'usersAssets/29.jpg',
       email: 'baveja@icloud.com',
       phone: '01446-265517',
       adress:'Westgate House, 2a, Prebend St, London, N1 8PT '
   },
   {
       id:4,
       name: 'Harper',
       img: 'usersAssets/44.jpg',
       email: 'kiddailey@hotmail.com',
       phone: '01692-488617',
       adress:'14 Dagmar Passage, London, N1 2DN '
   },
   {
       id:5,
       name: 'Elijah',
       img: 'usersAssets/59.jpg',
       email: 'matty@yahoo.ca',
       phone: '07508-576689',
       adress:'100 Upper St, London, N1 0NP '
   },
   {
       id:6,
       name: ' Benjamin ',
       img: 'usersAssets/87.jpg',
       email: 'ccohen@mac.com',
       phone: '07901-871808',
       adress:'St. Marys Church, Upper St, London, N1 2TX'

   },

   {
       id:7,
       name: ' Lucas  ',
       img: 'usersAssets/72.jpg',
       email: 'gslondon@live.com',
       phone: '07589-543256',
       adress:'1 Islington Green, London, N1 2XH  '

   },
  
 
]


const btnUsers=document.querySelector('.btnUsers')
 window.addEventListener('DOMContentLoaded', function () {
    
     displayAllusers(Users)
     h1__users.textContent=Users.length
 })


function displayAllusers(user) {
    

    btnUsers.addEventListener('click', function () {
    

console.log(user)


        
        
 let displayUsers = user.map(function (u) {
    
return `
  



    
    
    <table cellspacing="0">
       <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th width="230">Adress</th>
       </tr>
 
       <tr class="tableUsers">
          <td><img src=${u.img} alt="" /></td>
          <td>${u.name}</td>
          <td>${u.email}</td>
          <td>${u.phone}</td>
          <td>${u.adress}</td>
       </tr>
 
    </table>
 


 




   `
    
  

})
        
displayUsers=displayUsers.join('')
sectionDrivers.innerHTML+=displayUsers




        


})





}
// const mirrore = document.querySelectorAll('.drivers__driverOne__mirorre'); 
window.addEventListener('DOMContentLoaded', function () {
    const mirrore = document.querySelectorAll('.drivers__driverOne__mirorre');
   
    const infoStatus = document.querySelectorAll('.drivers__driverOne__status__info');
    infoStatus.forEach(status => {
         
        status.addEventListener('click', function (e) {
           
   
        
            e.currentTarget.parentElement.parentElement.classList.toggle('active');






    })
    
    
     })




})
