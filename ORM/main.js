const {PromisedDatabase} = require('promised-sqlite3')
let dbPath = "./chinook/chinook.db"

const db = new PromisedDatabase()

class Album{
    constructor(AlbumId, Title, ArtistId){
        this.AlbumId = AlbumId
        this.Title = Title
        this.ArtistId = ArtistId   
    }

    static async all(){
        db.open(dbPath)
        const response = await db.all('SELECT * from albums')
        db.close()
        return response

    } // Returns an array of all albums

    static async get(id){
        db.open(dbPath)
        const response = await db.all(`SELECT * from albums WHERE AlbumId = ${id}`)
        db.close()
        const {AlbumId, Title, ArtistId} = response[0]
        let album = new Album(AlbumId, Title, ArtistId)
        return album
    } // Returns an instance of Album

    static async delete(id){
        try{
            db.open(dbPath)
            await db.run(`DELETE FROM albums WHERE AlbumId = ${id}`)
            db.close()
            
        }catch(error){

            console.log(error)
        }
    } // Deletes an album with supplied ID

    static async findBy(fields){
        db.open(dbPath)
        let where = Object.entries(fields).map( field => `${field[0]} IS '${field[1]}'`).join(" AND ")
        let response = await db.all(`SELECT * FROM customers WHERE ${where}`)
        db.close()
        console.log(response)

    } // fields : An object with column
    getId(){
        return this.AlbumId
    }
    getName(){
        return this.Title
    }
    async setName(newName){
        db.open(dbPath)
        await db.run(`UPDATE albums SET Title = '${newName}' WHERE AlbumId = ${this.AlbumId}`)
        db.close()
    } // Updates the name
    async save(){
        db.open(dbPath)
        await db.run(`INSERT INTO albums `)

    } // Saves the data to database, either an INSERT
    // destroy() // Deletes this artist from the database
    // getArtist() // Returns an instance of Artist
    

}

class Artist{
    constructor(ArtistId, Name){
        this.ArtistId = ArtistId
        this.Name = Name
    }


    static async all(){
        db.open(dbPath)
        const response = await db.all('SELECT * from artists')
        db.close()
        return response

    } // Returns an array of all artists
    
    static async get(id){
        const result = await sqlQuery("SELECT * from artists where artistId = ?", [id])
        const artist = new Artist(result.name)
        artist.setId(result.lastId)
        } // Returns an instance of Artist
    // static delete(id) // Deletes an artist with supplied I
    // static findBy(fields) // fields : An object with colum
    // getId()
    // getName()
    // setName(newName) // Updates the name
    // save() // Saves the data to database, either an INSERT
    // destroy() // Deletes this artist from the database
    // getAlbums() // Returns an array of Album instances for

}



async function main(){

// await Album.findBy({Country: 'Canada', FirstName: 'Aaron'})

let album = await Album.get(6)

console.log(await album.getName())
await album.setName('Hej')
album = await Album.get(6)
console.log(await album.getName())

}

main()
