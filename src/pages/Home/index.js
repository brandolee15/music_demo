import React, {useState} from 'react';
import { Artist, DislikeBtn, FuncBtn, LikeBtn, ShowCard, Song1, AlbumBtn } from '../../components';


const Home = () => {
    const doSongs = () => {
        const songList = [ "Caution - 2020", "Somebody Told Me - 2004","For Reasons Unknown - 2006", "Run For Cover - 2017" ]
        for(let i=0; i < songList.length; i++){
            var node = document.createElement("li");
            var textnode = document.createTextNode(songList[i]);
            node.appendChild(textnode);                             
            document.getElementById("song").appendChild(node);
        }
        document.getElementById('btnSong').disabled= 'true';                   
    }

    const doAlbum = () => {
        const albumList = ["Hot Fuss - 2004", "Sam's Town - 2006", "Imploding the Mirage - 2020"]
        var titleNode = document.createElement("h3");
        var titleText = document.createTextNode("Albums");
        titleNode.appendChild(titleText)
    
        document.getElementById("root").appendChild(titleNode);
        for(let i=0; i < albumList.length; i++){
            var node = document.createElement("li");
            var textnode = document.createTextNode(albumList[i]);
            node.appendChild(textnode);                             
            document.getElementById("root").appendChild(node);
        }
        document.getElementById("btnAlbum").disabled ='true'
    }
    const [faveArtist, setFaveArtist] = useState({name: "The Killers", year: 2001})

    return(
        <div>
        <Artist /> 
        <ShowCard show={faveArtist} />
        <Song1 /> 
        <LikeBtn /> 
        <DislikeBtn />
        <FuncBtn clickhandler={doSongs}/> 
        <AlbumBtn clickhandler={doAlbum}/>
        </div>
    )
}

export default Home;