


function gameObject() {
    const gameObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: { "Alan Anderson" : {
                number: "0",
                shoe: "16",
                points: "22",
                rebounds: "12",
                assists: "12",
                steals: "3",
                blocks: "1",
                slamDunks: "1"
                },	
                "Reggie Evans" : {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7"
                },
                "Brook Lopez" : {
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15"
                },
                "Mason Plumlee" : {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5"
                    },
                "Jason Terry" : {
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1"
                    }
                    
            }   
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: { "Jeff Adrien" : {
                number: "4",
                shoe: "18",
                points: "10",
                rebounds: "1",
                assists: "1",
                steals: "2",
                blocks: "7",
                slamDunks: "2"
                },	
                "Bismak Biyombo" : {
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10"
                },
                "Desagna Diop" : {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5"
                },
                "Ben Gordon ": {
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0"
                    },
                "Brendan Haywood" : {
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12"
                    }
                    
            }   
        },
}
return gameObject;
}



 function playerStats(playerName) {
   let object = gameObject();
   for (key in object) {
        let data = object[key];
        console.log(data.players[playerName]);
        return data.players[playerName];
   }
 }

 playerStats("Bismak Biyombo");

 function numPointsScored(playerName) {
    let object = gameObject();
    for (key in object) {
         let data = object[key];
            if ((data.players[playerName]) != undefined) {
                let points = data.players[playerName]["points"];
                console.log(points);
                return points;
            } 
    }
  }
 
  numPointsScored("Alan Anderson");

  function shoeSize(playerName) {
    let object = gameObject();
    for (key in object) {
         let data = object[key];
            if ((data.players[playerName]) != undefined) {
                let shoe = data.players[playerName]["shoe"];
                console.log(shoe);
                return shoe;
            } 
    }
  }

  shoeSize("Alan Anderson");

  function teamColors(teamName) {
    let object = gameObject();
    for (key in object) {
        if (object[key]["teamName"] == teamName) {
            let colors = object[key]["colors"];
            console.log(colors);
            return colors;  
        }
        } 
    }

    teamColors("Brooklyn Nets");


    function teamNames() {
        let object = gameObject();
        for (key in object) {
                
                console.log(object[key]["teamName"]);
                  
            }
             
        }
    
        teamNames();



        function playerNumbers(teamName) {
            let object = gameObject();
            for (key in object) {
            if (object[key]["teamName"] == teamName) {
                let players = object[key]["players"]
                for (stats in players) {
                    let jersies = players[stats]["number"]
                    console.log(jersies);
                    return jersies;
                }
            }
            } 
        }

        playerNumbers("Brooklyn Nets");


        function bigShoeSize() {
            let object = gameObject();
            
            for (key in object) {
                
                 let roster = object[key]["players"]
                 
                 
                 for (player in roster) {
                    let shoe;
                    let comp=0;
                    shoe = roster[player]["shoe"]
                    if (shoe>comp) {
                        comp=shoe;
                        console.log(shoe);  
                        
                    }
                    
                }
                
            }
          }
        
          bigShoeSize();






