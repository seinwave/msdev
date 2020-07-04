const fs = require('fs');


let i = 1;
let regEx = /xxxxx/g

let data = fs.readFile('_posts/2015-10-30-MaeHongSon copy.md', (err, data) => {
    if (err) {
        console.log(err)
    }
    
    for (let image of data.toString().match(regEx)){
        image = image.replace(regEx, `![descrip](/assets/images/travel-pics/Mae-Hong-Son/MaeHongSon-pic${i}.jpg){: .entry-image}`)
        i+=1
        data = data.toString().replace('xxxxx', image);
    }

    return fs.writeFile('biketrip.md', data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('you did it boi!')
    })
    
    
})



   


